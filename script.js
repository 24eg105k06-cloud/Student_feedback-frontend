
const form = document.getElementById("feedbackForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const feedback = {
        studentName: document.getElementById("studentName").value,
        studentId: document.getElementById("studentId").value,
        faculty: document.getElementById("faculty").value,
        course: document.getElementById("course").value,
        rating: Number(document.getElementById("rating").value),
        comments: document.getElementById("comments").value
    };

    try {
        const response = await fetch(
            "http://localhost:8080/api/feedback",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(feedback)
            }
        );

        if (!response.ok) {
            throw new Error("Could not submit feedback");
        }

        message.textContent = "Feedback submitted successfully!";
        message.style.color = "green";
        form.reset();
    } catch (error) {
        message.textContent =
            "Unable to connect to the backend. Please start the Java server.";
        message.style.color = "red";
    }
});
