(function () {
  const MOBILE_QUERY = window.matchMedia('(max-width: 749px)');

  function initStickyAtc() {
    const sticky = document.querySelector('[data-eleva-sticky-atc]');
    if (!sticky) return;

    const sectionId = sticky.dataset.sectionId;
    const stickyButton = sticky.querySelector('[data-eleva-sticky-button]');
    const stickyPrice = sticky.querySelector('[data-eleva-sticky-price]');
    const stickyTitle = sticky.querySelector('[data-eleva-sticky-title]');
    const mainButton = document.getElementById(`ProductSubmitButton-${sectionId}`);
    const purchaseArea = document.querySelector(`#ProductInfo-${sectionId} .eleva-product-purchase`);
    const priceContainer = document.getElementById(`price-${sectionId}`);

    if (!stickyButton || !mainButton || !purchaseArea || !priceContainer) {
      sticky.remove();
      return;
    }

    const setVisible = (visible) => {
      if (!MOBILE_QUERY.matches) {
        sticky.classList.remove('is-visible');
        return;
      }

      if (document.querySelector('cart-drawer.active') || document.body.classList.contains('overflow-hidden')) {
        sticky.classList.remove('is-visible');
        return;
      }

      sticky.classList.toggle('is-visible', visible);
    };

    const syncFromMain = () => {
      if (stickyTitle) {
        const mainTitle = document.querySelector(`#ProductInfo-${sectionId} .product__title h1`);
        if (mainTitle && mainTitle.textContent.trim()) {
          stickyTitle.textContent = mainTitle.textContent.trim();
        }
      }

      const visiblePrice =
        priceContainer.querySelector('.price-item--sale') ||
        priceContainer.querySelector('.price-item--regular') ||
        priceContainer.querySelector('.price-item');

      if (visiblePrice && stickyPrice) {
        stickyPrice.textContent = visiblePrice.textContent.trim();
      }

      const isDisabled = mainButton.hasAttribute('disabled');
      stickyButton.disabled = isDisabled;
      stickyButton.textContent = isDisabled ? 'Esaurito' : 'Aggiungi';
    };

    syncFromMain();

    stickyButton.addEventListener('click', () => {
      if (stickyButton.disabled) return;
      mainButton.click();
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const shouldShow = !entry.isIntersecting && window.scrollY > 600;
        setVisible(shouldShow);
      },
      {
        rootMargin: '0px 0px -24px 0px',
        threshold: 0.1,
      }
    );

    observer.observe(purchaseArea);

    const priceObserver = new MutationObserver(syncFromMain);
    priceObserver.observe(priceContainer, { childList: true, subtree: true, characterData: true });

    const buttonObserver = new MutationObserver(syncFromMain);
    buttonObserver.observe(mainButton, { attributes: true, attributeFilter: ['disabled'] });

    if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined' && PUB_SUB_EVENTS.variantChange) {
      subscribe(PUB_SUB_EVENTS.variantChange, ({ data }) => {
        if (!data || String(data.sectionId) !== String(sectionId)) return;
        window.requestAnimationFrame(syncFromMain);
      });
    }

    const handleViewportChange = () => {
      if (!MOBILE_QUERY.matches) {
        setVisible(false);
      } else {
        syncFromMain();
      }
    };

    if (typeof MOBILE_QUERY.addEventListener === 'function') {
      MOBILE_QUERY.addEventListener('change', handleViewportChange);
    } else if (typeof MOBILE_QUERY.addListener === 'function') {
      MOBILE_QUERY.addListener(handleViewportChange);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStickyAtc);
  } else {
    initStickyAtc();
  }
})();
