(function () {
  const MOBILE_QUERY = window.matchMedia('(max-width: 749px)');

  function initStickyAtc() {
    const sticky = document.querySelector('[data-eleva-sticky-atc]');
    if (!sticky) return;

    const sectionId = sticky.dataset.sectionId;
    const stickyButton = sticky.querySelector('[data-eleva-sticky-button]');
    const stickyPrice = sticky.querySelector('[data-eleva-sticky-price]');
    const stickyTitle = sticky.querySelector('[data-eleva-sticky-title]');
    const stickySelect = sticky.querySelector('[data-eleva-sticky-select]');
    const mainButton = document.getElementById(`ProductSubmitButton-${sectionId}`);
    const purchaseArea = document.querySelector(`#ProductInfo-${sectionId} .eleva-product-purchase`);
    const priceContainer = document.getElementById(`price-${sectionId}`);
    const variantSelects = document.getElementById(`variant-selects-${sectionId}`);
    const variantsJson = sticky.querySelector('[data-eleva-sticky-variants]');
    const variants = variantsJson ? JSON.parse(variantsJson.textContent) : [];

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

    const getVariantById = (variantId) => variants.find((variant) => String(variant.id) === String(variantId));

    const syncMainVariantControls = (variant) => {
      if (!variant || !variantSelects) return;

      const optionWrappers = Array.from(variantSelects.children).filter(
        (element) =>
          element.matches('fieldset') ||
          element.classList.contains('product-form__input--dropdown')
      );

      optionWrappers.forEach((wrapper, index) => {
        const optionValue = variant.options[index];
        if (typeof optionValue === 'undefined') return;

        const radioInput = wrapper.querySelector(`input[type="radio"][value="${CSS.escape(optionValue)}"]`);
        if (radioInput) {
          if (!radioInput.checked) {
            radioInput.checked = true;
            radioInput.dispatchEvent(new Event('change', { bubbles: true }));
          }
          return;
        }

        const selectInput = wrapper.querySelector('select');
        if (selectInput && selectInput.value !== optionValue) {
          selectInput.value = optionValue;
          selectInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
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

      if (stickySelect) {
        const variantIdInput = document.querySelector(`#product-form-${sectionId} input[name="id"]`);
        if (variantIdInput && variantIdInput.value && stickySelect.value !== variantIdInput.value) {
          stickySelect.value = variantIdInput.value;
        }
      }
    };

    syncFromMain();

    stickyButton.addEventListener('click', () => {
      if (stickyButton.disabled) return;
      mainButton.click();
    });

    if (stickySelect && variants.length > 0) {
      stickySelect.addEventListener('change', (event) => {
        const variant = getVariantById(event.target.value);
        if (!variant) return;
        syncMainVariantControls(variant);
        window.requestAnimationFrame(syncFromMain);
      });
    }

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
        if (stickySelect && data.variant?.id) {
          stickySelect.value = String(data.variant.id);
        }
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
