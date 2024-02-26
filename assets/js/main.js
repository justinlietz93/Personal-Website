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

sr.reveal('.search__container', { scale: 1.2, origin: 'bottom'})

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

// ============== OTHER ANIMATIONS AND FUNCTIONS ============== //

// Function to download file
function downloadFile() {
    window.open('../assets/files/CV.pdf', target='_blank')
}


// Function to open email dialog
function openEmailDialog() {
    var email = 'jlietz93@gmail.com';
    var subject = 'Software Inquiry';
    var body = 'Hello, I saw your portfolio and I would like to inquire about your services.';
    window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

// ============== LEARNMORE BUTTON ANIMATION ============== //

const learnMoreButton = document.getElementById('learnMoreButton');

if (learnMoreButton) {
    learnMoreButton.addEventListener('click', function() {
        const additionalContent = document.querySelector('.about__additional');
        const aboutImage = document.querySelector('.about__computer');
        const text = `Why I love software development:\n\nEver since I used a computer to learn the alphabet when I was in preschool, I have felt like software was magic. I always wondered how it worked, and what was going on inside the machine. Now, my curiosity has been fueled continually by the evolving world of technology.\n\nWhat I'm passionate about:\n\nI'm really inspired by the complexity and potency of software and how specialized individuals form teams to craft intuitive, user-friendly software. It's fascinating to be part of the magic behind the scenes.\n\nWhat I'm currently working on:\n\nI am currently working on a personal project that will be an iOS-based application that will allow users to create and manage their own workout routines using AI. I have used many workout apps in the past and I see a lot of room for improvement. I am excited to see where this project takes me.\n\n`;
        const speed = 10; // Typing speed in milliseconds

        // Hide the "Learn More" button
        learnMoreButton.style.display = 'none';

        // Show the additional content
        additionalContent.style.display = 'block';

        // Typing animation
        typeWriter(text.split('\n'), 0); // Split the text into lines

        function typeWriter(lines, lineIndex) {
            if (lineIndex < lines.length) {
                const line = lines[lineIndex];
                let charIndex = 0;
                const interval = setInterval(function() {
                    if (charIndex === line.length) {
                        clearInterval(interval); // Move to the next line
                        document.getElementById("typedText").innerHTML += '<br>'; // Insert line break
                        typeWriter(lines, lineIndex + 1); // Type the next line
                    } else {
                        document.getElementById("typedText").innerHTML += line.charAt(charIndex);
                        charIndex++;
                    }
                }, speed);
            }
        }

        // Additional adjustments
        aboutImage.style.marginRight = '-14rem';
    });
}


console.log("DOM Loaded");

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Function to perform search
const performSearch = () => {
    console.log("Search button clicked.");
    const searchQuery = searchInput.value.toLowerCase();
    const posts = document.querySelectorAll('.blog__container .new__post');

    posts.forEach(post => {
        const title = post.querySelector('.blog__post').textContent.toLowerCase();
        const date = post.querySelector('.blog__date').textContent.toLowerCase();

        if (title.includes(searchQuery) || date.includes(searchQuery)) {
            // Scroll to the top of the matching post
            post.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
};

// Listen for click event on search button
if (searchButton) {
    console.log("Search button found");
    
    searchButton.addEventListener('click', performSearch);

    // Listen for 'Enter' key press on search input
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
} else {
    console.log("Search button not found");
}
