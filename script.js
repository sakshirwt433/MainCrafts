document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page refresh

    // 1. Get Values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // 2. Client-Side Validation
    if (!name || !email || !message) {
        alert("Error: All fields are required!");
        return;
    }

    // 3. Save to LocalStorage
    // Fetch existing data or initialize empty array
    let submissions = JSON.parse(localStorage.getItem("byteverse_contacts")) || [];

    // Create new entry object
    const newEntry = {
        name: name,
        email: email,
        message: message,
        date: new Date().toLocaleString()
    };

    // Add to array and save back to storage
    submissions.push(newEntry);
    localStorage.setItem("byteverse_contacts", JSON.stringify(submissions));

    // 4. Feedback & Reset
    alert("Success! Data saved to LocalStorage.");
    document.getElementById("contactForm").reset();
    
    // Optional: Redirect to submissions page
    window.location.href = "submissions.html";
});