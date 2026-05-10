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

## Module 8.2 — Apply Layer to Remaining Main Collections

### 1. Templates modified
- `templates/collection.cucina-tavola.json`
- `templates/collection.organizzazione-casa.json`
- `templates/collection.decorazione-casa.json`
- `templates/collection.illuminazione-casa.json`
- `templates/collection.tessili-casa.json`
- `templates/collection.soluzioni-salvaspazio.json`

### 2. Final section order per template
For all 6 templates:
1. `collection-breadcrumbs`
2. `eleva-collection-hero`
3. `eleva-subcollection-pills`
4. `eleva-collection-seo-intro`
5. `main-collection-product-grid`
6. `eleva-related-collections`
7. `eleva-collection-faq`
8. `eleva-collection-trust`

### 3. Content added per collection
- `Cucina e Tavola`
  - hero, intro, related links and FAQ focused on kitchen organization, utensils and table use
- `Organizzazione Casa`
  - hero, intro, related links and FAQ focused on containers, dividers and space optimization
- `Decorazione Casa`
  - hero, intro, related links and FAQ focused on decorative objects and modern interiors
- `Illuminazione Casa`
  - hero, intro, related links and FAQ focused on lighting function, ambiance and lamp types
- `Tessili Casa`
  - hero, intro, related links and FAQ focused on comfort, texture and warm interiors
- `Soluzioni Salvaspazio`
  - hero, intro, related links and FAQ focused on compact organization and small-space living

### 4. Subcollection pills per collection
- `Cucina e Tavola`
  - `Contenitori Cucina`
  - `Utensili Cucina`
  - `Stoviglie e Piatti`
- `Organizzazione Casa`
  - `Organizzazione Cucina`
  - `Organizzazione Bagno`
  - `Organizzazione Camera`
  - `Organizzazione Ufficio`
  - `Organizzazione Ingresso`
- `Decorazione Casa`
  - `Vasi e Portavasi`
  - `Specchi Decorativi`
  - `Quadri e Poster`
  - `Candele e Portacandele`
  - `Cuscini Decorativi`
- `Illuminazione Casa`
  - `Lampade da Tavolo`
  - `Lampade a Sospensione`
  - `Lampade da Terra`
  - `Applique`
- `Tessili Casa`
  - `Coperte e Plaid`
  - `Tappeti Moderni`
  - `Tende`
- `Soluzioni Salvaspazio`
  - `Salvaspazio Cucina`
  - `Salvaspazio Bagno`
  - `Salvaspazio Camera`

### 5. Related collections per collection
- `Cucina e Tavola`
  - `Accessori Bagno`
  - `Organizzazione Casa`
  - `Decorazione Casa`
  - `Tessili Casa`
- `Organizzazione Casa`
  - `Soluzioni Salvaspazio`
  - `Cucina e Tavola`
  - `Accessori Bagno`
  - `Tessili Casa`
- `Decorazione Casa`
  - `Illuminazione Casa`
  - `Tessili Casa`
  - `Cucina e Tavola`
  - `Organizzazione Casa`
- `Illuminazione Casa`
  - `Decorazione Casa`
  - `Tessili Casa`
  - `Organizzazione Casa`
  - `Cucina e Tavola`
- `Tessili Casa`
  - `Decorazione Casa`
  - `Illuminazione Casa`
  - `Organizzazione Casa`
  - `Accessori Bagno`
- `Soluzioni Salvaspazio`
  - `Organizzazione Casa`
  - `Cucina e Tavola`
  - `Accessori Bagno`
  - `Tessili Casa`

### 6. FAQ per collection
- each main collection now has 4 collection-specific FAQ items
- FAQs are aligned with the collection intent and preserve the existing ELEVA support style

### 7. Product grid preservation confirmation
- `main-collection-product-grid` remains unchanged in all 6 templates
- existing filter, sort, pagination and product card behavior were preserved exactly
- no `main-collection-banner` remains in these 6 templates
- one collection H1 per page is preserved through `eleva-collection-hero`

### 8. Dangerous files untouched confirmation
- `sections/main-collection-product-grid.liquid` untouched
- `snippets/card-product.liquid` untouched
- filters / sorting / pagination logic untouched
- cart / product-form / variant files untouched
- homepage untouched
- header / footer untouched
- `assets/eleva-collections.css` unchanged in this module

### 9. Validation
- all 6 templates now contain the ELEVA collection layer: `PASS`
- all 6 templates preserve `main-collection-product-grid`: `PASS`
- JSON validation passed for all 6 templates once the Shopify comment header is skipped: `PASS`
- no product/card/cart/filter/sort/pagination files touched: `PASS`
- diff limited to the 6 target templates: `PASS`

## Final Verdict
- `READY FOR LIVE REVIEW`
