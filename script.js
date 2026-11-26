
// Automatically update the copyright year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Temporary email signup response

document.getElementById("signup-form").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        document.getElementById("form-message").textContent =
            "Thank you for your interest! Email signup will be available soon.";

    }
);
