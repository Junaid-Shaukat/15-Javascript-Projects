document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const sidebarToggle = document.querySelector(".sidebar-icon i");

    sidebarToggle.addEventListener("click", () => {
        if (sidebar.style.transform === "translateX(-270px)") {
            sidebar.style.transform = "translateX(0)";
            sidebar.style.transition = "transform 0.3s ease-in-out";
            sidebarToggle.classList.add("bx-x");
            sidebarToggle.classList.remove("bx-menu");
        } else {
            sidebar.style.transform = "translateX(-270px)";
            sidebar.style.transition = "transform 0.3s ease-in-out";
            sidebarToggle.classList.add("bx-menu");
            sidebarToggle.classList.remove("bx-x");
        }
    });
});
