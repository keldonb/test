#!/usr/bin/env bash
# Run this locally where `gh` is authenticated:
#   chmod +x create-issues.sh && ./create-issues.sh
set -euo pipefail

REPO="keldonb/test"

echo "Creating issues in ${REPO}..."

gh issue create --repo "$REPO" \
  --title "Add bilingual support (English / French)" \
  --body "$(cat <<'BODY'
## Summary
As a Canadian think tank, offering the tracker in both official languages would broaden the audience and align with federal language obligations.

## Details
- Add an i18n layer (e.g., `react-i18next`) for all UI strings (headers, labels, filter names, status names, footer)
- Extend the case data schema with bilingual fields (`summary_en` / `summary_fr`, `notes_en` / `notes_fr`, etc.)
- Add a language toggle in the header
- Consider whether jurisdiction/authority names should also be translated

## Considerations
- The bulk of the translation work is in the case content, not the UI chrome
- Could be phased: Phase 1 = UI strings only, Phase 2 = case content
BODY
)"

gh issue create --repo "$REPO" \
  --title "Add search functionality" \
  --body "$(cat <<'BODY'
## Summary
Researchers need to search across case titles, summaries, theories of harm, and notes. Currently the only way to narrow results is through the three dropdown filters.

## Details
- Add a text search input to the filter bar
- Use a lightweight client-side fuzzy search library (e.g., Fuse.js) given the small dataset size
- Search should cover: title, summary, theoriesOfHarm, notes, authority, and key date event descriptions
- Highlight matching terms in results

## Acceptance Criteria
- [ ] Search input renders in the filter bar
- [ ] Results update in real time as the user types
- [ ] Search works in combination with existing dropdown filters
- [ ] Empty search restores the full filtered list
BODY
)"

gh issue create --repo "$REPO" \
  --title "Add URL routing and deep linking" \
  --body "$(cat <<'BODY'
## Summary
The app has no URL routing — users cannot share a link to a specific case or a filtered view. This limits the tracker's usefulness as a reference tool.

## Details
- Add React Router (or hash-based routing as a lighter alternative)
- Routes to support:
  - `/` — grid view with default filters
  - `/case/:id` — individual case detail view
  - Query params for filter state (e.g., `?jurisdiction=Canada&status=Litigation`)
- Ensure browser back/forward navigation works correctly with case detail views

## Why This Matters
Researchers sharing links in reports, emails, or social media currently cannot point to a specific case or filtered view.
BODY
)"

gh issue create --repo "$REPO" \
  --title "Add cross-jurisdictional comparison view" \
  --body "$(cat <<'BODY'
## Summary
A key value-add for a think tank is comparative analysis. The tracker should support viewing parallel enforcement actions across jurisdictions side-by-side.

## Details
- Add a "Compare" view that groups related cases (e.g., Google ad tech cases in US, EU, Canada, and Japan)
- Display differences in: theories of harm, remedies sought, timeline, and current status
- Could be implemented as:
  - A tagging system linking related cases (e.g., `relatedCases: [2, 13]`)
  - A dedicated comparison layout showing 2-4 cases in columns
- Consider adding a "legal basis" field to each case to compare statutory frameworks

## Use Case
A researcher writing about global ad tech enforcement can instantly see how Canada's Competition Bureau approach compares to the US DOJ, EU Commission, and Japan JFTC actions against Google.
BODY
)"

gh issue create --repo "$REPO" \
  --title "Add structured remedies and fines data" \
  --body "$(cat <<'BODY'
## Summary
The tracker lacks structured data on fines and remedies, preventing quantitative analysis.

## Details
Add explicit fields to the case schema:
- **fineAmount** (number) and **fineCurrency** (string) — enables aggregate statistics
- **remedyType** — enum: structural, behavioral, commitments, none
- **complianceStatus** — for closed/settled cases: compliant, non-compliant, under review
- **relatedLegislation** — the statutory provision (e.g., Section 79 Competition Act, Article 102 TFEU)

## Why This Matters
A think tank publishing policy analysis needs to run quantitative comparisons: total fines by jurisdiction, frequency of structural vs. behavioral remedies, average case duration, etc. The current freeform text makes this impossible without manual extraction.
BODY
)"

gh issue create --repo "$REPO" \
  --title "Add export and citation features" \
  --body "$(cat <<'BODY'
## Summary
Researchers need to cite and share tracker data in publications, briefings, and policy documents.

## Details
- **CSV/JSON export** of current filtered case list
- **"Cite this case" button** generating a formatted citation (APA, Chicago, or a custom think tank format)
- **PDF export** of individual case detail views for inclusion in briefing materials
- **Shareable snapshot URLs** (see also: URL routing issue)

## Acceptance Criteria
- [ ] Export button on the filter bar downloads filtered cases as CSV
- [ ] Case detail view has a "Cite" button with copy-to-clipboard
- [ ] Citation includes: case title, tracker name, date accessed, URL
BODY
)"

gh issue create --repo "$REPO" \
  --title "Move case data to a CMS or structured data backend" \
  --body "$(cat <<'BODY'
## Summary
All case data is hardcoded in a single JavaScript file. For a think tank with multiple researchers updating cases, this requires code changes for every update.

## Options (in order of complexity)
1. **JSON file + simple admin UI** — move data to a JSON file, build a basic editor page
2. **Headless CMS** (Strapi, Sanity, or Contentful) — structured schemas, role-based access, revision history
3. **Airtable/Google Sheets integration** — lowest barrier for non-technical researchers, fetch via API at build time

## Considerations
- The current dataset is small (15 cases) but will grow
- Multiple researchers need to update cases without touching source code
- Version history and audit trail are important for a think tank's credibility
BODY
)"

gh issue create --repo "$REPO" \
  --title "Add data freshness indicators and update tracking" \
  --body "$(cat <<'BODY'
## Summary
There is no way to tell when a case was last reviewed or updated. Stale data undermines the tracker's credibility.

## Details
- Add a `lastUpdated` timestamp field to each case
- Display it in the case card and detail view
- Add a global "Data last reviewed" date in the footer
- Flag cases not updated in 90+ days with a visual indicator for researcher review
- Consider an automated check that highlights cases where a `nextSteps` date has passed

## Why This Matters
Policy audiences need to trust the data is current. A case showing a "next step" date in the past with no update signals neglect.
BODY
)"

gh issue create --repo "$REPO" \
  --title "Expand jurisdiction coverage (Australia, South Korea, India, Brazil)" \
  --body "$(cat <<'BODY'
## Summary
The tracker currently covers the US, EU, UK, Japan, and Canada. Several other jurisdictions have active tech antitrust programs that would strengthen the tracker's comparative value.

## Priority Additions
1. **Australia (ACCC)** — Digital Platform Services Inquiry, News Media Bargaining Code enforcement
2. **South Korea (KFTC)** — Google Play billing case (resolved), ongoing app store investigations
3. **India (CCI)** — Google Android case, Google Play billing, WhatsApp privacy investigation
4. **Brazil (CADE)** — Google Shopping, Apple App Store investigations

## Considerations
- Each new jurisdiction increases the maintenance burden — consider phasing
- Bilingual jurisdictions (e.g., India) may need special handling
- Authority names and legal frameworks should be documented for context
BODY
)"

gh issue create --repo "$REPO" \
  --title "Add analytical dashboard with aggregate statistics" \
  --body "$(cat <<'BODY'
## Summary
Add a dashboard view with aggregate statistics to turn the tracker from a reference tool into an analytical resource suitable for policy publications.

## Suggested Visualizations
- Cases opened by year (bar chart)
- Cases by status (current pipeline already does this — could be enhanced)
- Total fines by jurisdiction (requires structured fines data — see related issue)
- Average case duration by jurisdiction
- Breakdown by company and jurisdiction (heatmap or matrix)
- Timeline of all cases on a single Gantt-style chart

## Technical Considerations
- A lightweight charting library (e.g., Recharts, Chart.js) would suffice
- Dashboard should respect the current filter state
- Consider whether charts should be exportable as images for publications
BODY
)"

echo ""
echo "All issues created successfully."
