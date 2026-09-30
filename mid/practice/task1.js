const name = "Arafat";

let marks = [80, 70, 90, 40, 60];

function total(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }

    return sum;
}

function average(marks) {
    return total(marks) / marks.length;
}

function grade(avg) {
    if (avg >= 80) {
        return "A+";
    } else if (avg >= 70) {
        return "A";
    } else if (avg >= 60) {
        return "B";
    } else if (avg >= 50) {
        return "C";
    } else {
        return "F";
    }
}

function findHighestMark(marks) {
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    return highest;
}

function countPassedSubjects(marks) {
    let count = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 50) {
            count++;
        }
    }

    return count;
}

let avg = average(marks);

console.log("Name:", name);
console.log("Total:", total(marks));
console.log("Average:", avg);
console.log("Grade:", grade(avg));

if (avg >= 50) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}

console.log("Highest Mark:", findHighestMark(marks));
console.log("Passed Subjects:", countPassedSubjects(marks));