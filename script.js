const nav = document.querySelector('.mobile-items')
const but = document.querySelector('.mobile-nav')
const close = document.querySelector('.close')

but.addEventListener('click', function () {
    nav.style.display = "block";
    nav.style.display = "flex";
})

close.addEventListener('click', function () {
    nav.style.display = "none";
})


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const navLinks = document.querySelectorAll('.nav-items a ,.mobile-items a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#ff6347';
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = '';
    });
});
