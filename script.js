
// ======================================
// MEMON APPLE iSTORE - MAIN JAVASCRIPT
// ======================================


// 1. MOBILE MENU
const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("active");

        menuToggle.innerHTML = isOpen ? "&times;" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close menu after clicking a navigation link
    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// 2. FOOTER CURRENT YEAR
const footerYear = document.getElementById("footerYear");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}


// 3. BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// 4. SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
    ".reveal-left, .reveal-right, .trust-card, .trend-card, .category-item"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("show");
    });

}


// 5. NEWSLETTER FORM
const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput = newsletterForm.querySelector("input[type='email']");

        const email = emailInput.value.trim();

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        alert("Thank you for subscribing to MEMON APPLE iSTORE!");

        newsletterForm.reset();

    });

}


// 6. SMOOTH SCROLL FOR INTERNAL LINKS
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// 7. HERO IMAGE ERROR HANDLING
const heroImage = document.querySelector(".hero-product-image");

if (heroImage) {

    heroImage.addEventListener("error", function () {
        this.style.display = "none";
        console.warn("Hero image could not be loaded. Check Images/hero.jpg");
    });

}


// 8. CONSOLE MESSAGE
console.log("MEMON APPLE iSTORE JavaScript Loaded Successfully!");
document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // MOBILE MENU
    // =================================

    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            navigation.classList.toggle("active");

            if (navigation.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
                menuToggle.setAttribute("aria-expanded", "true");
            } else {
                menuToggle.innerHTML = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            }

        });

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navigation.classList.remove("active");
                menuToggle.innerHTML = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            });

        });
    }


    // =================================
    // PRODUCT IMAGE SLIDER
    // =================================

    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev");

    let currentSlide = 0;
    let sliderTimer;

    // Next button automatically create hoga
    let nextButton = document.createElement("button");

    nextButton.className = "arrow next";
    nextButton.id = "next";
    nextButton.innerHTML = "&#8250;";
    nextButton.setAttribute("aria-label", "Next");

    const slideContainer = document.querySelector(".feature");

    if (slideContainer && prevButton) {
        slideContainer.appendChild(nextButton);
    }

    function showSlide(index) {

        if (slides.length === 0) return;

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add("active");
    }

    if (slides.length > 0) {

        showSlide(0);

        if (prevButton) {
            prevButton.addEventListener("click", function () {
                showSlide(currentSlide - 1);
                restartSlider();
            });
        }

        nextButton.addEventListener("click", function () {
            showSlide(currentSlide + 1);
            restartSlider();
        });

        function startSlider() {

            sliderTimer = setInterval(function () {
                showSlide(currentSlide + 1);
            }, 3500);

        }

        function restartSlider() {
            clearInterval(sliderTimer);
            startSlider();
        }

        startSlider();
    }


    // =================================
    // FOOTER CURRENT YEAR
    // =================================

    const footerYear = document.getElementById("footerYear");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }


    // =================================
    // BACK TO TOP
    // =================================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    // =================================
    // NEWSLETTER FORM
    // =================================

    const newsletterForm = document.getElementById("newsletterForm");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const emailInput = newsletterForm.querySelector("input[type='email']");

            if (emailInput && emailInput.checkValidity()) {

                alert("Thank you for subscribing to MEMON APPLE iSTORE!");

                newsletterForm.reset();

            } else {

                alert("Please enter a valid email address.");

            }

        });
    }


    // =================================
    // SMOOTH SCROLL
    // =================================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    console.log("MEMON APPLE iSTORE JavaScript Loaded!");

});
  // Left card ki images automatically badalti hain, aur arrow se bhi change hoti hain
  const slides = document.querySelectorAll('#slides .slide');
  const prevBtn = document.getElementById('prev');
  let index = 0;
  let timer;

  function show(i) {
    slides[index].classList.remove('active');
    index = (i + slides.length) % slides.length;
    slides[index].classList.add('active');
  }

  function start() {
    clearInterval(timer);
    timer = setInterval(() => show(index + 1), 2500);
  }

  prevBtn.addEventListener('click', () => { show(index - 1); start(); });

  start();

 
        const grid = document.getElementById("productsGrid");
        const backBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        const scrollAmount = 350;

        prevBtn.addEventListener("click", () => {
            grid.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });

        nextBtn.addEventListener("click", () => {
            grid.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";

    togglePassword.innerHTML = isPassword
        ? '<i class="fa-regular fa-eye-slash"></i>'
        : '<i class="fa-regular fa-eye"></i>';
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;
    const remember = document.getElementById("remember").checked;
    const message = document.getElementById("loginMessage");

    if (!email || !password) {
        message.textContent = "Please enter your email and password.";
        return;
    }

    message.textContent =
        "Login demo submitted. Backend and database are not connected yet.";

    console.log({
        email: email,
        rememberMe: remember
    });
});

// SHOW / HIDE PASSWORD

document.querySelectorAll(".signin-eye").forEach(function(button) {

    button.addEventListener("click", function() {

        const target = document.getElementById(button.dataset.target);

        const isPassword = target.type === "password";

        target.type = isPassword ? "text" : "password";

        button.innerHTML = isPassword
            ? '<i class="fa-regular fa-eye-slash"></i>'
            : '<i class="fa-regular fa-eye"></i>';

    });

});


// SIGN IN FORM VALIDATION

document.getElementById("signinForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("signinMessage");

    if (password.length < 8) {
        message.textContent = "Password must contain at least 8 characters.";
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return;
    }

    message.textContent =
        "Sign Up form submitted! Backend and database are not connected yet.";

});

