 document
        .getElementById("SubscriptionForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const password = document.getElementById("password").value;
          const passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

          if (!passwordPattern.test(password)) {
            alert(
              "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one special character (!@#$%^&*), and one number."
            );
            return;
          }

          document.getElementById("SubscriptionForm").style.display = "none";
          document.getElementById("result").style.display = "block";
        });
