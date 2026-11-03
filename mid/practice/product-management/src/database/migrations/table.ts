import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductAndEmployeeTables1793577600000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "products" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "category" VARCHAR NOT NULL,
        "price" DOUBLE PRECISION NOT NULL,
        "quantity" INTEGER NOT NULL
      )
    `);

    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "employees" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "email" VARCHAR NOT NULL UNIQUE,
        "phone" VARCHAR NOT NULL,
        "password" VARCHAR NOT NULL,
        "age" INTEGER NOT NULL,
        "yearsOfWorking" INTEGER NOT NULL
      )
    `);
  }


  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "employees"`);
    await queryRunner.query(`DROP TABLE "products"`);
  }
}