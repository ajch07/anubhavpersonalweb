gsap.timeline()
    .fromTo(".header",{backgroundColor:"#E4F9F5"},{backgroundColor:"black"})
    .fromTo(".myname",{x:-100,opacity:0},{x:0,opacity:1,ease:"back"})
    .fromTo(".mywork",{x:100,opacity:0},{x:0,opacity:1})
    .fromTo(".sun",{opacity:0,y:30},{opacity:1,duration:0.7})
    .fromTo(".header",{backgroundColor:"black"},{backgroundColor:"#E4F9F5",duration:0.6}) 
    .fromTo(".tree",{opacity:0},{opacity:1,duration:0.5})
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.logo-div',{x:0,opacity:0}, {
    scrollTrigger: {
        trigger: '.logo-div',
        toggleActions: 'restart none none none',
        // start: 'top center',
        // markers: true
        
    },
    x: 100,
    opacity:1,
    duration: 2,
    ease:"power4"
}); 
gsap.fromTo('.pro',{x:40,opacity:0}, {
    scrollTrigger: {
        trigger: '.pro',
        toggleActions: 'restart reset restart reset',
        // start: 'top center',
        // markers: true
      
    },
    x:0,
    opacity:1,
    duration: 2,
    ease:"back"
}); 
gsap.fromTo('.logo-div-2',{x:0,opacity:0}, {
    scrollTrigger: {
        trigger: '.logo-div-2',
        toggleActions: 'restart none none none',
        // start: 'top center',
        // markers: true
        
    },
    x: -100,
    opacity:1,
    duration: 2,
    ease:"power4"
}); 
gsap.fromTo('.logo-div-3',{x:0,opacity:0}, {
    scrollTrigger: {
        trigger: '.logo-div-3',
        toggleActions: 'restart none none none',
        // start: 'top center',
        // markers: true
        
    },
    x: 200,
    opacity:1,
    duration: 2,
    ease:"power4"
}); 
gsap.fromTo('.logo-div-4',{x:0,opacity:0}, {
    scrollTrigger: {
        trigger: '.logo-div-4',
        toggleActions: 'restart none none none',
        // start: 'top center',
        // markers: true
        
    },
    x: -100,
    opacity:1,
    duration: 2,
    ease:"power4"
}); 
gsap.fromTo('.logo-div-5',{x:0,opacity:0}, {
    scrollTrigger: {
        trigger: '.logo-div-5',
        toggleActions: 'restart none none none',
        // start: 'top center',
        // markers: true,
        // start: "top 20%",
    end: "bottom 5%",
        
    },
    x: 200,
    opacity:1,
    duration: 2,
    ease:"power4"
}); 
gsap.fromTo('.hrinmiddle2',{y:100,opacity:0}, {
    scrollTrigger: {
        trigger: '.hrinmiddle2',
        toggleActions: 'restart reset restart reset',
        // start: 'top center',
        // markers: true
        
    },
    y: 0,
    opacity:1,
    duration: 1,
    ease:"back(3)",
    
}); 
gsap.fromTo('.hrinmiddle',{y:100,opacity:0}, {
    scrollTrigger: {
        trigger: '.hrinmiddle',
        toggleActions: 'restart reset restart reset',
        // start: 'top center',
        // markers: true
        
    },
    y: 0,
    opacity:1,
    duration: 1,
    ease:"back(3)",
    
}); 
gsap.fromTo('.footerhr',{y:100,opacity:0}, {
    scrollTrigger: {
        trigger: '.footerhr',
        toggleActions: 'restart reset restart reset',
        // start: 'top center',
        // markers: true
        
    },
    y: 0,
    opacity:1,
    duration: 1,
    ease:"back(3)",
    stragger:1,
    yoyo:true
}); 
gsap.fromTo('.afterheader',{y:100,opacity:0}, {
    scrollTrigger: {
        trigger: '.afterheader',
        toggleActions: 'restart reset restart reset',
        // start: 'top center',
        // markers: true
      
    },
    y: 0,
    opacity:1,
    duration: 1,
    ease:"back(3)",
    stragger:1
}); 
gsap.fromTo(".hello",{y:-30},{
    scrollTrigger:{
        trigger:'.hello',
        toggleActions:'restart reset restart reset',
        start:"top 75%",
        end:"bottom 25%"
    },
    
    y:0
    ,stragger:{
        each:0.2
    }
})
gsap.fromTo('.mail',{x:40,opacity:0}, {
    scrollTrigger: {
        trigger: '.mail',
        toggleActions: 'restart reset restart reset',
        // start: 'top center',
        // markers: true
        start:"top 75%",
        end:"bottom 25%"
    },
    opacity: 1,
    x:0,
    duration: 1,
    ease:"back",
    
}); 
// gsap.fromTo('.treemid',{opacity:0}, {
//     scrollTrigger: {
//         trigger: '.treemid',
//         toggleActions: 'restart reset restart reset',
//         start:"top 75%",
//         end:"bottom 25%"
//         // start: 'top center',
//         // markers: true
//     },
//     opacity: 1,

//     duration: 1.5,
//     ease:"power3",
    
// }); 
gsap.fromTo(".moon",{opacity:0,x:-50},{x:0,opacity:1,ease:"power4",duration:1.3,
    scrollTrigger:{
    trigger:".moon",
    toggleActions: 'restart reset restart reset',
    }});
    gsap.fromTo(".darkone",{opacity:0},{opacity:1,ease:"power4",duration:3,
    scrollTrigger:{
    trigger:".darkone",
    toggleActions: 'restart reset restart reset',
    start:"top 75%",
        
}});

