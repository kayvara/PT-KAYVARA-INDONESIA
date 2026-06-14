const chatButton = document.getElementById("chatButton");

chatButton.addEventListener("click", function () {
    window.open("https://direct.lc.chat/19779830", "_blank");
});
const chatButton = document.getElementById("chatButton");

chatButton.addEventListener("click", function () {
    window.open("https://direct.lc.chat/19779830", "_blank");
});


// NAVBAR FUNCTION
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("click", function () {

        navItems.forEach(i => i.classList.remove("active"));
        this.classList.add("active");

        if (this.textContent.includes("Chat")) {
            window.open("https://direct.lc.chat/19779830", "_blank");
        }

    });
});
