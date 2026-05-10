# Module 8.1 — ELEVA Main Collection Premium Layer

## 1. Files created
- `sections/eleva-collection-hero.liquid`
- `sections/eleva-subcollection-pills.liquid`
- `sections/eleva-collection-seo-intro.liquid`
- `sections/eleva-related-collections.liquid`
- `sections/eleva-collection-faq.liquid`
- `sections/eleva-collection-trust.liquid`
- `assets/eleva-collections.css`
- `eleva_collections_report.md`

## 2. Files modified
- `layout/theme.liquid`
- `templates/collection.accessori-bagno.json`

## 3. Accessori Bagno final section order
1. `collection-breadcrumbs`
2. `eleva-collection-hero`
3. `eleva-subcollection-pills`
4. `eleva-collection-seo-intro`
5. `main-collection-product-grid`
6. `eleva-related-collections`
7. `eleva-collection-faq`
8. `eleva-collection-trust`

## 4. H1 handling
- `main-collection-banner` has been removed from `templates/collection.accessori-bagno.json`
- the only collection H1 is now rendered by `sections/eleva-collection-hero.liquid`
- for this test collection, the visible H1 is `Accessori Bagno Moderni`

## 5. Product grid preservation notes
- `sections/main-collection-product-grid.liquid` was not modified
- product cards, quick add behavior and product rendering remain Dawn-native
- collection pagination remains unchanged

## 6. Filters/sorting/pagination preservation notes
- filter, sort and pagination logic remain untouched
- the existing `main-collection-product-grid` settings from the old template were preserved

## 7. SEO/CRO elements added
- premium collection hero with product count
- subcollection pills for navigation
- semantic intro before the grid
- related collections after the grid
- FAQ section for objection handling
- compact trust reminder near the page bottom

## 8. Related collections added
- `Cucina e Tavola`
- `Organizzazione Casa`
- `Tessili Casa`
- `Decorazione Casa`

## 9. FAQ added
- materials
- coordinated set selection
- daily usability
- return policy

## 10. Trust reminder added
- `Spedizione gratuita oltre 50€`
- `Reso gratuito 30 giorni`
- `Garanzia prodotto 2 anni`
- `Pagamento sicuro`

## 11. Risks
- subcollection links are configured as direct paths and should be checked live if any handle is missing
- related collection block references rely on Shopify collection handles existing as configured
- collection description quality still depends on the content already stored in Shopify for `accessori-bagno`

## 12. Validation
- `templates/collection.accessori-bagno.json` valid JSON: `PASS`
- duplicate H1 removed: `PASS`
- product grid preserved: `PASS`
- filters/sorting/pagination preserved: `PASS`
- no product card changes: `PASS`
- no cart/product JS touched: `PASS`
- section schemas present: `PASS`
- `assets/eleva-collections.css` loaded in theme: `PASS`
- Shopify save-safe review: `PASS`

## 13. Next recommended module
- `Module 8.2`
- apply the same ELEVA collection layer to the other P0 main collections with collection-specific copy, subcollection pills and related links

## Module 8.1A — Accessori Bagno Aesthetic Polish

### 1. Related section visual polish
- `ELEVA Related Links` has been visually lightened without changing its logic
- cards are now smaller, softer and less image-dominant
- image ratio was reduced to a more editorial `16:10`
- card surfaces now use a subtler border and lighter shadow response
- desktop spacing was increased so the 4-card row breathes more naturally

### 2. Text clipping fix
- removed the card-level clipping behavior that could cut the lower content
- card body now stacks title and CTA vertically instead of forcing them into one compressed row
- added safer body padding and minimum height so titles and `Esplora` remain fully visible
- title wrapping was improved to reduce hard clipping and awkward breaks

### 3. Spacing changes
- related section top/bottom rhythm increased after the product grid
- FAQ top spacing was separated more clearly from related links
- trust reminder bottom area was slightly expanded for a cleaner landing

### 4. FAQ/trust visual notes
- FAQ structure was left intact
- spacing around FAQ was softened to feel less abrupt after related links
- trust reminder remains compact, with only rhythm adjustments through CSS

### 5. Files modified
- `assets/eleva-collections.css`
- `eleva_collections_report.md`

### 6. Dangerous files untouched confirmation
- `templates/collection.accessori-bagno.json` untouched in this polish pass
- `sections/main-collection-product-grid.liquid` untouched
- product cards untouched
- filters / sorting / pagination untouched
- cart / product-form / variant logic untouched
- homepage, header and footer untouched

### 7. Validation
- related cards no longer rely on clipped content: `PASS`
- related section spacing feels lighter and more premium: `PASS`
- no horizontal overflow introduced in CSS: `PASS`
- product grid untouched: `PASS`
- FAQ / trust remain save-safe: `PASS`

## Final Verdict
- `READY FOR LIVE REVIEW`
