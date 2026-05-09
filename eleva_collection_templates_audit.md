# ELEVA HOME — Collection Templates Audit

## 1. All collection templates found

### Default collection template

- `templates/collection.json`
  - Likely fallback for any collection without a dedicated suffix template
  - Section order:
    1. `collection-breadcrumbs`
    2. `main-collection-banner`
    3. `main-collection-product-grid`

### Dedicated collection templates

All current dedicated collection templates use the same section order and the same three shared sections:

1. `collection-breadcrumbs`
2. `main-collection-banner`
3. `main-collection-product-grid`

Files found:

- `templates/collection.accessori-bagno.json`
- `templates/collection.applique-lampade-parete.json`
- `templates/collection.candele-portacandele.json`
- `templates/collection.contenitori-bagno.json`
- `templates/collection.contenitori-cucina.json`
- `templates/collection.coperte-plaid.json`
- `templates/collection.cucina-tavola.json`
- `templates/collection.cuscini-decorativi.json`
- `templates/collection.decorazione-casa.json`
- `templates/collection.dispenser-portasapone.json`
- `templates/collection.illuminazione-casa.json`
- `templates/collection.lampade-sospensione.json`
- `templates/collection.lampade-tavolo.json`
- `templates/collection.lampade-terra.json`
- `templates/collection.organizzazione-bagno.json`
- `templates/collection.organizzazione-camera.json`
- `templates/collection.organizzazione-casa.json`
- `templates/collection.organizzazione-cucina.json`
- `templates/collection.organizzazione-ingresso.json`
- `templates/collection.organizzazione-ufficio.json`
- `templates/collection.quadri-poster.json`
- `templates/collection.salvaspazio-bagno.json`
- `templates/collection.salvaspazio-camera.json`
- `templates/collection.salvaspazio-cucina.json`
- `templates/collection.soluzioni-salvaspazio.json`
- `templates/collection.specchi-decorativi.json`
- `templates/collection.stoviglie-piatti.json`
- `templates/collection.tappeti-moderni.json`
- `templates/collection.tappetini-bagno.json`
- `templates/collection.tende-moderne.json`
- `templates/collection.tessili-casa.json`
- `templates/collection.utensili-cucina.json`
- `templates/collection.vasi-decorativi.json`

### Likely collection handle mapping

The filename suffix strongly matches the collection handle it belongs to. Example:

- `collection.accessori-bagno.json` → `accessori-bagno`
- `collection.organizzazione-casa.json` → `organizzazione-casa`
- `collection.soluzioni-salvaspazio.json` → `soluzioni-salvaspazio`
- `collection.applique-lampade-parete.json` → `applique-lampade-parete`

### Current structural conclusion

All collection templates are currently differentiated only by filename, not by section architecture.  
Right now, the store has many collection templates, but they all point to the same three-part layout.

## 2. Current section structure

### Shared order across all collection templates

1. `collection-breadcrumbs`
2. `main-collection-banner`
3. `main-collection-product-grid`

### Per-section audit

#### `collection-breadcrumbs`

- Present on all collection templates
- Has schema
- Purpose:
  - root / collections / current collection path
- Current status:
  - good for navigation
  - basic, minimal
  - no JSON-LD breadcrumb schema
- Notes:
  - earlier homepage issue was unrelated to collections; this section is active and shared by all collection templates

#### `main-collection-banner`

- Present on all collection templates
- Has schema
- Provides:
  - unique `H1` using `collection.title`
  - optional `collection.description`
  - optional `collection.image`
- Current status:
  - structurally acceptable
  - very Dawn-native
  - not yet ELEVA-premium
- Gaps:
  - no custom subcollection routing
  - no trust copy
  - no category-specific editorial framing
  - no internal-link module

#### `main-collection-product-grid`

- Present on all collection templates
- Has schema
- Provides:
  - collection products
  - filters
  - sorting
  - pagination
  - optional quick add modes
- Current status:
  - core functional engine
  - highly shared and therefore high-risk to edit aggressively
- Strong dependency area:
  - product cards
  - facets
  - sorting
  - quick add
  - pagination

## 3. Shared sections

### Main collection section files

- `sections/main-collection-banner.liquid`
- `sections/main-collection-product-grid.liquid`
- `sections/collection-breadcrumbs.liquid`

### Custom collection hero sections

- None currently in use for collection templates
- Only Dawn-native `main-collection-banner`

### Collection banner sections

- `main-collection-banner.liquid`

### Product grid sections

- `main-collection-product-grid.liquid`

### Filter / sort sections and logic

- `main-collection-product-grid.liquid`
- `snippets/facets` is referenced through render inside the product grid
- `assets/facets.js` is loaded by `main-collection-product-grid`

### Breadcrumb sections

- `collection-breadcrumbs.liquid`

### Custom collection SEO sections

- None currently active in collection templates

### Collection FAQ sections

- None currently active in collection templates

### Subcollection links sections

- None currently active in collection templates

## 4. Missing SEO/CRO elements

### What collection pages currently have

- unique `H1`: yes, through `collection.title`
- collection image: optional
- collection description: optional
- product grid: yes
- filters / sorting: yes
- pagination: yes
- breadcrumbs: yes

### What collection pages currently do not have

- custom intro copy beyond `collection.description`
- structured parent / child collection navigation
- related collection links
- room / use-case linking
- trust microcopy
- collection-specific FAQ
- collection-specific editorial block
- collection-specific CRO layer
- visible reassurance near filters/grid
- `CollectionPage` schema
- `BreadcrumbList` schema
- `FAQPage` schema for collections

### CRO gaps

- No “why this collection” framing
- No trust layer before or near the grid
- No cross-navigation to siblings or child collections
- No curated “shop by need” inside collection context

### SEO gaps

- No scalable semantic intro system
- No structured internal-link modules
- No category hub behavior
- No schema layer beyond default HTML structure

## 5. Risk files

### High-risk files not to touch aggressively

- `sections/main-collection-product-grid.liquid`
  - controls filters, sort, grid, pagination, quick add
- `snippets/card-product.liquid`
  - product card rendering
- `assets/facets.js`
  - filtering behavior
- `product-form.js`
  - if quick add/product forms are involved
- `quick-add.js`
  - if grid quick add is enabled
- cart / variant JS files

### Medium-risk files

- `sections/main-collection-banner.liquid`
  - safer than the product grid, but still shared by all collection templates
- `sections/collection-breadcrumbs.liquid`
  - low complexity, but shared globally across collections

### Lowest-risk strategy

Prefer:

- adding new collection sections around the existing grid
- keeping `main-collection-product-grid` mostly native
- reusing Dawn filtering/sorting
- wrapping with ELEVA-specific content sections instead of rewriting the grid engine

## 6. Recommended architecture

### Main collection template structure

For top-level collections like:

- `accessori-bagno`
- `cucina-tavola`
- `organizzazione-casa`
- `decorazione-casa`
- `illuminazione-casa`
- `tessili-casa`
- `soluzioni-salvaspazio`

Recommended structure:

1. Breadcrumbs
2. Premium collection hero
3. Short semantic intro / trust microcopy
4. Subcollection links / category navigation
5. Product grid with filters/sort
6. Related collection links
7. Optional collection FAQ

### Subcollection template structure

For high-intent subcollections like:

- `contenitori-cucina`
- `dispenser-portasapone`
- `organizzazione-cucina`
- `lampade-tavolo`

Recommended structure:

1. Breadcrumbs
2. Compact collection hero
3. Short intro copy
4. Product grid
5. Related sibling collections
6. Optional small FAQ or trust note if justified

### Reusable sections/snippets to create later

Suggested new building blocks:

- `eleva-collection-hero.liquid`
- `eleva-collection-intro.liquid`
- `eleva-collection-subnav.liquid`
- `eleva-collection-trust-strip.liquid`
- `eleva-collection-faq.liquid`
- `snippets/eleva-collection-schema.liquid`

### CSS strategy

Recommended:

- create one dedicated collection CSS layer such as:
  - `assets/eleva-collections.css`
- keep homepage CSS separate
- avoid global overrides in `base.css`
- style new collection-specific sections only

### Schema strategy

Recommended:

- add `CollectionPage` JSON-LD where safe
- add `BreadcrumbList` JSON-LD if breadcrumbs remain shared
- add `FAQPage` only on collections that actually have FAQ content

### Internal linking strategy

For each main collection:

- link to 3–5 child/subcollections
- link to adjacent related main collection when natural
- add a short editorial intro with 2–4 contextual links
- keep anchors natural and non-repetitive

## 7. Priority list

### P0 — Main collections

Optimize first:

- `accessori-bagno`
- `cucina-tavola`
- `organizzazione-casa`
- `decorazione-casa`
- `illuminazione-casa`
- `tessili-casa`
- `soluzioni-salvaspazio`

Reason:

- highest SEO value
- strongest navigation hubs
- most likely homepage traffic destinations

### P1 — High-intent subcollections

Optimize second:

- `organizzazione-cucina`
- `organizzazione-bagno`
- `organizzazione-camera`
- `contenitori-cucina`
- `dispenser-portasapone`
- `lampade-tavolo`
- `applique-lampade-parete`
- `tappetini-bagno`

Reason:

- stronger transactional/search intent
- good candidates for intro + subnav + trust

### P2 — Remaining collections

Optimize later:

- the rest of the long-tail decorative / supporting subcollections

## 8. Suggested first implementation module

### Recommended first module: `Collection Module 8.1`

Scope:

- do **not** rewrite `main-collection-product-grid`
- keep filters, sorting, pagination Dawn-native
- build one premium shared top-layer for main collections only:
  - premium hero
  - intro copy
  - subcollection links
  - small trust strip

### Why this is the safest next step

- highest SEO/CRO upside
- lowest risk versus editing the grid engine
- scalable to all main collections
- lets ELEVA reuse homepage design language without forcing homepage code into collection templates

## 9. Homepage comparison / reuse notes

### What can reuse ELEVA design system

- typography tokens
- spacing system
- card treatment
- trust styling language
- editorial text block style
- premium CTA style

### What needs new collection CSS

- collection hero layout
- subcollection navigation grid
- intro/trust/FAQ wrappers for collection pages
- spacing rhythm around the product grid

### What should stay Dawn-native

- product grid engine
- filter logic
- sorting logic
- pagination
- quick add unless explicitly disabled later

### What should not be touched first

- `card-product` rendering
- facets logic
- cart-related behavior
- product form behavior

## 10. Final verdict

**READY FOR COLLECTION MODULE 8.1**

Current situation:

- collection template system is structurally very consistent
- but almost entirely Dawn-native
- dedicated collection template files exist, yet they currently provide no meaningful per-template differentiation beyond file naming

Best next move:

- build a premium reusable collection layer around the existing shared grid
- start with main collections first
- keep the risky commerce/filter/product systems intact
