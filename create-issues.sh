#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────
# create-issues.sh
# Creates GitHub issues for proposed improvements to the
# Antitrust Case Tracker.
#
# Prerequisites:
#   1. Install the GitHub CLI: https://cli.github.com
#   2. Authenticate: gh auth login
#
# Usage:
#   chmod +x create-issues.sh
#   ./create-issues.sh
# ──────────────────────────────────────────────────────────────────
set -euo pipefail

REPO="keldonb/test"

create_issue() {
  local title="$1"
  local labels="$2"
  local body="$3"

  echo "Creating issue: $title"
  gh issue create \
    --repo "$REPO" \
    --title "$title" \
    --label "$labels" \
    --body "$body"
  echo ""
}

ensure_labels() {
  for label in "enhancement" "data" "accessibility" "i18n" "ux" "infrastructure"; do
    gh label create "$label" --repo "$REPO" --force 2>/dev/null || true
  done
}

echo "Ensuring labels exist..."
ensure_labels

# ── Issue 1 ──────────────────────────────────────────────────────
create_issue \
  "Add Canadian Competition Bureau cases" \
  "enhancement,data" \
  "$(cat <<'EOF'
## Summary

The tracker currently covers cases from the United States (DOJ / FTC), European Union, United Kingdom (CMA), and Japan (JFTC) but does not include any proceedings from **Canada's Competition Bureau**. Given that this tracker is maintained by a Canadian think tank, the absence of domestic cases is a significant gap.

## Proposed Cases to Add

- **Competition Bureau v. Google — Ad Tech** (2024): The Bureau filed an application alleging Google engaged in anti-competitive conduct in online advertising.
- **Rogers / Shaw merger review** (2022-2023): High-profile merger review with conditions imposed by the Bureau.
- **Competition Bureau market study — Digital Health Care** (ongoing): Studying competition in digital health-care markets.
- **Competition Bureau v. Amazon — Buy Box and pricing algorithms** (if applicable, following international trends).

Adding Canadian cases will strengthen the tracker's credibility as a product of a Canadian institution, demonstrate domestic relevance, and better serve Canadian researchers and policymakers.

## Suggested Data Changes

- Add `"Canada"` to the jurisdictions list.
- Add `"Competition Bureau of Canada"` as a new authority.
- Populate at least 2-3 prominent Canadian competition cases with full data (key dates, theories of harm, documents, and notes).

## Acceptance Criteria

- [ ] At least 2 Canadian Competition Bureau cases are added to `src/data/cases.js`
- [ ] "Canada" appears as a selectable jurisdiction in the filter bar
- [ ] Key dates include links to official Bureau press releases where available
EOF
)"

# ── Issue 2 ──────────────────────────────────────────────────────
create_issue \
  "Add bilingual (English/French) language support" \
  "enhancement,i18n" \
  "$(cat <<'EOF'
## Summary

As a tool published by a Canadian think tank, the tracker should offer **bilingual support** in both English and French, consistent with Canada's Official Languages Act and standard practice for Canadian public-interest organizations.

## Scope

- Add a language toggle (EN / FR) in the header.
- Translate all static UI strings: header, footer, filter labels, status names, section headings, and empty-state messages.
- Case data (titles, summaries, theories of harm, etc.) can remain English-only initially, with a follow-up phase for French translations of case content.
- Store translations in a simple JSON-based i18n system (e.g., `src/i18n/en.json` and `src/i18n/fr.json`).
- Persist the language preference in `localStorage`.

## Acceptance Criteria

- [ ] Language toggle is visible in the header
- [ ] All UI chrome (labels, headings, footer disclaimer) renders in the selected language
- [ ] Selected language persists across page reloads
- [ ] No layout breakage when switching languages (French strings are often longer)
EOF
)"

# ── Issue 3 ──────────────────────────────────────────────────────
create_issue \
  "Add full-text search across cases" \
  "enhancement,ux" \
  "$(cat <<'EOF'
## Summary

Currently users can only filter cases by company, jurisdiction, and status using dropdown menus. A **free-text search bar** would let users quickly find cases by keyword — for example, searching for "ad tech", "App Store", "self-preferencing", or "divestiture".

## Proposed Behavior

- Add a search input field to the filter bar (or directly below the header).
- Search across: title, summary, theories of harm, notes, authority name, and document names.
- Filter the case list in real time as the user types (debounced at ~250ms).
- Highlight or indicate matched terms if feasible.
- Clear button to reset the search.

## Acceptance Criteria

- [ ] Search input is present in the UI
- [ ] Typing a query filters the displayed cases in real time
- [ ] Search covers title, summary, theories of harm, and notes fields
- [ ] Empty search shows all cases (respecting other active filters)
EOF
)"

# ── Issue 4 ──────────────────────────────────────────────────────
create_issue \
  "Add a visual case timeline / Gantt-style view" \
  "enhancement,ux" \
  "$(cat <<'EOF'
## Summary

The tracker currently shows cases as a list of cards. A **timeline or Gantt-style visualization** would help users understand the chronological progression and overlap of multiple antitrust proceedings at a glance.

## Proposed Design

- Add a "Timeline View" toggle alongside the current card/grid view.
- Display each case as a horizontal bar spanning from its `openedDate` to the present (or close date for closed cases).
- Color-code bars by status (matching existing status badge colors).
- Allow hovering or clicking a bar to see case details.
- Optionally group rows by company or jurisdiction.

## Considerations

- Can use a lightweight library (e.g., custom SVG rendering or a small charting library) to avoid heavy dependencies.
- Should be responsive and usable on tablet-sized screens at minimum.

## Acceptance Criteria

- [ ] A toggle switches between card view and timeline view
- [ ] Timeline view shows each case as a horizontal bar
- [ ] Bars are color-coded by status
- [ ] Clicking a bar navigates to the case detail view
EOF
)"

# ── Issue 5 ──────────────────────────────────────────────────────
create_issue \
  "Add CSV/PDF export for researchers" \
  "enhancement,ux" \
  "$(cat <<'EOF'
## Summary

Policy researchers, journalists, and analysts often need to extract data from the tracker for reports and further analysis. Adding **export functionality** (CSV and/or PDF) would make the tool significantly more useful for the think tank's audience.

## Proposed Behavior

- Add an "Export" button (or dropdown) to the main view.
- **CSV export**: Exports the currently filtered cases as a CSV file with columns for company, title, jurisdiction, authority, status, opened date, summary, and theories of harm.
- **PDF export** (stretch goal): Generates a formatted PDF report of the currently visible cases, suitable for inclusion in policy briefs or reports.
- Export should respect the currently active filters — users export only what they see.

## Acceptance Criteria

- [ ] Export button is visible on the main case list view
- [ ] CSV download works and includes all key case fields
- [ ] Exported data respects current filter selections
- [ ] CSV file uses UTF-8 encoding and handles special characters correctly
EOF
)"

# ── Issue 6 ──────────────────────────────────────────────────────
create_issue \
  "Improve accessibility (WCAG 2.1 AA compliance)" \
  "enhancement,accessibility" \
  "$(cat <<'EOF'
## Summary

As a public-interest tool published by a Canadian think tank, the tracker should meet **WCAG 2.1 Level AA** accessibility standards. This is also consistent with Canadian federal accessibility requirements under the *Accessible Canada Act*.

## Areas to Address

- **Keyboard navigation**: Ensure all interactive elements (cards, filters, back button, external links) are reachable and operable via keyboard alone.
- **Screen reader support**: Add appropriate ARIA labels and roles. Case cards should announce their title, status, and company. Status pipeline should announce counts.
- **Color contrast**: Verify that all status badge colors meet the 4.5:1 contrast ratio against their backgrounds.
- **Focus indicators**: Ensure visible focus rings on all focusable elements.
- **Skip navigation link**: Add a "Skip to main content" link for keyboard users.
- **Reduced motion**: Respect `prefers-reduced-motion` for any transitions or animations.

## Acceptance Criteria

- [ ] All interactive elements are keyboard-accessible
- [ ] Screen reader testing passes with VoiceOver and/or NVDA
- [ ] Color contrast ratios meet WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text)
- [ ] A skip-to-content link is present
- [ ] No accessibility errors in automated audit (e.g., axe-core or Lighthouse)
EOF
)"

# ── Issue 7 ──────────────────────────────────────────────────────
create_issue \
  "Add 'Last Updated' timestamps and data freshness indicator" \
  "enhancement,data" \
  "$(cat <<'EOF'
## Summary

The tracker's footer states "Data is illustrative. Dates and details should be verified against official sources." This is appropriate, but users currently have **no way to know when the data was last updated**. For a think tank publishing ongoing research, communicating data freshness is important for credibility.

## Proposed Changes

- Add a `lastUpdated` field to each case in `src/data/cases.js`.
- Display a "Last updated: [date]" label on each case card and in the detail view.
- Add a global "Data last reviewed: [date]" indicator in the header or footer.
- Optionally flag cases that haven't been updated in 90+ days with a "may be stale" indicator.

## Acceptance Criteria

- [ ] Each case has a `lastUpdated` field in the data
- [ ] Last updated date is visible on case cards and detail views
- [ ] Global data freshness date is shown in the footer
- [ ] Stale cases (90+ days without update) are visually indicated
EOF
)"

# ── Issue 8 ──────────────────────────────────────────────────────
create_issue \
  "Expand jurisdictional coverage: Australia, South Korea, India" \
  "enhancement,data" \
  "$(cat <<'EOF'
## Summary

The tracker currently covers the US, EU, UK, and Japan. Several other jurisdictions are pursuing major antitrust actions against Big Tech and should be added to give the tracker **global scope**:

## Proposed Additions

### Australia (ACCC)
- ACCC Digital Platform Services Inquiry (ongoing multi-year inquiry)
- News Media Bargaining Code enforcement actions

### South Korea (KFTC)
- KFTC v. Google — App Store billing (2021, $177M fine)
- KFTC investigations into Apple App Store practices

### India (CCI)
- CCI v. Google — Android antitrust case (2022, upheld on appeal)
- CCI investigation into Apple App Store

### Brazil (CADE)
- CADE investigations into Google and Apple practices

## Considerations

- Prioritize jurisdictions where there are final decisions or active litigation.
- Ensure source links point to official competition authority press releases.
- May require additional date formatting considerations for non-Western date conventions.

## Acceptance Criteria

- [ ] At least 3 new jurisdictions are added with representative cases
- [ ] Each new case includes key dates with source links where available
- [ ] Filter bar reflects the new jurisdiction options
EOF
)"

# ── Issue 9 ──────────────────────────────────────────────────────
create_issue \
  "Add RSS feed or email notification for case updates" \
  "enhancement,infrastructure" \
  "$(cat <<'EOF'
## Summary

Researchers and journalists who follow antitrust developments would benefit from a way to **subscribe to updates** when case data changes. This would make the tracker a go-to resource rather than a site users must remember to check periodically.

## Options to Consider

### Option A: RSS Feed
- Generate an RSS/Atom feed from the case data at build time.
- Each case update (new key date, status change, new document) becomes a feed item.
- Low maintenance; integrates with existing RSS readers and newsroom tools.

### Option B: Email Digest (more complex)
- Allow users to subscribe to a weekly/monthly digest.
- Requires a backend or third-party email service (e.g., Mailchimp, Buttondown).

### Option C: GitHub-based notifications
- Since the data lives in a Git repository, interested users could "Watch" the repo.
- Improve commit messages to be descriptive about which cases were updated.

## Recommendation

Option A (RSS feed) is the lowest-effort, highest-value approach. Option C is a zero-effort interim solution.

## Acceptance Criteria

- [ ] At least one notification mechanism is available for users
- [ ] The mechanism surfaces which specific cases were updated
EOF
)"

# ── Issue 10 ─────────────────────────────────────────────────────
create_issue \
  "Add Canadian policy context: link cases to Competition Act provisions" \
  "enhancement,data" \
  "$(cat <<'EOF'
## Summary

As a Canadian think tank project, the tracker could provide unique value by contextualizing international antitrust cases within the framework of **Canadian competition law**. This would help Canadian policymakers and researchers understand how foreign enforcement actions relate to domestic legal tools.

## Proposed Additions

- Add an optional `canadianContext` field to each case in the data model.
- For each case, note which provisions of the **Competition Act** (R.S.C., 1985, c. C-34) would be relevant if the conduct occurred in Canada. For example:
  - *Google Shopping (self-preferencing)* → Section 79 (abuse of dominant position)
  - *Apple App Store (tying)* → Section 77 (exclusive dealing / tying)
  - *Microsoft/Activision (merger)* → Part IX (merger review, sections 91-100)
- Include a brief note on whether Canada's Competition Bureau has taken or could take similar action.
- Display this section on the case detail page under a "Canadian Policy Context" heading.

## Why This Matters

Canada recently passed significant amendments to the Competition Act (Bill C-56 and Bill C-59, 2023-2024) that strengthen abuse of dominance provisions and add new tools. Mapping international cases to the updated Canadian framework would be a unique and timely contribution.

## Acceptance Criteria

- [ ] `canadianContext` field added to the case data model
- [ ] At least 5 cases have Canadian policy context annotations
- [ ] A "Canadian Policy Context" section appears on the case detail view when data is present
- [ ] References cite specific Competition Act sections
EOF
)"

echo ""
echo "All issues created successfully!"
echo "View them at: https://github.com/$REPO/issues"
