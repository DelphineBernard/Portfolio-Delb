// GSAP animations --------------------------------------------------------------

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// ** animation A propos **

let text = Splitting();

let tlAbout = gsap.timeline({
    scrollTrigger: {
        trigger:'#about',
        start: 'top 50%',
        end: '50% 50%',
    }
});

tlAbout.from(text[0].chars, {
    x: 50,
    y: 50,
    scaleY: 0,
    color: 'rgb(13,13,13)',
    stagger: 0.01,
    duration: 0.02,
});

// ** animation SVG compétences **

const skillsIcon = document.querySelector('.skills_icon')

let tlSkillsIcon = gsap.timeline();

tlSkillsIcon.from('.skills_icon', {
    opacity: 2,
});  

tlSkillsIcon.to('.skills_icon', {
    rotation: 360,
    y: 900,
    opacity: 0,
});  

ScrollTrigger.create({
    animation: tlSkillsIcon,
    trigger: '.skills_icon',
    start: 'top 50%',
    end: 'bottom',
    scrub: true,
});

// ** animation compétences **

const skills = document.querySelectorAll('#skills ul')

let tlSkills = gsap.timeline();

gsap.utils.toArray(skills).forEach(skill => {
    const fromY = '5%';
    const toY = '0%';

    ScrollTrigger.create({
        animation: gsap.fromTo(skill, { y: fromY, opacity: 0.1 }, { y: toY, opacity: 1 }),
        trigger: skills,
        start: 'top 70%',
        end: 'bottom 40%',
        scrub: true,
    });
});

// ** animation Projets **

let tlSlider = gsap.timeline();

gsap.utils.toArray('.slide').forEach((slide, index) => {
    const fromX = index % 2 === 0 ? '-25%' : '25%';
    const toX = '0%';

    ScrollTrigger.create({
        animation: gsap.fromTo(slide, { x: fromX, opacity: 0 }, { x: toX, opacity: 1 }),
        trigger: slide,
        start: 'top 90%',
        end: 'bottom 40%',
        scrub: true,
    });
});

// ** animation Contact **

let tlContact = gsap.timeline();

tlContact.from('.color-reveal', {
    opacity: 0,
    scale: 0.9,
});

tlContact.to('.color-reveal', {
    opacity: 1,
    scale: 1,
});  

ScrollTrigger.create({
    animation: tlContact,
    trigger: '#contact',
    start: 'top 50%',
    end: 'bottom 20%',
    scrub: true,
});

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
  lenis.raf(time * 500)
});

gsap.ticker.lagSmoothing(0);     

// -------------------------------------------------------------------------------

// JS menu animation -------------------------------------------------------------

const menuButton = document.querySelector("#toggle-btn");
const nav = document.querySelector("#nav-menu");
const menu = document.querySelector("#menu");
const links = document.querySelectorAll("#menu li");

const closeMenu = () => {
    if (nav.classList.contains("menu-open")) {
        nav.classList.remove("menu-open");
        menu.classList.add("hidden");
    }
};

menuButton.addEventListener("click", () => {
    nav.classList.toggle("menu-open");
    menu.classList.toggle("hidden");
});

window.addEventListener("scroll", closeMenu);

links.forEach(link => {
    link.addEventListener("click", closeMenu);
});