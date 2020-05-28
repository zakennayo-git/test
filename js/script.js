let myIndexToSlider = 0;
slider = () => {
    let sliders = document.querySelectorAll('.slider__img');
    for (let i = 0 ; i < sliders.length ; i++) {
        sliders[i].style.display = "none";
    }
    myIndexToSlider++;
    if (myIndexToSlider > sliders.length) myIndexToSlider = 1;
    sliders[myIndexToSlider - 1].style.display = "block";
    setTimeout(slider, 5000);
}
slider();

const btn = document.querySelector('.smallNavigation');
const nav = document.querySelector('.nav-wrapper');
const navLink = document.querySelectorAll('.nav-wrapper li a');

btn.addEventListener('click', () => {
    btn.classList.toggle('change');
    nav.classList.toggle('noactive');
});

for (let i = 0 ; i < navLink.length ; i++) {
    navLink[i].addEventListener('click', () => {
        btn.classList.toggle('change');
        nav.classList.toggle('noactive');
    });
}