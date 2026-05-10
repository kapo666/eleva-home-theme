# Module 9.1 — ELEVA Subcollection Pilot

## 1. Files created
- `sections/eleva-subcollection-hero.liquid`
- `sections/eleva-parent-siblings.liquid`
- `sections/eleva-subcollection-seo-content.liquid`
- `sections/eleva-subcollection-faq.liquid`
- `sections/eleva-parent-cta.liquid`
- `assets/eleva-subcollections.css`
- `snippets/eleva-subcollection-schema.liquid`
- `templates/collection.tappeti-moderni.json`
- `eleva_subcollections_report.md`

## 2. Files modified
- `layout/theme.liquid`

## 3. Final template order
1. `collection-breadcrumbs`
2. `eleva-subcollection-hero`
3. `eleva-parent-siblings`
4. `main-collection-product-grid`
5. `eleva-subcollection-seo-content`
6. `eleva-subcollection-faq`
7. `eleva-parent-cta`

## 4. H1 handling
- only one H1 is used in `eleva-subcollection-hero`
- `main-collection-banner` is not present in the pilot template

## 5. Parent/sibling links
- parent:
  - `← Tutti i Tessili Casa`
- siblings:
  - `Coperte e Plaid`
  - `Tende Moderne`

## 6. SEO content added
- short editorial SEO block after the grid
- includes contextual links to:
  - `Tessili Casa`
  - `Coperte e Plaid`
  - `Tende Moderne`

## 7. FAQ added
- 3 pilot FAQ items specific to `tappeti-moderni`

## 8. Schema added
- `BreadcrumbList`
- `CollectionPage`
- `FAQPage`
- scoped only to `collection.handle == 'tappeti-moderni'`
- no `ItemList`
- `layout/theme.liquid` now routes collection schema safely:
  - `tappeti-moderni` → `eleva-subcollection-schema`
  - all other collection pages → `eleva-collection-schema`

## 9. Product grid preservation confirmation
- `main-collection-product-grid` preserved unchanged
- filters, sorting, pagination and product cards untouched

## 10. Dangerous files untouched confirmation
- main collection templates untouched
- homepage untouched
- header/footer visuals untouched
- cart, product-form and variant logic untouched

## 11. Validation
- `templates/collection.tappeti-moderni.json` valid JSON once the Shopify comment header is skipped: `PASS`
- one H1 only on the pilot page: `PASS`
- `main-collection-product-grid` preserved in template: `PASS`
- `main-collection-banner` absent from template: `PASS`
- subcollection schema limited to `tappeti-moderni`: `PASS`
- no duplicate with main collection schema routing: `PASS`
- CSS loaded through `layout/theme.liquid`: `PASS`
- no product/card/cart/filter/sort files touched: `PASS`

## 12. Next recommended batch
- extend this lighter layer to the next textile or decor subcollections after live review of `tappeti-moderni`

## Module 9.2 — Batch 1 Remaining P0

### 1. Templates created
- `templates/collection.lampade-tavolo.json`
- `templates/collection.organizzazione-cucina.json`
- `templates/collection.lampade-sospensione.json`
- `templates/collection.utensili-cucina.json`

### 2. Final section order for each
For all 4 templates:
1. `collection-breadcrumbs`
2. `eleva-subcollection-hero`
3. `eleva-parent-siblings`
4. `main-collection-product-grid`
5. `eleva-subcollection-seo-content`
6. `eleva-subcollection-faq`
7. `eleva-parent-cta`

### 3. Parent/sibling links for each
- `Lampade da Tavolo`
  - parent: `Illuminazione Casa`
  - siblings: `Lampade a Sospensione`, `Lampade da Terra`, `Applique`
- `Organizzazione Cucina`
  - parent: `Organizzazione Casa`
  - siblings: `Organizzazione Bagno`, `Organizzazione Camera`, `Organizzazione Ufficio`, `Organizzazione Ingresso`
- `Lampade a Sospensione`
  - parent: `Illuminazione Casa`
  - siblings: `Lampade da Tavolo`, `Lampade da Terra`, `Applique`
- `Utensili Cucina`
  - parent: `Cucina e Tavola`
  - siblings: `Contenitori Cucina`, `Stoviglie e Piatti`

### 4. SEO content for each
- `Lampade da Tavolo`
  - focused on reading, bedside and desk lighting
- `Organizzazione Cucina`
  - focused on drawers, pantry and worktop order
- `Lampade a Sospensione`
  - focused on kitchen, dining and living focal lighting
- `Utensili Cucina`
  - focused on daily kitchen tools and clean design

### 5. FAQ for each
- each new subcollection now has 3 dedicated FAQ items matching the visible content

### 6. Schema handles added
- `lampade-tavolo`
- `organizzazione-cucina`
- `lampade-sospensione`
- `utensili-cucina`
- existing pilot kept:
  - `tappeti-moderni`

### 7. Validation
- all 4 templates follow the validated pilot structure: `PASS`
- JSON validation passes when skipping the Shopify comment header: `PASS`
- one H1 per template through `eleva-subcollection-hero`: `PASS`
- `main-collection-product-grid` present in each template: `PASS`
- `main-collection-banner` absent in each template: `PASS`
- subcollection schema only outputs for supported handles: `PASS`
- no duplicate with main collection schema routing: `PASS`

### 8. Dangerous files untouched confirmation
- main collection templates untouched
- `templates/collection.tappeti-moderni.json` untouched
- `sections/main-collection-product-grid.liquid` untouched
- product cards untouched
- filters / sorting / pagination untouched
- cart / product-form / variant files untouched
- homepage / header / footer untouched visually

### 9. Next recommended batch
- extend the same subcollection system to the next decor or bagno subcollections after live review of this first lighting/kitchen batch

## Final Verdict
- `READY FOR LIVE REVIEW`
