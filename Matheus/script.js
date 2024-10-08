/*========== toggle icon navbar ============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==========scrol sections active link============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==========sticky navbar============*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*========== Remove a navbar ao selecionar algo no menu ============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*====================scroll reveal==================== */ 
ScrollReveal({ 
    //reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projetos-container, .portifolio-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== TYPD JS area ======================*/
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor de Software','Desenvolvedor de Software','Desenvolvedor de Software'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});

