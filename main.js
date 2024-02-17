const currentDate = new Date();

const currentMonth = currentDate.getMonth();

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    const screenWidth = window.innerWidth;
    const randomX = Math.random() * screenWidth;

    leaf.style.left = `${randomX}px`;
    document.body.prepend(leaf);

    const animationDuration = Math.random() * 4000 + 2000;

    setTimeout(() => leaf.remove(), animationDuration);

    leaf.animate([
        { transform: 'translateY(0) rotate(0deg)' },
        { transform: 'translateY(100vh) rotate(720deg)' }
    ], {
        duration: animationDuration,
        easing: 'ease-in-out',
        iterations: 1
    });
}

function startLeaf() {
    setInterval(createSakuraLeaf, 200);
}

// Частицы взависимости от времени года

if (currentMonth === 0 || currentMonth === 1 || currentMonth === 11) { // Зима
    new Snow();
} else if (currentMonth >= 2 && currentMonth <= 4) { // Весна
    document.documentElement.style.setProperty('--leafColor', 'pink');
    window.onload = startLeaf;
} else if (currentMonth >= 5 && currentMonth <= 7) { // Лето
    // В разработке
} else if (currentMonth >= 8 && currentMonth <= 10) { // Осень
    document.documentElement.style.setProperty('--leafColor', '#ff7f00');
    window.onload = startLeaf;
} else {
    console.error("ТЫ КТО??")
}

const bgVideo = document.querySelector(".bgVideo")

function checkWidth() {
    const currentSrc = new URL(bgVideo.currentSrc).pathname

    if (window.innerWidth < 900) {
        if (currentSrc !== "/background2.mp4") {
            bgVideo.src = "./background2.mp4"
        }
    } else {
        if (currentSrc !== "/background.mp4") {
            bgVideo.src = "./background.mp4"
        }
    }
}


window.addEventListener("resize", checkWidth);

checkWidth()
