document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById("nameInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    if (name === "" || message === "") {
        // Alert if fields are empty
        alert("Please fill out all fields."); 
    } else {
        // Optional: Reset the formany
        document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
        e.target.reset(); 
    }
});

document.getElementById("loadUsersBtn").addEventListener("click", async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        const userList = document.getElementById("userList");
        userList.innerHTML = ""; // Clear the list before adding new users

        users.forEach(user => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${user.name}</strong> <br>
                <em>Username:</em> ${user.username} <br>
                <em>Email:</em> <a href="mailto:${user.email}">${user.email}</a> <br>
                <em>Phone:</em> ${user.phone} <br>
                <em>Company:</em> ${user.company.name} <br>
                <hr>
            `;
            userList.appendChild(li);
        });
    } catch (err) {
        console.error("Failed to load users:", err);
    }
});

document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
        q.nextElementSibling.classList.toggle("visible");
    });
});

