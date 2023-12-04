window.addEventListener('load', function (event) {
  setTimeout(function () {
    var preloader = document.getElementById('preloader');
    preloader.style.transition = 'opacity 0.5s';
    preloader.style.opacity = '0';
    setTimeout(function () {
      preloader.style.display = 'none';
    }, 500);
  }, 500);
});

window.onscroll = function () {
  const header = document.getElementById('header');

  if (window.scrollY > 50 || window.pageYOffset > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

const subMenus = document.querySelectorAll('.sub-menu');

subMenus.forEach(function (subMenu) {
  const menuExpand = document.createElement('span');
  menuExpand.classList.add('menu-icon');

  // menuExpand.innerHTML = '+'; // You can uncomment this line if you want to set inner HTML content

  subMenu.parentElement.insertBefore(menuExpand, subMenu);

  if (subMenu.classList.contains('mega-menu')) {
    subMenu.classList.remove('mega-menu');

    subMenu.querySelectorAll('ul').forEach(function (ul) {
      ul.classList.add('sub-menu');

      const innerMenuExpand = document.createElement('span');
      innerMenuExpand.classList.add('menu-icon');
      innerMenuExpand.innerHTML = '+';

      ul.parentElement.insertBefore(innerMenuExpand, ul);
    });
  }
});

const searchWrap = document.querySelector('.search-wrap');
const navSearch = document.querySelector('.search-btn');
const searchClose = document.getElementById('search-close');

document.querySelector('.search-btn').addEventListener('click', function (e) {
  e.preventDefault();
  toggleSearch();
});

document.querySelector('.search-close').addEventListener('click', function (e) {
  e.preventDefault();
  toggleSearch();
});

function closeSearch() {
  searchWrap.style.display = 'none';
  navSearch.classList.remove('open');
  searchClose.classList.remove('open');
}

document.body.addEventListener('click', function (e) {
  closeSearch();
});

document.querySelectorAll('.search-btn, .main-search-input').forEach(function (element) {
  element.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});

function toggleSearch() {
  const isHidden = getComputedStyle(searchWrap).display === 'none';
  searchWrap.style.display = isHidden ? 'block' : 'none';
  navSearch.classList.toggle('open');
  searchClose.classList.toggle('open');
}

const getSiblings = function (elem) {
  const siblings = [];
  let sibling = elem.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
};

const slideUp = (target, time) => {
  const duration = time ? time : 500;

  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.style.overflow = 'hidden';
  target.style.height = 0;

  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

const slideDown = (target, time) => {
  const duration = time ? time : 500;

  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;

  const height = target.offsetHeight;

  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';

  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

const slideToggle = (target, time) => {
  const duration = time ? time : 500;

  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

const offCanvasMenu = function (selector) {
  const offCanvasNav = document.querySelector(selector);
  const subMenus = offCanvasNav.querySelectorAll('.sub-menu');

  subMenus.forEach(function (subMenu) {
    const menuExpand = document.createElement('span');
    menuExpand.classList.add('menu-expand');
    // menuExpand.innerHTML = '+';
    subMenu.parentElement.insertBefore(menuExpand, subMenu);

    if (subMenu.classList.contains('mega-menu')) {
      subMenu.classList.remove('mega-menu');

      subMenu.querySelectorAll('ul').forEach(function (ul) {
        ul.classList.add('sub-menu');
        const innerMenuExpand = document.createElement('span');
        innerMenuExpand.classList.add('menu-expand');
        innerMenuExpand.innerHTML = '+';
        ul.parentElement.insertBefore(innerMenuExpand, ul);
      });
    }
  });

  offCanvasNav.querySelectorAll('.menu-expand').forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = this.parentElement;

      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
        parent.querySelectorAll('.sub-menu').forEach(function (subMenu) {
          subMenu.parentElement.classList.remove('active');
          slideUp(subMenu);
        });
      } else {
        parent.classList.add('active');
        slideDown(this.nextElementSibling);

        getSiblings(parent).forEach(function (item) {
          item.classList.remove('active');
          item.querySelectorAll('.sub-menu').forEach(function (subMenu) {
            subMenu.parentElement.classList.remove('active');
            slideUp(subMenu);
          });
        });
      }
    });
  });
};

offCanvasMenu('.offcanvas-menu');

// MagnificPopup video view
const popupVideos = document.querySelectorAll('.popup-video');
popupVideos.forEach(function (popupVideo) {
  popupVideo.addEventListener('click', function () {
    // Implement MagnificPopup for each video...
  });
});

// Counter Up
const counters = document.querySelectorAll('.counter');
counters.forEach(function (counter) {
  const delay = 10;
  const time = 1500;

  // Implement counterUp for each counter...
  const targetValue = parseInt(counter.innerText, 10);

  const updateCounter = function () {
    let currentValue = 0;
    const increment = targetValue / (time / delay);

    const intervalId = setInterval(function () {
      currentValue += increment;
      counter.innerText = Math.floor(currentValue);

      if (currentValue >= targetValue) {
        counter.innerText = targetValue;
        clearInterval(intervalId);
      }
    }, delay);
  };

  // Update counter when it comes into view
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        updateCounter();
        observer.unobserve(counter);
      }
    });
  });

  observer.observe(counter);
});

const caseStudySwiper = new Swiper('.case-study-active', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.case-study-active .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

/*--
    Testimonial Active
-----------------------------------*/
var testimonialSwiper = new Swiper('.testimonial-active', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
});

/*--    
    Testimonial Two Active
-----------------------------------*/
var testimonialTwoSwiper = new Swiper('.testimonial-02-active', {
  slidesPerView: 2,
  spaceBetween: 130,
  loop: true,
  pagination: {
    el: '.testimonial-02-active .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    1400: {
      slidesPerView: 2,
    },
  },
});

// Check if the browser supports Intersection Observer
if ('IntersectionObserver' in window) {
  const progressLines = document.querySelectorAll('.progress-line');

  // Create an Intersection Observer instance
  const progressObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the element becomes visible, set its width
          const el = entry.target;
          const percent = el.dataset.width;
          el.style.width = percent + '%';

          // Unobserve the element after it's been handled
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0 }
  );

  // Observe each progress line element
  progressLines.forEach((progressLine) => {
    progressObserver.observe(progressLine);
  });
}

// Check if the browser supports Intersection Observer
if ('IntersectionObserver' in window) {
  const elementsToAnimate = document.querySelectorAll('[data-aos]');

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.getAttribute('data-aos');

          // Add a class to trigger the desired animation
          element.classList.add(`aos-${animationType}`);

          // Unobserve the element after animation has been applied
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.5 }
  ); // Adjust the threshold as needed

  // Observe each element with a data-aos attribute
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}
