let btn = document.querySelector(".the-toggler");
let ul = document.querySelector(".navbar");
btn.onclick = function () {
    if (ul.style.display == 'none')
        ul.style.display = 'block';
    else
        ul.style.display = 'none';
}
