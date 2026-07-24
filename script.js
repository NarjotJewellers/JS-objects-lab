// -----------------------------------------------------
// Part 1: Creating and Understanding Objects
// -----------------------------------------------------
 
const student = {
    name: "Rohit Mishra",
    age: 32,
    enrolled: true,
    courses: ["JavaScript", "HTML", "CSS"],
 
    displayInfo() {
        return `Student: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    },

    addCourse(newCourse) {
        this.courses.push(newCourse);
    },

    totalCourses() {
        return this.courses.length;
    }
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Method Output:", student.displayInfo());

// -----------------------------------------------------
// Part 2: Working with JSON
// -----------------------------------------------------

const jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

const parsedStudent = JSON.parse(jsonString);
console.log("Parsed Object:", parsedStudent);

// -----------------------------------------------------
// Part 3: Destructuring Assignment
// -----------------------------------------------------

const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [score1, score2] = scores;
console.log("First Score:", score1);
console.log("Second Score:", score2);

// -----------------------------------------------------
// Part 4: Spread Operator
// -----------------------------------------------------

const clonedStudent = { ...student, graduationYear: 2027 };
console.log("Cloned Student:", clonedStudent);

const newCourses = ["React", "Node.js"];
const mergedCourses = [...student.courses, ...newCourses];
console.log("Merged Courses:", mergedCourses);

// -----------------------------------------------------
// Part 5: Object Methods
// -----------------------------------------------------

student.addCourse("Python");
console.log("Courses After Adding:", student.courses);
console.log("Total Courses:", student.totalCourses());

// -----------------------------------------------------
// Bonus: Average Score Using Reduce
// -----------------------------------------------------

const averageScore = scores.reduce((sum, num) => sum + num, 0) / scores.length;
console.log("Average Score:", averageScore);
