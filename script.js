const students = [
    { roll: "101", name: "Aman", subject: "Math", marks: 85, grade: "A" },
    { roll: "102", name: "Riya", subject: "Science", marks: 72, grade: "B" },
    { roll: "103", name: "Rahul", subject: "English", marks: 90, grade: "A+" }
];

function getValue() {
    const searchValue = document.getElementById("searchBox").value.trim();
    const resultDiv = document.getElementById("result");

    if(searchValue === "") {
        alert("Please enter roll number");
        resultDiv.classList.remove("show");
        return;
    }

    const student = students.find(s => s.roll === searchValue);

    // result section dikhao

    if (student) {
        // HTML me data bhejo
        resultDiv.classList.add("show");
        document.getElementById("resultRn").innerText = student.roll;
        document.getElementById("resultN").innerText = student.name;
        document.getElementById("resultSbj").innerText = student.subject;
        document.getElementById("resultM").innerText = student.marks;
        document.getElementById("resultG").innerText = student.grade;
    } else {
        resultDiv.classList.remove("show");
        // agar student na mile
        alert("no student found");
        resultDiv.classList.remove("show");
        return;
    }
}
