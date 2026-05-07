(() => {
  const setupHeader = () => {
    const wrapper = document.querySelector('.eleva-header-wrapper');
    if (!wrapper) return;

    const toggleButton = wrapper.querySelector('[data-eleva-menu-toggle]');
    const closeButtons = wrapper.querySelectorAll('[data-eleva-menu-close]');
    const drawer = wrapper.querySelector('.eleva-header__drawer');
    const drawerLinks = wrapper.querySelectorAll('.eleva-header__drawer-link, .eleva-header__drawer-secondary-link');

    if (!toggleButton || !drawer) return;

    const setMenuState = (isOpen) => {
      wrapper.classList.toggle('is-menu-open', isOpen);
      document.body.classList.toggle('eleva-header-menu-open', isOpen);
      toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
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
      },
      { passive: true }
    );
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupHeader);
  } else {
    setupHeader();
  }
})();
