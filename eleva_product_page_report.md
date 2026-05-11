# ELEVA HOME — Product Page Report

## 1. Files created
- `assets/eleva-product.css`
- `snippets/eleva-product-summary.liquid`
- `snippets/eleva-product-trust-bullets.liquid`
- `snippets/eleva-product-delivery-note.liquid`
- `eleva_product_page_report.md`

## 2. Files modified
- `layout/theme.liquid`
- `sections/main-product.liquid`
- `sections/related-products.liquid`
- `templates/product.json`

## 3. Exact render points added in main-product
- inside the `title` block in `sections/main-product.liquid`
  - after the visible product title markup
  - render added:
    - `render 'eleva-product-summary', product: product`
- inside the `buy_buttons` block in `sections/main-product.liquid`
  - directly after the Dawn `buy-buttons` render
  - renders added:
    - `render 'eleva-product-trust-bullets'`
    - `render 'eleva-product-delivery-note', product: product`

## 4. Product engine preservation confirmation
- `main-product` remains the PDP engine
- `related-products` remains the recommendation engine
- Dawn media gallery remains untouched logically
- Dawn product schema remains untouched
- product template structure remains:
  1. `main-product`
  2. `related-products`

## 5. Variant / add-to-cart preservation confirmation
- no changes to:
  - `assets/product-form.js`
  - `assets/product-info.js`
  - `assets/media-gallery.js`
  - `assets/pickup-availability.js`
  - `assets/cart.js`
  - `assets/cart-drawer.js`
  - `snippets/buy-buttons.liquid`
  - `snippets/product-variant-picker.liquid`
  - `snippets/product-media-gallery.liquid`
  - `snippets/product-media.liquid`
  - `snippets/price.liquid`
- add to cart, variant selection, quantity rules and dynamic checkout stay Dawn-native

## 6. Trust bullets added
- compact trust block added under the buy buttons
- items:
  - `Spedizione gratuita oltre 50€`
  - `Reso gratuito entro 30 giorni`
  - `Garanzia prodotto 2 anni`
  - `Pagamento sicuro`

## 7. Summary block added
- short premium summary added under the title
- metafield-ready logic:
  - uses `product.metafields.custom.short_summary` if available
  - otherwise uses fallback copy

## 8. Delivery note added
- compact reassurance note added under the trust bullets
- metafield-ready logic:
  - uses `product.metafields.custom.delivery_note` if available
  - otherwise uses fallback copy

## 9. Accordion status
- existing product blocks found in `templates/product.json` before this module:
  - `text` (vendor)
  - `title`
  - `price`
  - `variant_picker`
  - `quantity_selector`
  - `buy_buttons`
  - `description`
  - `share`
- Dawn-native collapsible block type confirmed in `sections/main-product.liquid`:
  - `collapsible_tab`
- 4 collapsible rows added to `templates/product.json`:
  - `Dettagli prodotto`
  - `Materiali e cura`
  - `Spedizione e resi`
  - `Garanzia ELEVA HOME`
- product description remains visible as its own Dawn block
- no custom accordion JS added

## 10. Content strategy
- `Dettagli prodotto`
  - kept generic on purpose to avoid duplicating the full description block
- `Materiali e cura`
  - uses `product.metafields.custom.materiali_cura` if present
  - otherwise uses safe generic fallback
- `Spedizione e resi`
  - uses `product.metafields.custom.spedizione_resi` if present
  - otherwise uses safe generic fallback
- `Garanzia ELEVA HOME`
  - uses `product.metafields.custom.garanzia` if present
  - otherwise uses safe generic fallback
- implementation path:
  - `snippets/eleva-product-accordion-content.liquid`
  - rendered inside the native Dawn `collapsible_tab` output in `sections/main-product.liquid`

## 11. Description duplication handling
- current `product.description` block remains visible for SEO and UX
- because of that, `Dettagli prodotto` was kept generic
- safest option chosen:
  - keep description visible
  - avoid duplicating `product.description` inside the accordion

## 12. Metafield future plan
- recommended future metafields:
  - `custom.short_summary`
  - `custom.materiali_cura`
  - `custom.spedizione_resi`
  - `custom.garanzia`
  - `custom.dimensioni`
  - `custom.contenuto_confezione`

## 13. Visual polish notes
- accordion cards remain Dawn-native
- ELEVA product CSS now gives them:
  - softer card surface
  - calmer spacing
  - cleaner title sizing
  - more premium content rhythm
- no heavy animation added

## 14. Related products polish status
- recommendation engine not replaced
- product cards untouched
- visual polish added through:
  - ELEVA wrapper class on `sections/related-products.liquid`
  - lighter subtitle under the heading
  - heading changed in `templates/product.json` to:
    - `Completa il tuo ambiente`

## 15. Schema policy / duplicate risk notes
- Dawn product schema output remains in:
  - `sections/main-product.liquid`
  - output:
    - `{{ product | structured_data }}`
- no custom product schema added in this module
- duplicate schema risk exists if a custom Product schema is added later without replacing or intentionally coordinating with Dawn output
- recommendation for Module 10.4:
  - audit real rendered schema first
  - only then decide whether to keep Dawn output or replace it
- later schema/content alignment notes:
  - accordion content can inform richer product description strategy
  - shipping/returns details may later inform Merchant Center or return-policy work
  - no schema reflection added in this module

## 16. Mobile QA notes
- title hierarchy tightened via scoped CSS
- price remains prominent and readable
- variant area spacing improved through scoped styling only
- trust bullets use a single-column mobile layout to avoid crowding
- accordions remain readable and compact on mobile
- no horizontal scroll introduced by the new wrapper
- no media gallery logic touched
- add to cart area remains functional because the form engine is unchanged

## 17. Dangerous files untouched confirmation
- product form JS untouched
- cart JS untouched
- variant picker logic untouched
- buy buttons logic untouched
- media gallery logic untouched
- price snippet untouched
- schema untouched

## 18. Validation
- product page still uses:
  - `main-product`
  - `related-products`
- native Dawn block type `collapsible_tab` used: `PASS`
- `templates/product.json` remains valid: `PASS`
- no schema changes: `PASS`
- CSS loaded only on product pages through `layout/theme.liquid`: `PASS`
- metafield absence safe due to fallback logic: `PASS`
- Liquid syntax kept simple and save-safe: `PASS`
- product engine preserved: `PASS`
- add to cart / variants preserved: `PASS`

## 19. Final verdict
- `READY FOR LIVE REVIEW`

## 20. Sticky files created
- `assets/eleva-sticky-atc.css`
- `assets/eleva-sticky-atc.js`
- `snippets/eleva-sticky-atc.liquid`

## 21. Sticky render point added
- render added in `sections/main-product.liquid`
- location:
  - near the end of the main product section
  - after media modal/gallery script handling
  - before 3D model JSON / product structured data
- render used:
  - `render 'eleva-sticky-atc', product: product`

## 22. Asset loading method
- loaded only on product pages through `layout/theme.liquid`
- assets:
  - `eleva-sticky-atc.css`
  - `eleva-sticky-atc.js`

## 23. Show / hide trigger
- mobile only:
  - `max-width: 749px`
- shown after the user leaves the main purchase area and has scrolled beyond roughly `600px`
- implemented with `IntersectionObserver`
- hidden again near the top
- hidden if the cart drawer is active or the body is in `overflow-hidden` state

## 24. Main Dawn ATC trigger method
- no second form created
- no custom cart request created
- sticky CTA uses JS to trigger:
  - `#ProductSubmitButton-{{ section.id }}`
- if the main button cannot be found, sticky removes itself silently

## 25. Variant / price safety decision
- no sticky variant selector added
- source of truth remains the main Dawn variant picker
- sticky reads initial price from Liquid
- then syncs from the real main price DOM
- listens to Dawn `PUB_SUB_EVENTS.variantChange` when available
- also observes the main price area and main submit button disabled state
- if availability cannot be resolved directly, the real Dawn button still remains the final authority because sticky proxies its click

## 26. Mobile QA notes for sticky ATC
- desktop stays fully hidden
- sticky bar uses safe-area bottom padding
- title is one line with ellipsis
- price remains visible
- CTA meets tap target size
- no extra variant UI added
- sticky sits above page content but below cart drawer behaviorally
- no horizontal scroll introduced by sticky styling

## 27. Dangerous files untouched confirmation
- `assets/product-form.js` untouched
- `assets/product-info.js` untouched
- `assets/media-gallery.js` untouched
- `assets/pickup-availability.js` untouched
- `assets/cart.js` untouched
- `assets/cart-drawer.js` untouched
- `snippets/buy-buttons.liquid` untouched
- `snippets/product-variant-picker.liquid` untouched
- `snippets/product-media-gallery.liquid` untouched
- `snippets/product-media.liquid` untouched
- `snippets/price.liquid` untouched

## 28. Validation
- sticky assets scoped to product pages only: `PASS`
- no schema changes: `PASS`
- no second product form created: `PASS`
- no custom cart system created: `PASS`
- no product engine rewrite: `PASS`
- no dangerous Dawn JS touched: `PASS`
- sticky uses existing Dawn ATC button as trigger: `PASS`

## 29. Final verdict
- `READY FOR LIVE REVIEW`
