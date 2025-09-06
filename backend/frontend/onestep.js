//document.addEventListener('DOMContentLoaded', function () {
    // Animating boxes using GSAP
    // gsap.to("#box1", {
    //     x: 30,
    //     duration: 1,
    //     borderRadius: "50%",
    // });

    // gsap.to("#box2", {
    //     x: 30,
    //     duration: 1.5,
    //     delay: 1,
    //     borderRadius: "50%",
    // });

    // gsap.to("#box3", {
    //     x: 30,
    //     duration: 2,
    //     delay: 2,
    //     borderRadius: "50%",
    // });

    // GSAP timeline for header animation
    var tl = gsap.timeline();
    tl.from(".banner", {
        y: -30,
        opacity: 0,
        duration: 2,
    });

    tl.from(".login", {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.35,
    });