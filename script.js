const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const password = document.getElementById("password").value;

  const nameRegex = /^[a-zA-Z]+$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!passwordPattern.test(password)) {
    alert(
      "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one special character (!@#$%^&*), and one number."
    );
    return;
  } else if (!nameRegex.test(firstName) && !nameRegex.test(lastName)) {
    alert("Firstname and Lastname should be texts only.");
    return;
  }

  document.getElementById("SubscriptionForm").style.display = "none";
  document.getElementById("result").style.display = "block";
});
