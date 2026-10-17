# OddlyFound — Product Requirements Specification

## Overview
Brand: OddlyFound  
Domain: oddlyfound.in  
Type: product discovery, affiliate marketing, and editorial website.  
Tagline: “Not looking for anything? You might find something here.”

Build a visually distinctive platform for discovering interesting gadgets, accessories, useful everyday products, and unusual finds. Initial monetisation is affiliate marketing; future own-product sales may be added separately.

## Business requirements
- Minimise initial investment and recurring cost; aim for ₹0 recurring hosting/infrastructure where practical.
- Enable product and article management without routine code edits.
- Support organic SEO, affiliate links, and clear disclosures.
- Keep the architecture simple and extensible.
- Verify current free-tier limits; no paid services without explicit approval.

## Proposed stack (verify against repository)
- Astro: content-focused website and static generation.
- TypeScript: type safety.
- Tailwind CSS: responsive styling.
- Decap CMS: browser-based content management.
- GitHub: source control and Git-based content workflow.
- Cloudflare Pages: proposed hosting/deployment.
- No database initially.
- VS Code and Codex for development.
The proposed stack is not proof that these tools are already configured.

## Functional scope
### Homepage
Brand identity/tagline, curated products, recent finds, featured collections, categories, editorial links, premium but useful visual design, mobile-first usability, fast loading.

### Product discovery
Product name, images, short description, benefits, category, tags, optional price/currency, affiliate URL, merchant/brand, featured flag, publication date, optional pros/cons/editorial notes. Do not imply price or availability is live unless reliably verified.

### Search and categories
Configurable categories and tags; keyword search across products/articles; category filtering; useful empty state.

### Editorial content
Roundups, buying guides, comparisons, reviews, recommendations, and unusual/useful product lists. Articles support title, slug, image, description, body, categories, tags, author, publication date, SEO metadata, contextual product links, and related products.

### CMS
Authorised editors can create/edit/publish/unpublish products and articles, manage categories/tags/collections, upload/reference images, edit affiliate URLs and product metadata, configure homepage featured content, and set SEO fields. Publishing uses the normal Git-based workflow. No credentials in client code and no unauthorised publishing.

### Affiliate monetisation
Support multiple merchants/programmes, clear disclosures, descriptive CTAs, editable affiliate URLs, optional privacy-respecting click tracking only if it fits approved cost/privacy constraints. Do not scrape merchants or assume rights to product assets/copy/prices.

### SEO
Readable URLs, title/description/canonical/social metadata, XML sitemap, robots.txt, semantic HTML, appropriate accurate structured data, optimised images, and avoidance of duplicate/thin content.

## Future own-product capability
Keep content architecture extensible for future owned products, variants, inventory, checkout, orders, and payment integrations. These are out of scope for the initial release unless separately approved.

## Non-functional requirements
- Prefer static generation and minimal client JavaScript.
- Semantic HTML, keyboard support, visible focus, meaningful alt text, readable contrast.
- Mobile, tablet, laptop, and desktop support without horizontal overflow.
- Secure CMS authentication, no exposed secrets, validate content and URLs.
- Follow project conventions; avoid premature abstractions.

## Initial release
Homepage, product listing/detail/discovery, categories/collections, editorial pages, search/filtering, affiliate links/disclosures, CMS, SEO, responsive/performance work, and GitHub-based deployment to the verified hosting platform.

## Exclusions
Cart/checkout, payments, accounts, inventory, fulfilment, paid ads integrations, paid databases/subscriptions, complex analytics, and custom APIs unless separately approved.

## Acceptance criteria
1. Browse homepage, products, categories, collections, and articles.
2. Discovery works on mobile and desktop.
3. Search/filter results are correct, including no-result state.
4. Affiliate links use configured destinations.
5. Disclosures are visible where required.
6. Authorised editors manage content through CMS.
7. Published content reaches the site through the verified deployment workflow.
8. Metadata, sitemap, canonical URLs, and robots.txt are appropriately configured.
9. No unnecessary paid infrastructure is added.
10. Relevant builds/tests/accessibility checks are run and reported.
11. Future ecommerce can be added without rebuilding the whole site.

## Implementation constraints
- Initialize Caveman before task-specific work.
- Inspect the actual repository before planning changes.
- Use the proposed stack unless a documented constraint requires a change.
- Do not edit application code before explicit approval of both the requirements specification and complete implementation plan.
- Report assumptions, risks, costs, and verification gaps honestly.
