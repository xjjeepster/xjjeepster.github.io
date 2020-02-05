var today = new Date();
// var formatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', };
var formatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
document.write(today.toLocaleDateString('en-US', formatOptions));


const dayNumber = today.getDay();
const element = document.getElementById("banner")
if (dayNumber == 5) {
    element.classList.add("showme")
} else {
    element.classList.add("hideme")
}