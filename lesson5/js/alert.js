const today = new Date();
const dayNumber = today.getDay();
const element = document.getElementById("banner")
if (dayNumber == 5) {
    element.classList.add("showme")
} else {
    element.classList.add("hideme")
}