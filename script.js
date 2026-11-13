
const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const studentId = document.getElementById("studentId").value;
    const email = document.getElementById("email").value;

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    const idCell = document.createElement("td");
    idCell.textContent = studentId;

    const emailCell = document.createElement("td");
    emailCell.textContent = email;

    row.appendChild(nameCell);
    row.appendChild(idCell);
    row.appendChild(emailCell);

    studentList.appendChild(row);

    studentForm.reset();

    alert("Student registered successfully!");
});
