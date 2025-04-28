let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    const offset = -currentIndex * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

setInterval(showNextSlide, 4000);

// =====================================================

const suggestions = [
    "apple", "banana", "carrot", "date", "dragonfruit",
    "grapes", "kiwi", "lemon", "mango", "orange", "pineapple"
];

const searchInput = document.getElementById("search");
const suggestionsBox = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
    const inputValue = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = "";
    if (inputValue === "") {
        suggestionsBox.style.display = "none";
        return;
    }

    const filtered = suggestions.filter(item =>
        item.toLowerCase().startsWith(inputValue)
    );

    if (filtered.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item;
        div.classList.add("suggestion-item");
        div.addEventListener("click", () => {
            searchInput.value = item;
            suggestionsBox.innerHTML = "";
            suggestionsBox.style.display = "none";
        });
        suggestionsBox.appendChild(div);
    });

    suggestionsBox.style.display = "block";
});
