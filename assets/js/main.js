/* ============== SHOW MENU ============== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* ============== MENU SHOW ============== */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ============== MENU HIDDEN ============== */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ============== REMOVE MENU MOBILE ============== */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//* ============== ADD BLUR HEADER ============== */
const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader)

//* ============== SHOW SCROLL UP ============== */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//* ============== SCROLL SECTION ACTIVE LINK ============== */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//* ============== SCROLL REVEAL ANIMATION ============== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1.1,
    scale: 1.05,
    duration: 2500,
    delay: 300,
    //reset: true // Animations repeat
})


sr.reveal('.home__data')

sr.reveal('.home__img, .about__data, .about__img, .contact__data, .resume')

// sr.reveal('.home__software', {rotate: {z: -15}})

sr.reveal('.home__footer, .about__computer', { scale: 1.2, origin: 'bottom'})

sr.reveal('.new__card:nth-child(1) img', { scale: 1.2, origin: 'bottom'})
sr.reveal('.new__card:nth-child(2) img', { scale: 1.2, origin: 'top', delay: 300})
sr.reveal('.new__card:nth-child(3) img', { scale: 1.2, origin: 'bottom', delay: 600})

sr.reveal('.resume__card img', { interval: 100, scale: 1.2, origin: 'bottom'})

sr.reveal('.footer__container', { scale: 1})

sr.reveal('.footer__img-1', { interval: 100, scale: 1.2, delay: 300})
sr.reveal('.footer__img-2', { interval: 100, scale: 1.2, delay: 600})

function downloadFile() {
    window.open('../assets/files/CV.pdf', '_blank')
}

function openEmailDialog() {
    var email = 'jlietz93@gmail.com';
    var subject = 'Software Inquiry';
    var body = 'Hello, I saw your portfolio and I would like to inquire about your services.';
    window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

document.getElementById('learnMoreButton').addEventListener('click', function() {
    var additionalContent = document.querySelector('.about__additional');
    var learnMoreButton = document.getElementById('learnMoreButton');
    var aboutImage = document.querySelector('.about__computer');
    
    additionalContent.style.display = 'block'; // Show the additional content
    learnMoreButton.style.display = 'none'; // Hide the "Learn More" button
    aboutImage.style.marginRight = '-14rem';
});