document.addEventListener("DOMContentLoaded", function() {

    AOS.init({
        duration: 1000,
        once: true
    });

    new Typed("#typing", {
        strings: [
            "Data Analyst",
            "Data Science Enthusiast",
            "Power BI & Python Specialist",
            "Turning Data into Insights"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
});


// Scroll progress
window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById("progress").style.width = `${(scroll / height) * 100}%`;
});



const form = document.getElementById("my-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.innerHTML = "<div class='alert alert-success'>✅ Message sent successfully!</div>";
            form.reset();
        } else {
            status.innerHTML = "<div class='alert alert-danger'>❌ Oops! Something went wrong.</div>";
        }
    } catch (error) {
        status.innerHTML = "<div class='alert alert-danger'>❌ Network error. Try again later.</div>";
    }
});