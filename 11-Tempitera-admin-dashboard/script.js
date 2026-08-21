const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarLinks = document.querySelectorAll(".page-link-logo");
const homeLink = document.querySelector(".home");

if (homeLink) {
    homeLink.classList.add("active");
}

if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
        const isOpen = sidebar.classList.toggle("is-open");
        sidebarToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

sidebarLinks.forEach((sidebarLink) => {
    sidebarLink.addEventListener("click", () => {
        sidebarLinks.forEach((link) => link.classList.remove("active"));
        sidebarLink.classList.add("active");

        if (window.innerWidth <= 640 && sidebar && sidebarToggle) {
            sidebar.classList.remove("is-open");
            sidebarToggle.setAttribute("aria-expanded", "false");
        }
    });
});
