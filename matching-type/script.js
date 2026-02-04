/* ==========================================================
   GLOBALS
   ========================================================== */
let slideIndex = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

/* ==========================================================
   DEFINE ONE PAIR ONLY
   ========================================================== */
// ONE correct pair (same letter on both sides)
const correctPair = "A";

// ONE wrong pair (different letters)
const wrongPair = {
    left: "B",
    right: "C"
};

/* ==========================================================
   APPLY RESULTS TO SLIDES
   ========================================================== */
function applyResults(index) {
    const slide = slides[index];
    if (!slide) return;

    const cards = slide.querySelectorAll(".card");

    // reset styles
    cards.forEach(card => {
        card.classList.remove("matched", "wrong-previous");
    });

    /* SLIDE 2 → ONE CORRECT PAIR (GREEN) */
    if (index === 1) {
        const correctLeft  = slide.querySelector(".left-column .card[data-match='A']");
        const correctRight = slide.querySelector(".right-column .card[data-match='A']");

        if (correctLeft)  correctLeft.classList.add("matched");
        if (correctRight) correctRight.classList.add("matched");
    }

    /* SLIDE 3 → ONE WRONG PAIR (RED) */
    if (index === 2) {
        const wrongLeft  = slide.querySelector(".left-column .card[data-match='B']");
        const wrongRight = slide.querySelector(".right-column .card[data-match='C']");

        if (wrongLeft)  wrongLeft.classList.add("wrong-previous");
        if (wrongRight) wrongRight.classList.add("wrong-previous");
    }
}

/* ==========================================================
   SLIDESHOW
   ========================================================== */
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");

    applyResults(i);
}

/* AUTO SLIDE */
setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}, 2500);

/* INITIAL LOAD */
showSlide(0);

/* ==========================================================
   START BUTTON (UNCHANGED)
   ========================================================== */
document.querySelector(".start-button")?.addEventListener("click", () => {
    window.location.href = "application dep.html";
});
