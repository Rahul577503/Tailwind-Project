document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const courseInput = document.getElementById("courseInput");
    const dateInput = document.getElementById("dateInput");
    const certificateContainer = document.querySelector(".certificate-container");
    const certificate = document.querySelector(".certificate");

    const generateCertificateButton = document.getElementById("generateCertificate");

    generateCertificateButton.addEventListener("click", function () {
        const recipientName = nameInput.value;
        const courseName = courseInput.value;
        const completionDate = new Date(dateInput.value).toLocaleDateString();

        // Validate input fields
        if (!recipientName || !courseName || !completionDate) {
            alert("Please fill in all fields before generating the certificate.");
            return;
        }

        // Update certificate content with user data
        const recipientNameElement = document.getElementById("recipientName");
        const courseNameElement = document.getElementById("courseName");
        const completionDateElement = document.getElementById("completionDate");

        recipientNameElement.textContent = recipientName;
        courseNameElement.textContent = courseName;
        completionDateElement.textContent = completionDate;

        // Hide the certificate-container by setting its style to "display: none"
        certificateContainer.style.display = "none";

        // Show the certificate
        certificate.style.display = "block";
    });
    
});

