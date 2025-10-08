//  storing the school's name
let schoolName = "Milimani Primary School";

//  number of students
let studentCount = 5;

// If the school has more than 0 students, show that it is open
if (studentCount > 0) {
    console.log(schoolName + " is open and running!");
} else {
    console.log(schoolName + " is closed for now.");
}



// welcome message on the page
function changeMessage() {
    // We grab the element with id "welcome-message"
    let message = document.getElementById("welcome-message");
    message.textContent = "Welcome to another exciting day of learning at " + schoolName + "!";
}

// T background color change randomly
function changeBackgroundColor() {
    let colors = ["#f0f8ff", "#ffe4e1", "#fffacd", "#e6e6fa"];
    // Pick a random color from the list
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// A simple array (list) of student names
let students = ["Aisha", "Brian", "Cynthia", "David", "Eunice"];

// This function will loop through all students and show them on the page
function showStudents() {
    let list = document.getElementById("student-list");
    list.innerHTML = ""; // clear the list before adding

    // A for loop to go through every name
    for (let i = 0; i < students.length; i++) {
        let li = document.createElement("li"); // make a list item
        li.textContent = students[i]; // set the student's name
        list.appendChild(li); // put it on the page
    }
}


// Connect buttons to their functions when clicked
document.getElementById("changeMessageBtn").addEventListener("click", changeMessage);
document.getElementById("showStudentsBtn").addEventListener("click", showStudents);
document.getElementById("changeColorBtn").addEventListener("click", changeBackgroundColor);

// Bonus: Log a simple message to show the page is working
console.log("Milimani Primary School website is ready!");