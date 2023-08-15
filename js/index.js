const tier = $('#tier');
const mainContainer = $('#wrapper-container');
const unict = $('#unict-image');
const intrapresa = $('#intrapresa-image');
let tiers = [
    'Software Engineer',
    'Web Developer'
];

let counter = 0;
window.matchMedia("(prefers-color-scheme: dark)").matches ? darkMode() : lightMode();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    event.matches ? darkMode() : lightMode();
});

setInterval(() => {
    tier.fadeOut(() => {
        tier.html(tiers[counter]);
        counter++;

        if (tier.hasClass('color-secondary')) {
            tier.removeClass('color-secondary');
            tier.addClass('color-primary');
        }
        else {
            tier.addClass('color-secondary');
            tier.removeClass('color-primary');
        }

        if (counter >= tiers.length) {
            counter = 0;
        }
        tier.fadeIn();
    })
}, 2000);

$('.card-toggle').click((e) => {
    const target = e.currentTarget
    const classes = document.querySelectorAll('.card pre');
    const toggles = document.getElementsByClassName('card-toggle');

    for (card of classes) {
        card.classList.add('hidden');
    }

    for (toggle of toggles) {
        toggle.classList.remove('active')
    }

    target.classList.add('active');

    $('#' + e.currentTarget.id + '-description').removeClass('hidden');
});

$('button[type="submit"]').click((e) => {
    e.preventDefault();

    let subject = $('#subject').val();
    let message = $('#message').val();

    window.location.href = `mailto:stefano.bellioo@gmail.com?subject=${subject}&body=${message}`;
});

$('.top').click(() => {
    window.location.href = "#home";
});

function lightMode() {
    console.log('Light Mode On');
    mainContainer.removeClass('active-dark-version');
    mainContainer.addClass('active-light-version');
    unict.attr('src', 'img/unict-light.png');
    intrapresa.attr('src', 'img/intrapresa-light.jpeg');
}

function darkMode() {
    console.log('Dark Mode On')
    mainContainer.addClass('active-dark-version');
    mainContainer.removeClass('active-light-version');
    unict.attr('src', 'img/unict.png');
    intrapresa.attr('src', 'img/intrapresa.svg');
}