gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    '.hero-section',
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: '820',
        scrub: true,
      },
    }
  );

  const itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item');

  itemsLeft.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-850',
          end: '-100',
          scrub: true,
        },
      }
    );
  });

  const itemsRight = gsap.utils.toArray('.gallery__right .gallery__item');

  itemsRight.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-850',
          end: '-100',
          scrub: true,
        },
      }
    );
  });

  gsap.set('.copyright', { y: '100%' });

  gsap.fromTo(
    '.copyright',
    { opacity: 0, y: '100%' },
    {
      opacity: 1,
      y: '0%',
      duration: 1,
      ease: 'power2.out',
    }
  );
}
