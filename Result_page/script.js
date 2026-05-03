document.addEventListener("DOMContentLoaded", function () {

    // Download Report Button
    const downloadBtn = document.querySelector(".top-bar button");

    downloadBtn.addEventListener("click", function () {
        alert("Your Resume Report is Downloading...");
    });

    // Sidebar Active Menu
    const menuItems = document.querySelectorAll(".sidebar ul li");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            menuItems.forEach(li => li.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Score Animation
    const scoreText = document.querySelector(".circle span");
    let score = 0;
    let finalScore = 78;

    const interval = setInterval(() => {
        score++;
        scoreText.textContent = score + "%";

        if (score >= finalScore) {
            clearInterval(interval);
        }
    }, 30);

});
