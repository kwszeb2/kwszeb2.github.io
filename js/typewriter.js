anime.timeline({ loop: false })
    .add({
        targets: '.myWord .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
    }).add({
        targets: '.myWord',
        opacity: 0,
        duration: 0,
        /* originally was @ 1000 but you couldn't scroll freely on the main page*/
        easing: "easeOutExpo",
        delay: 1000
    });