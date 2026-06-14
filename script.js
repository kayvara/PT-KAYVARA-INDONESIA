const chatButton = document.getElementById("chatButton");
const loading = document.getElementById("loading");

// tombol chat utama
chatButton.addEventListener("click", function () {

    loading.classList.remove("hidden");

    setTimeout(() => {
        window.open("https://direct.lc.chat/19779830", "_blank");
        loading.classList.add("hidden");
    }, 2500);

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
