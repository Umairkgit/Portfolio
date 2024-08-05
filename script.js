
// NAVBAR ANIMATION 
gsap.from(".navbar img", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: -50
})

// HEADER SECTION ANIMATION 

gsap.from(".logo img", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: -50
})

gsap.from(".profile-sec img", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: 100,
})

gsap.from(".textures img", {
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
  x: -100
})

gsap.from(".info-sec h1", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: -500,

})


gsap.from(".info-sec h2", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: -500

})

gsap.from(".info-sec h3", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: 200

})


//  ABOUT SECTION ANIMATION 


gsap.from("#about-sec h1", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: -200,
  scrollTrigger: {
    trigger: "#about-sec h1",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }

})

gsap.from("#about-sec p", {
  opacity: 0,
  duration: 0.5,
  y: 50,
  scrollTrigger: {
    trigger: "#about-sec p",
    scroller: "body",
    start: "top 60%",
    end: "top 60%",
    scrub: 2
  }

})

gsap.from("#about-sec img", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: 200,
  scrollTrigger: {
    trigger: "#about-sec img",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }

})


// SKILL SECTION 
gsap.from("#skill-sec h1", {
  opacity: 0,
  duration: 1,
  x: 80,
  scrollTrigger: {
    trigger: ".skills img",
    scroller: "body",
    start: "top 50%",
    end: "botton -30%",
    scrub: 2
  }

})


gsap.from(".skills img", {
  opacity: 0,
  duration: 0.5,
  y: -80,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".skills img",
    scroller: "body",
    start: "top 50%",
    end: "top 60%",
    scrub: 2
  }
})





// PROJECT SECTION 

gsap.from("#project-sec h1", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  rotate: 360,
  scrollTrigger: {
    trigger: "#project-sec h1",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from("#project-sec p", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#project-sec p",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".projects  h2", {
  opacity: 0,
  duration: 2,
  scale: 1.5,
  scrollTrigger: {
    trigger: ".projects h2",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".projects  p", {
  duration: 1.5,
  x: 500,
  scrollTrigger: {
    trigger: ".projects p",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})



gsap.from(".info-1 span", {
  opacity: 0,
  duration: 1,
  // delay:0.5,
  x: 500,
  scrollTrigger: {
    trigger: ".info-1 span",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".info-1 img", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: -500,
  scrollTrigger: {
    trigger: ".info-1 img",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".info-2 span", {
  opacity: 0,
  duration: 1,
  // delay:0.5,
  x: -500,
  scrollTrigger: {
    trigger: ".info-2 span",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".info-2 img", {
  opacity: 0,
  duration: 1,
  // delay:0.5,
  x: 500,
  scrollTrigger: {
    trigger: ".info-2 img",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".info-3 span", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: 500,
  scrollTrigger: {
    trigger: ".info-3 span",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".info-3 img", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: -500,
  scrollTrigger: {
    trigger: ".info-3 img",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".project-1-info a", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: -500,
  scrollTrigger: {
    trigger: ".project-1-info a",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})
gsap.from(".project-2-info a", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: -500,
  scrollTrigger: {
    trigger: ".project-2-info a",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".info-11 span", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: 500,
  scrollTrigger: {
    trigger: ".info-11 span",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".info-11 img", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: -500,
  scrollTrigger: {
    trigger: ".info-11 img",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".info-22 span", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: -500,
  scrollTrigger: {
    trigger: ".info-22 span",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".info-22 img", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: 500,
  scrollTrigger: {
    trigger: ".info-22 img",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})


// RESUME SECTION 

gsap.from(".resume", {
  opacity: 0,
  duration: 1,
  y: 80,
  scrollTrigger: {
    trigger: ".resume",
    scroller: "body",
    start: "top 50%",
    end: "top 60%",
    scrub: 2
  }

})

gsap.from("#resume-sec h1", {
  opacity: 0,
  duration: 1,
  x: -100,
  scrollTrigger: {
    trigger: "#resume-sec h1",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})



// CONTACT SECTION 

gsap.from("#contact-sec h1", {
  opacity: 0,
  duration: 1,
  x: -100,
  scrollTrigger: {
    trigger: "#contact-sec h1",
    scroller: "body",
    start: "top 50%",
    end: "top 60%",
    scrub: 2
  }
})

gsap.from(".contact-me", {
  opacity: 0,
  duration: 1,
  y: 100,
  scrollTrigger: {
    trigger: ".contact-me",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})

gsap.from(".contact-form", {
  opacity: 0,
  duration: 1,
  y: -100,
  scrollTrigger: {
    trigger: ".contact-form",
    scroller: "body",
    start: "top 50%",
    end: "bottom 75%",
    scrub: 2
  }
})


