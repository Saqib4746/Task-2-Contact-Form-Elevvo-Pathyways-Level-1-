const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("statusMsg");
const themeSwitch = document.getElementById("themeSwitch");
const themeLabel = document.getElementById("themeLabel");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeSwitch.checked = true;
  themeLabel.textContent = "🌙 Dark Mode";
}

// Toggle theme
themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    document.body.classList.add("dark");
    themeLabel.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    themeLabel.textContent = "🌞 Light Mode";
    localStorage.setItem("theme", "light");
  }
});

// Form validation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    statusMsg.style.color = "red";
    statusMsg.textContent = "⚠️ Please fill in all fields.";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    statusMsg.style.color = "red";
    statusMsg.textContent = "⚠️ Please enter a valid email address.";
    return;
  }

  statusMsg.style.color = "green";
  statusMsg.textContent = "✅ Message sent successfully!";
  form.reset();
});
