

const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("studentEmail").value.trim();

    if (!name || !studentId || !email) {
        alert("Please fill in all fields.");
        return;
    }

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    const idCell = document.createElement("td");
    idCell.textContent = studentId;

    const emailCell = document.createElement("td");
    emailCell.textContent = email;

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function() {
        row.remove();
    });

    actionCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(idCell);
    row.appendChild(emailCell);
    row.appendChild(actionCell);

    studentList.appendChild(row);

    studentForm.reset();

    alert("Student registered successfully!");
});
