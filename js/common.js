document.addEventListener('DOMContentLoaded', function() {

	window.addEventListener('scroll', () => {
      document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
   })

   gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
   ScrollSmoother.create({
      wrapper: '.wrapper-scroll',
      content: '.content-scroll'
    });

})
