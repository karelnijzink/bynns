/* Bynns — interactions: menu tabs, mobile nav, today's hours, scroll reveals */
(function () {
  "use strict";

  /* ---- Menu tabs ---- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'));

  function selectTab(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panels.forEach(function (p) {
      p.setAttribute('data-active', p.id === 'panel-' + tab.id.replace('tab-', '') ? 'true' : 'false');
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { selectTab(tab); });
    tab.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      var next = e.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
      tabs[next].focus();
      selectTab(tabs[next]);
    });
  });

  /* ---- Mobile nav ---- */
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', open ? 'false' : 'true');
      burger.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
    document.getElementById('navLinks').addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.setAttribute('data-open', 'false');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Highlight today's hours ---- */
  var today = new Date().getDay(); // 0 = Sun
  var row = document.querySelector('.hours tr[data-day="' + today + '"]');
  if (row) row.classList.add('today');

  /* ---- Scroll reveal ---- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
})();
