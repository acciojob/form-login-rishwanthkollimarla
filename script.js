function getFormvalue(event) {
  event.preventDefault(); // Prevent form from submitting

  const form = event.target;
  let firstName = form.fname.value.trim();
  let lastName = form.lname.value.trim();

  if (!firstName && !lastName) {
    alert("Please enter both first name and last name.");
    return;
  }

  alert(firstName + " " + lastName);
}
