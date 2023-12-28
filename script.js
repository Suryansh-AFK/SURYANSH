const container = document.getElementById("video");
const play = document.getElementById("play");
const cursor = document.getElementById("cursor");
const child =document.getElementById("child");
const video = document.getElementById("at-video");
const details = document.getElementById("dets3");
const tl = gsap.timeline();


console.log(details);



function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.to(".nav-part1 svg",{
  transform:"translateY(-275%)",
  scrollTrigger : {
    trigger : "#page1",
    scroller : "#main",
    start : "top 0",
    end : "top -10%",
    scrub : true
  }
})


gsap.to("#nav-part #link",{
    transform:"translateY(-300%)",
    scrollTrigger : {
      trigger : "#page1",
      scroller : "#main",
      start : "top 0",
      end : "top -10%",
      scrub : true
    }
  })


}
locomotiveAnimation();

gsap.from("video",{
    scale:0.5,
})

function videoconAinimation(){


container.addEventListener("mouseenter" , function(){
    gsap.to("#play",{
        scale:1,
        opacity:1
    })
});

container.addEventListener("mouseleave" , ()=>{
    gsap.to("#play",{
        scale: 0,
        opacity:0
    })
 });

 container.addEventListener("mousemove" , (e)=>{
    gsap.to("#play",{
        scale:1,
        opacity:1,
        left: e.x-25,
        top: e.y-25,
    })
 });
}
videoconAinimation();


child.addEventListener("mousemove",(e)=>{
  gsap.to("#cursor",{
    scale:1,
    left: e.x-40,
    top: e.y-40,
    opacity:0.5
  })
});

child.addEventListener("mouseenter" , function(){
    gsap.to("#cursor",{
        scale:1,
        opacity:1
    })
});

child.addEventListener("mouseleave" , ()=>{
    gsap.to("#cursor",{
        scale: 0,
        opacity:0
    })
 });

function AnimateNika(){    
    gsap.from(".page1 h1",{
        y:300,
        opacity:1,
        duration:0.3,
        delay:1,
        stagger:0.25
    })
    gsap.from(".page1 h2",{
        y:300,
        opacity:1,
        duration:0.3,
        delay:1.5,
        stagger:0.25
    })
    gsap.from(".page1 h3",{
        y:300,
        opacity:1,
        duration:0.3,
        delay:1.1,
        stagger:0.25
    })
    gsap.from(".page1 h4",{
        y:300,
        opacity:1,
        duration:0.3,
        delay:1.3,
        stagger:0.25
    })
    gsap.from(".page1 #fragger .p1",{
        x:610,
        scale:1,
        opacity:1,
        duration:0.3,
        delay:0.7,
    })
    gsap.from(".page1 #fragger .p2",{
        x:-500,
        scale:0,
        opacity:1,
        duration:0.3,
        delay:0.7,
    })
    gsap.from(".page1 #fragger .p3",{
        x:-500,
        scale:1,
        opacity:1,
        duration:0.3,
        delay:1.6,
    })
}
AnimateNika();
    










































    
    