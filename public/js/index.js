

$('.top').click(() => {
    window.location.href = "#home";
});

const tier = $('#tier');
let tiers = [
    'Software Engineer',
    'Web Developer'
];

let counter = 0;
const darkMode = $('#dark-mode');
const darkModeMobile = $('#dark-mode-mobile');

let static_theme = false;

const lightModeToggle = (enabled) => {
    const mainContainer = $('#wrapper-container');
    const unict = $('#unict-image');
    const intrapresa = $('#intrapresa-image');

    mainContainer.removeClass('active-dark-version');
    mainContainer.addClass('active-light-version');

    console.log(enabled);

    if (enabled) {
        mainContainer.removeClass('active-dark-version');
        mainContainer.addClass('active-light-version');
        unict.attr('src', 'img/unict-light.png');
        intrapresa.attr('src', 'img/intrapresa-light.jpeg');
    }
    else {
        mainContainer.addClass('active-dark-version');
        mainContainer.removeClass('active-light-version');
        unict.attr('src', 'img/unict.png');
        intrapresa.attr('src', 'img/intrapresa.svg');
    }

}

const themeFromSystem = () => {
    if (prefersDarkScheme.matches) {
        darkMode.prop('checked', false);
        darkModeMobile.prop('checked', false);
        lightModeToggle(false);
    } else {
        darkMode.prop('checked', true);
        darkModeMobile.prop('checked', true);
        lightModeToggle(true);
    }
}

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

darkMode.click(() => {
    lightModeToggle($('#dark-mode').prop('checked'));
    static_theme = true;
});

darkModeMobile.click(() => {
    lightModeToggle($('#dark-mode-mobile').prop('checked'));
    static_theme = true;
})

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

setInterval(() => {
    if (!static_theme) {
        themeFromSystem();
    }
}, 500);

themeFromSystem();