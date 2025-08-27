document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const gender = document.getElementById("gender").value;
  const course = document.getElementById("course").value;

  // Create table row
  const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${roll}</td>
    <td>${gender}</td>
    <td>${course}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  // Clear input fields
  document.getElementById("studentForm").reset();

  // Delete button functionality
  newRow.querySelector(".delete-btn").addEventListener("click", function() {
    table.removeChild(newRow);
  });
});
