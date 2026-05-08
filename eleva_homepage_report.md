# ELEVA HOME — Module 2 Homepage Report

## Files Created
- `sections/eleva-hero.liquid`
- `sections/eleva-usp-bar.liquid`
- `sections/eleva-collections-featured.liquid`
- `sections/eleva-shop-by-room.liquid`
- `sections/eleva-selezione-momento.liquid`
- `sections/eleva-faq-micro.liquid`
- `sections/eleva-trust-badges.liquid`
- `sections/eleva-salvaspazio-spotlight.liquid`
- `sections/eleva-statement.liquid`
- `sections/eleva-brand-proof.liquid`
- `sections/eleva-newsletter.liquid`
- `assets/eleva-homepage.css`
- `eleva_homepage_report.md`

## Files Modified
- `assets/eleva-homepage.css`
- `sections/eleva-collections-featured.liquid`
- `sections/eleva-faq-micro.liquid`
- `sections/eleva-brand-proof.liquid`
- `sections/eleva-hero.liquid`
- `sections/eleva-newsletter.liquid`
- `sections/eleva-trust-badges.liquid`
- `sections/eleva-statement.liquid`
- `sections/eleva-usp-bar.liquid`
- `templates/index.json`

## Homepage Section Order
1. `eleva-hero`
2. `eleva-usp-bar`
3. `eleva-collections-featured`
4. `eleva-shop-by-room`
5. `eleva-selezione-momento`
6. `eleva-statement`
7. `eleva-brand-proof`
8. `eleva-newsletter`

## How CSS Is Loaded
- `assets/eleva-homepage.css` is loaded from `layout/theme.liquid`
- `assets/eleva-design-system.css` remains the shared token layer
- Homepage styles are isolated to `eleva-` prefixed classes only

## Module 2 Fixes
- Replaced `ELEVA Collections Featured` with an ultra-simple save-safe version to isolate the Customizer visibility issue.
- The section now uses a minimal schema with no blocks, one text setting, and a clean preset.
- The section now automatically reads the existing Shopify collection objects for the 6 homepage collections.
- Collection image priority is:
  - `collection.image`
  - `collection.featured_image`
  - elegant gradient placeholder if no image exists
- Confirmed the homepage template still places `ELEVA Collections Featured` between `ELEVA USP Bar` and `ELEVA Statement`.
- Confirmed `collection-breadcrumbs` is not present in `templates/index.json`.
- Confirmed the default Dawn newsletter is not present in `templates/index.json`.
- Hid the footer newsletter block on the homepage only, so `ELEVA Newsletter` remains the single newsletter touchpoint without changing footer logic.
- Applied an Apple smooth refinement pass with softer gradients, more whitespace, quieter cards, cleaner CTA treatment and subtler borders.
- Removed `ELEVA Salvaspazio` from the homepage composition while keeping the section file intact for possible reuse later.

## Premium 9/10 Polish Pass
### Hero
- Kept the current split composition but pushed it into a more editorial direction instead of a default Dawn split.
- Increased visual breathing space and softened the ambient gradient for a more premium first impression.
- Refined the image panel with calmer elevation, larger radius, and a cleaner framed treatment.
- Tuned the H1 to a more monumental editorial scale with controlled line-breaks, tighter letter-spacing and better balance.
- Tightened the subtitle width so it reads clearly as secondary copy.
- Refined the black pill CTA with a softer shadow and subtle translateY hover only.
- Preserved compact mobile behavior so the image stays visible but does not dominate the viewport.

### USP Bar
- Updated the supporting text to tighter premium copy:
  - `Consegna rapida in Italia.`
  - `Acquisti sereni, senza stress.`
  - `Qualità pensata per durare.`
  - `Protezione completa al checkout.`
- Reduced card padding and icon size for a lighter, cleaner rhythm.
- Reworked the hover state into a subtle lift/background refinement instead of a bulky card feel.
- Preserved the compact 2x2 mobile layout and 4-column desktop layout.

### Collections
- Kept the 6-collection structure and automatic Shopify collection image logic.
- Upgraded cards with better overlay contrast, softer surfaces and a stronger editorial hierarchy.
- Replaced the too-quiet `Esplora` link with `Scopri la collezione` in a pill-style micro-CTA.
- Added gentle image scale and overlay opacity shift on hover without aggressive zoom.
- Preserved mobile 2-column and desktop 3-column layout.

### Salvaspazio
- Removed `ELEVA Salvaspazio` from homepage composition only.
- Confirmed `sections/eleva-salvaspazio-spotlight.liquid` was not deleted and remains reusable later.

### Statement
- Kept the section structure intact.
- Refined the quote card with softer editorial typography, tighter max-width and a subtle hanging quote treatment.
- Preserved the warm neutral background while keeping mobile height controlled.

### Brand Proof
- Reframed the section from defensive proof to premium positioning.
- Changed eyebrow from `Perché ELEVA HOME` to `ELEVA HOME`.
- Changed heading from `Perché scegliere ELEVA HOME` to `La nostra visione`.
- Updated the three card texts to a more brand-led tone.
- Softened cards and added quieter micro-interactions to avoid a generic SaaS look.

### Newsletter
- Reduced the overall width and vertical bulk for a more contained premium block.
- Improved input focus with a softer border/glow treatment.
- Refined button shadow and hover behavior to align with the hero CTA language.
- Kept the Dawn newsletter form pattern and the existing copy.

### Motion and Type
- Added a reusable motion system:
  - `.eleva-reveal`
  - `.eleva-reveal--delay-1`
  - `.eleva-reveal--delay-2`
  - `.eleva-reveal--delay-3`
  - `.eleva-reveal--delay-4`
  with reduced-motion support.
- Added balanced headings and text-wrap improvements where safe.
- Enabled subtle typographic refinement with `font-feature-settings: "liga" 1, "kern" 1;` on key headings.

## Module 4 Discovery + Internal Linking
### New sections added
- Added `ELEVA Shop by Room` as a secondary discovery layer inspired by LidoNova’s stronger browse architecture, but adapted to ELEVA as a calmer room-based guide.
- Added `ELEVA Selezione` as a light merchandising layer inspired by LidoNova’s featured/trend logic, without adding aggressive CRO behavior.

### Final homepage order
1. `ELEVA Hero`
2. `ELEVA USP Bar`
3. `ELEVA Collections`
4. `ELEVA Shop by Room`
5. `ELEVA Selezione`
6. `ELEVA Statement`
7. `ELEVA Quality`
8. `ELEVA FAQ`
9. `ELEVA Trust`
10. `ELEVA Newsletter`

### Shop by Room structure
- Added 6 room/use-case entry points:
  - `Bagno ordinato`
  - `Cucina funzionale`
  - `Camera essenziale`
  - `Ingresso accogliente`
  - `Piccoli spazi`
  - `Casa completa`
- Each card includes a title, support text and direct internal link.
- The section is intentionally compact and editorial, not utility-heavy.

### Selezione del momento structure
- Added a display-only curated product grid.
- Uses a Shopify collection setting with fallback to `organizzazione-casa`.
- Displays:
  - featured image
  - title
  - price
  - product link
- No quick add, no variant UI, no product form, no cart logic.

### Internal links added
- `/collections/organizzazione-bagno`
- `/collections/organizzazione-cucina`
- `/collections/organizzazione-camera`
- `/collections/organizzazione-ingresso`
- `/collections/soluzioni-salvaspazio`
- `/collections/organizzazione-casa`

### Product merchandising logic
- Calm merchandising only:
  - no urgency
  - no badges
  - no quick add
  - no cart mutation
  - no JS-heavy behavior
- This imports LidoNova’s stronger discovery principle while preserving ELEVA’s premium minimal shell.

## Module 5 Homepage Trust Layer
### USP Bar 2.0 changes
- Updated the 4 trust items with more concrete and conversion-relevant subtitles:
  - `Spedizione gratuita oltre 50€` → `Consegna in 3-5 giorni lavorativi`
  - `Reso gratuito entro 30 giorni` → `Anche se il prodotto è stato aperto`
  - `Garanzia prodotto 2 anni` → `Copertura completa su difetti`
  - `Pagamento sicuro certificato` → `Visa, Mastercard, PayPal, Klarna`
- Kept the layout compact and premium while making the reassurance more explicit.

### Quality Statement changes
- Reframed the old brand-proof block into a more concrete trust section.
- New heading:
  - `Il nostro impegno per la qualità`
- New cards:
  - `Selezione rigorosa`
  - `Garanzia estesa`
  - `Assistenza dedicata`
- The section now answers product quality, warranty and support objections more directly.

### FAQ Micro added
- Added a compact homepage FAQ using native `details/summary`.
- 4 questions cover:
  - delivery timing
  - returns even after opening
  - product quality checks
  - customer support contact
- First item opens by default without custom JS.

### Trust Badges added
- Added a payment trust section before the newsletter.
- Replaced placeholder-style text pills with Shopify native payment icons via `shop.enabled_payment_types` and `payment_type_svg_tag`.
- Added safe fallback behavior:
  - if Shopify returns no enabled payment types, the section shows a neutral support line plus text fallback pills
- No fake trust seals, no fake certifications, no external logos.

### Trust objections resolved
- `Quando arriva il mio ordine?`
- `Posso restituire un prodotto aperto?`
- `La qualità è davvero controllata?`
- `C’è una garanzia reale?`
- `Come pago in sicurezza?`
- `Se ho un problema, chi mi risponde?`

## Implementation Notes
- Hero keeps the requested copy and remains text-first, with a refined desktop-only abstract visual or an optional custom image.
- Optional hero images now render visibly on mobile and use a wider, more natural composition on desktop.
- USP bar includes 4 trust items with inline SVG icons and CSS-only staggered reveals.
- Featured collections remain static and save-safe while acting as a premium navigation gateway.
- Existing Shopify collection images are used automatically when available.
- Missing collection visuals intentionally use refined gradient placeholders.
- Statement and brand proof stay editorial and non-promotional.
- Newsletter still reuses the Dawn customer/newsletter form pattern.
- `ELEVA Shop by Room` uses simple text settings and text-based default links to remain Shopify save-safe.
- `ELEVA Selezione` uses a native Shopify `collection` setting and a safe fallback when no collection is chosen.
- `ELEVA FAQ` uses native HTML disclosure patterns, so no extra JavaScript was needed.
- `ELEVA Trust` now prefers Shopify native payment icons, with graceful fallback if the shop exposes none.

## Dangerous Files Untouched
- `sections/header.liquid`
- `sections/footer.liquid`
- `templates/collection*.json`
- `templates/product.json`
- `assets/base.css`
- `assets/product-form.js`
- `assets/product-info.js`
- `snippets/buy-buttons.liquid`
- `snippets/product-variant-picker.liquid`
- `snippets/product-variant-options.liquid`
- `assets/cart.js`
- `assets/cart-drawer.js`
- `assets/cart-notification.js`

## Validation Results
- Homepage CSS file exists: `PASS`
- Homepage CSS is loaded in theme: `PASS`
- `templates/index.json` JSON structure validated locally: `PASS`
- Homepage sections are in the correct order: `PASS`
- `ELEVA Shop by Room` schema is valid and includes presets: `PASS`
- `ELEVA Selezione` schema is valid and includes presets: `PASS`
- `ELEVA FAQ` schema is valid and includes presets: `PASS`
- `ELEVA Trust` schema is valid and includes presets: `PASS`
- Both new sections are save-safe and avoid unsafe url defaults: `PASS`
- Display-only product merchandising adds no cart or product-form logic: `PASS`
- USP Bar 2.0 uses concrete trust copy without fake testimonials or fake stats: `PASS`
- Quality Statement adds credibility without fake certifications: `PASS`
- FAQ Micro uses no heavy JS and remains accessible: `PASS`
- Trust Badges use Shopify native payment icons when available, with safe text fallback: `PASS`
- Salvaspazio spotlight remains absent from homepage composition: `PASS`
- Default Dawn newsletter is still not present on homepage: `PASS`
- Collection breadcrumbs are still absent from homepage: `PASS`
- Header and footer files remain untouched: `PASS`
- Header files were not modified and current navigation should remain unaffected: `PASS`
- Salvaspazio spotlight removed from homepage order while keeping its section file: `PASS`
- `collection-breadcrumbs` removed from homepage composition: `PASS`
- Salvaspazio spotlight schema is simple and save-safe: `PASS`
- `ELEVA Collections Featured` schema is now minimal and save-safe: `PASS`
- `ELEVA Collections Featured` schema contains valid `presets`: `PASS`
- `ELEVA Collections Featured` schema contains no blocks: `PASS`
- `ELEVA Collections Featured` uses Shopify collection images automatically: `PASS`
- No `image_picker` settings added to collections section: `PASS`
- Default Dawn newsletter removed from homepage composition and hidden from homepage footer view: `PASS`
- Motion system added with CSS only and reduced-motion fallback: `PASS`
- Hero image option added with save-safe `image_picker`: `PASS`
- No `type: "url"` with default introduced: `PASS`
- No unsupported Liquid syntax introduced: `PASS`
- No heavy JavaScript added: `PASS`
- No dangerous product/cart/variant files modified: `PASS`
- No CSV, product, inventory, variant or collection template files touched: `PASS`
- No custom JavaScript added: `PASS`

## Next Recommended Module
- Module 3: Header and navigation refinement

## Final Verdict
`READY FOR LIVE REVIEW`
