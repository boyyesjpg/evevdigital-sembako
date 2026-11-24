/**
 * EvEvDigital Dual Theme Toggle Engine (Dark / Light Mode) + Anti-FOUC
 * Sektor 06: EvEvSembako (Minimarket, Grosir & Delivery UMKM)
 */

(function () {
  'use strict';

  var THEME_KEY = 'evevdigital_theme_preference';
  var root = document.documentElement;

  function getStoredTheme() {
    try {
      var stored = localStorage.getItem(THEME_KEY);
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
    } catch (e) {}
    return null;
  }

  function getPreferredTheme() {
    var stored = getStoredTheme();
    if (stored) return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function updateButtons(theme) {
    var buttons = document.querySelectorAll('#theme-toggle, .theme-toggle-btn');
    var isDark = theme === 'dark';
    buttons.forEach(function (btn) {
      btn.innerHTML = isDark
        ? '<i class="fas fa-sun" aria-hidden="true"></i>'
        : '<i class="fas fa-moon" aria-hidden="true"></i>';
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.setAttribute('title', isDark ? 'Ganti ke Mode Terang (Light Mode)' : 'Ganti ke Mode Gelap (Dark Mode)');
      btn.setAttribute('aria-label', isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap');
    });
  }

  function applyTheme(theme, persist, animate) {
    var nextTheme = theme === 'dark' ? 'dark' : 'light';

    if (animate) {
      root.classList.add('theme-transitioning');
      window.setTimeout(function () {
        root.classList.remove('theme-transitioning');
      }, 320);
    }

    root.setAttribute('data-theme', nextTheme);
    root.style.colorScheme = nextTheme;
    if (document.body) {
      document.body.setAttribute('data-theme', nextTheme);
    }

    if (persist) {
      try {
        localStorage.setItem(THEME_KEY, nextTheme);
      } catch (e) {}
    }

    updateButtons(nextTheme);
  }

  function toggleTheme() {
    var current = root.getAttribute('data-theme') || getPreferredTheme();
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next, true, true);
  }

  // Immediate Anti-FOUC application (runs synchronously when script loads)
  var initialTheme = getPreferredTheme();
  applyTheme(initialTheme, false, false);

  // Expose public API for inline scripts or template controls
  window.EVEV_THEME = {
    get: function () {
      return root.getAttribute('data-theme') || getPreferredTheme();
    },
    set: function (theme) {
      applyTheme(theme, true, true);
    },
    toggle: toggleTheme
  };

  document.addEventListener('DOMContentLoaded', function () {
    // Sync body attribute & button icons
    applyTheme(root.getAttribute('data-theme') || initialTheme, false, false);

    // Delegate click events on any theme toggle button
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('#theme-toggle, .theme-toggle-btn');
      if (btn) {
        e.preventDefault();
        toggleTheme();
      }
    });

    // Follow system preference changes if user hasn't manually overridden
    if (window.matchMedia) {
      var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      var onMediaChange = function (e) {
        if (!getStoredTheme()) {
          applyTheme(e.matches ? 'dark' : 'light', false, true);
        }
      };
      if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', onMediaChange);
      } else if (typeof mediaQuery.addListener === 'function') {
        mediaQuery.addListener(onMediaChange);
      }
    }

    // Sync theme across browser tabs
    window.addEventListener('storage', function (e) {
      if (e.key === THEME_KEY && (e.newValue === 'dark' || e.newValue === 'light')) {
        applyTheme(e.newValue, false, true);
      }
    });
  });
})();
