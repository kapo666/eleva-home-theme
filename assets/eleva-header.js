(() => {
  const setupHeader = () => {
    const wrapper = document.querySelector('.eleva-header-wrapper');
    if (!wrapper) return;

    const toggleButton = wrapper.querySelector('[data-eleva-menu-toggle]');
    const closeButtons = wrapper.querySelectorAll('[data-eleva-menu-close]');
    const drawer = wrapper.querySelector('.eleva-header__drawer');
    const drawerLinks = wrapper.querySelectorAll('.eleva-header__drawer-link, .eleva-header__drawer-secondary-link');
    const submenuToggles = wrapper.querySelectorAll('[data-eleva-submenu-toggle]');

    if (!toggleButton || !drawer) return;

    const closeSubmenu = (toggle, submenu) => {
      toggle.setAttribute('aria-expanded', 'false');
      submenu.classList.remove('is-open');
      submenu.style.maxHeight = '0px';
      submenu.setAttribute('aria-hidden', 'true');
      window.setTimeout(() => {
        if (!submenu.classList.contains('is-open')) {
          submenu.hidden = true;
        }
      }, 280);
    };

    const openSubmenu = (toggle, submenu) => {
      submenu.hidden = false;
      submenu.setAttribute('aria-hidden', 'false');
      submenu.classList.add('is-open');
      submenu.style.maxHeight = `${submenu.scrollHeight}px`;
      toggle.setAttribute('aria-expanded', 'true');
    };

    const closeAllSubmenus = (exception) => {
      submenuToggles.forEach((itemToggle) => {
        const submenu = wrapper.querySelector(`#${itemToggle.getAttribute('aria-controls')}`);
        if (!submenu || submenu === exception) return;
        closeSubmenu(itemToggle, submenu);
      });
    };

    const setMenuState = (isOpen) => {
      wrapper.classList.toggle('is-menu-open', isOpen);
      document.body.classList.toggle('eleva-header-menu-open', isOpen);
      toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      if (!isOpen) {
        closeAllSubmenus();
      }
    };

    const closeMenu = () => setMenuState(false);
    const openMenu = () => setMenuState(true);

    toggleButton.addEventListener('click', () => {
      if (wrapper.classList.contains('is-menu-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    closeButtons.forEach((button) => {
      button.addEventListener('click', closeMenu);
    });

    drawerLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    submenuToggles.forEach((submenuToggle) => {
      const submenuId = submenuToggle.getAttribute('aria-controls');
      const submenu = wrapper.querySelector(`#${submenuId}`);
      if (!submenu) return;

      submenuToggle.addEventListener('click', () => {
        const isOpen = submenuToggle.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          closeSubmenu(submenuToggle, submenu);
        } else {
          closeAllSubmenus(submenu);
          openSubmenu(submenuToggle, submenu);
        }
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && wrapper.classList.contains('is-menu-open')) {
        closeMenu();
        toggleButton.focus();
      }
    });

    window.addEventListener(
      'resize',
      () => {
        if (window.innerWidth >= 990 && wrapper.classList.contains('is-menu-open')) {
          closeMenu();
        }

        submenuToggles.forEach((submenuToggle) => {
          const submenu = wrapper.querySelector(`#${submenuToggle.getAttribute('aria-controls')}`);
          if (!submenu) return;
          if (submenu.classList.contains('is-open')) {
            submenu.style.maxHeight = `${submenu.scrollHeight}px`;
          }
        });
      },
      { passive: true }
    );

    submenuToggles.forEach((submenuToggle) => {
      const submenu = wrapper.querySelector(`#${submenuToggle.getAttribute('aria-controls')}`);
      if (!submenu) return;
      if (submenuToggle.getAttribute('aria-expanded') === 'true') {
        submenu.hidden = false;
        submenu.classList.add('is-open');
        submenu.style.maxHeight = `${submenu.scrollHeight}px`;
        submenu.setAttribute('aria-hidden', 'false');
      } else {
        submenu.hidden = true;
        submenu.classList.remove('is-open');
        submenu.style.maxHeight = '0px';
        submenu.setAttribute('aria-hidden', 'true');
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupHeader);
  } else {
    setupHeader();
  }
})();
