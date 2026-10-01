/* =========================================================
   CHRISTIAN YUSUF ALFRED
   PORTFOLIO INTERACTIONS
========================================================= */


/* =========================================================
   01. MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.textContent = isOpen
            ? "Close"
            : "Menu";
    });


    // Close menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "Menu";
        });

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.08
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
} else {
    // Fallback jika browser tidak mendukung IntersectionObserver
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}


/* =========================================================
   03. HEADER SCROLL STATE
========================================================= */

const header = document.querySelector(".site-header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}

/* =========================================================
   PROJECT CASE STUDY
   ========================================================= */

const projectData = {

    graduation: {
        category: "BACKEND / API",
        title: "School Graduation Platform",
        description:
            "A backend system developed to support a school graduation platform, including student data management, CSV processing, announcement control, countdown information, and API-based communication.",

        role: "Backend & Database Developer",

        stack:
            "Express.js · REST API · JavaScript · Database · Postman",

        features: [
            "Student graduation data management",
            "CSV import and export workflow",
            "Server-controlled announcement information",
            "Countdown and graduation status handling",
            "REST API development and testing"
        ],

        images: [
            "./assets/images/projects/graduation-code.png",
            "./assets/images/projects/graduation-postman.png"
        ],

        github:
            "https://github.com/ALFREDS213/backend-kelulusan"
    },


    railway: {
        category: "DESKTOP APPLICATION",
        title: "Railway Ticket Reservation System",
        description:
            "A database-driven desktop application focused on railway ticket reservation and seat selection.",

        role: "Desktop Application Developer",

        stack:
            "C# · .NET · WinForms · Entity Framework 6 · BCrypt",

        features: [
            "Railway ticket reservation",
            "Seat selection",
            "Database-driven application workflow",
            "User authentication and password security"
        ],

        images: [],

        github: null
    },


    hotel: {
        category: "DESKTOP / DATABASE",
        title: "Hotel Reservation System",
        description:
            "A database-driven hotel management application covering room reservations, room types, customers, check-in, check-out, and additional item requests.",

        role: "Desktop Application Developer",

        stack:
            "C# · .NET · WinForms · Entity Framework 6 · SQL Server",

        features: [
            "Hotel room reservation",
            "Room and room type management",
            "Customer and reservation management",
            "Check-in and check-out workflow",
            "Additional item requests",
            "Relational database design"
        ],

        images: [
            "./assets/images/projects/hotel-database.png",
            "./assets/images/projects/hotel-form.png"
        ],

        github: null
    }

};


const caseStudy = document.querySelector("#caseStudy");
const caseStudyTitle = document.querySelector("#caseStudyTitle");
const caseStudyCategory = document.querySelector("#caseStudyCategory");
const caseStudyDescription =
    document.querySelector("#caseStudyDescription");

const caseStudyRole =
    document.querySelector("#caseStudyRole");

const caseStudyStack =
    document.querySelector("#caseStudyStack");

const caseStudyFeatures =
    document.querySelector("#caseStudyFeatures");

const caseStudyImages =
    document.querySelector("#caseStudyImages");

const caseStudyGithub =
    document.querySelector("#caseStudyGithub");

const caseStudyClose =
    document.querySelector(".case-study-close");

const caseStudyOverlay =
    document.querySelector(".case-study-overlay");


function openCaseStudy(projectName) {

    const project = projectData[projectName];

    if (!project || !caseStudy) {
        return;
    }

    caseStudyCategory.textContent = project.category;

    caseStudyTitle.textContent = project.title;

    caseStudyDescription.textContent =
        project.description;

    caseStudyRole.textContent =
        project.role;

    caseStudyStack.textContent =
        project.stack;


    /* FEATURES */

    caseStudyFeatures.innerHTML = "";

    project.features.forEach(feature => {

        const li = document.createElement("li");

        li.textContent = feature;

        caseStudyFeatures.appendChild(li);

    });


    /* IMAGES */

    caseStudyImages.innerHTML = "";

    if (project.images.length > 0) {

        project.images.forEach(imagePath => {

            const image = document.createElement("img");

            image.src = imagePath;

            image.alt = `${project.title} project screenshot`;

            caseStudyImages.appendChild(image);

        });

    }


    /* GITHUB */

    if (project.github) {

        caseStudyGithub.href = project.github;

        caseStudyGithub.style.display = "flex";

    } else {

        caseStudyGithub.style.display = "none";

    }


    caseStudy.classList.add("is-open");

    caseStudy.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


function closeCaseStudy() {

    if (!caseStudy) {
        return;
    }

    caseStudy.classList.remove("is-open");

    caseStudy.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


/* OPEN */

document
    .querySelectorAll(".project-open")
    .forEach(button => {

        button.addEventListener("click", () => {

            const projectName =
                button.dataset.project;

            openCaseStudy(projectName);

        });

    });


/* CLOSE */

if (caseStudyClose) {

    caseStudyClose.addEventListener(
        "click",
        closeCaseStudy
    );

}


if (caseStudyOverlay) {

    caseStudyOverlay.addEventListener(
        "click",
        closeCaseStudy
    );

}


/* ESC */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeCaseStudy();

    }

});