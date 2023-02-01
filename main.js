const topDeco = document.getElementById('top-frame');
const bottomDeco = document.getElementById('bottom-frame');
const container = document.getElementById('container');
const content = document.getElementById('content');
const greetingText = document.getElementById('greeting-text');
const bg = document.getElementById('background');


content.addEventListener('scroll', () => {
    const value = content.scrollTop;

    console.log(value);

    topDeco.style.top = -value * 0.5 + 'px';
    topDeco.style.opacity = 1 - (value / 300);
    bottomDeco.style.bottom = value * 0.5 + 'px';
    bottomDeco.style.opacity = 1 - (value / 300);
    greetingText.style.opacity = 1 - (value / 300);

    if (value == 0) {
        greetingText.classList.remove("fade-out");
        greetingText.classList.remove("hidden");
        greetingText.classList.add("fade-in");

    } else if (value > 400) {
        greetingText.classList.remove("fade-in");
        greetingText.classList.add("fade-out");
        greetingText.classList.add("hidden");

    }

})

