// Antitrust / Competition Law Case Tracker - Sample Data
// Statuses: "Investigation", "Preliminary Findings", "Formal Charges",
//           "Litigation", "Remedies/Settlement", "Appeal", "Closed"

const cases = [
  {
    id: 1,
    company: "Google",
    title: "US DOJ v. Google — Search Distribution",
    jurisdiction: "United States",
    authority: "U.S. Department of Justice (DOJ)",
    status: "Remedies/Settlement",
    openedDate: "2020-10-20",
    summary:
      "The DOJ alleged that Google maintained monopoly power in general search and search advertising through exclusionary distribution agreements (e.g., default search deals with Apple, Android OEMs, and browsers).",
    theoriesOfHarm: [
      "Monopoly maintenance via exclusive distribution agreements",
      "Foreclosure of rival search engines from key distribution channels",
      "Harm to advertisers through supracompetitive pricing",
    ],
    keyDates: [
      { date: "2020-10-20", event: "DOJ files complaint", url: "https://www.justice.gov/archives/opa/pr/justice-department-sues-monopolist-google-violating-antitrust-laws" },
      { date: "2023-09-12", event: "Trial begins (U.S. District Court, D.C.)" },
      { date: "2024-08-05", event: "Judge Mehta rules Google is a monopolist", url: "https://www.justice.gov/opa/pr/department-justice-prevails-landmark-antitrust-case-against-google" },
      { date: "2025-04-00", event: "Remedies phase trial (estimated)", url: "https://www.justice.gov/opa/pr/department-justice-wins-significant-remedies-against-google" },
    ],
    nextSteps: [
      {
        description: "Remedies trial to determine structural or behavioral remedies",
        date: "2025-04-17",
      },
      {
        description: "Possible appeal by Google to D.C. Circuit",
        date: null,
      },
    ],
    documents: [
      { name: "Complaint (Oct 2020)", url: "https://www.justice.gov/atr/case/us-and-plaintiff-states-v-google-llc" },
      { name: "Findings of Fact & Conclusions of Law (Aug 2024)", url: "https://www.justice.gov/opa/pr/department-justice-prevails-landmark-antitrust-case-against-google" },
    ],
    notes:
      "DOJ has proposed remedies including divestiture of Chrome and restrictions on default agreements. Google has strongly contested the proposed remedies.",
  },
  {
    id: 2,
    company: "Google",
    title: "US DOJ v. Google — Ad Tech",
    jurisdiction: "United States",
    authority: "U.S. Department of Justice (DOJ)",
    status: "Litigation",
    openedDate: "2023-01-24",
    summary:
      "The DOJ's second antitrust case against Google targets its dominance across the ad tech stack — the tools used by publishers to sell ad space and advertisers to buy it.",
    theoriesOfHarm: [
      "Monopolization of publisher ad server market (Google Ad Manager / DFP)",
      "Tying and bundling across the ad tech stack",
      "Self-preferencing through Google Ad Exchange",
      "Conflicts of interest operating on both buy-side and sell-side",
    ],
    keyDates: [
      { date: "2023-01-24", event: "DOJ files complaint (E.D. Va.)", url: "https://www.justice.gov/archives/opa/pr/justice-department-sues-google-monopolizing-digital-advertising-technologies" },
      { date: "2024-09-09", event: "Trial begins before Judge Brinkema" },
      { date: "2024-11-00", event: "Closing arguments" },
    ],
    nextSteps: [
      {
        description: "Ruling expected from Judge Brinkema",
        date: "2025-03-01",
      },
      {
        description: "If liable, remedies phase to follow",
        date: null,
      },
    ],
    documents: [{ name: "Complaint (Jan 2023)", url: "https://www.justice.gov/atr/case/us-and-plaintiff-states-v-google-llc-2023" }],
    notes:
      "Virginia AG and several state AGs joined the DOJ. Google argues the ad tech market is competitive and that its integrated offering benefits advertisers and publishers.",
  },
  {
    id: 3,
    company: "Google",
    title: "EU Commission — Google Shopping",
    jurisdiction: "European Union",
    authority: "European Commission (DG Competition)",
    status: "Closed",
    openedDate: "2010-11-30",
    summary:
      "The Commission found Google abused its market dominance in general search by systematically favoring its own comparison shopping service in search results.",
    theoriesOfHarm: [
      "Self-preferencing of Google Shopping in search results",
      "Demotion of rival comparison shopping services",
      "Leveraging dominance from general search into comparison shopping",
    ],
    keyDates: [
      { date: "2010-11-30", event: "Formal investigation opened" },
      { date: "2017-06-27", event: "Commission issues €2.42B fine", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_17_1784" },
      { date: "2021-11-10", event: "General Court largely upholds decision" },
      { date: "2024-09-10", event: "CJEU upholds fine on appeal" },
    ],
    nextSteps: [],
    documents: [
      { name: "Commission Decision (Jun 2017)", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_17_1784" },
      { name: "General Court Judgment (Nov 2021)" },
      { name: "CJEU Judgment (Sep 2024)" },
    ],
    notes:
      "Landmark self-preferencing case. Google implemented a compliance mechanism (auction-based shopping unit) but its effectiveness remains debated.",
  },
  {
    id: 4,
    company: "Apple",
    title: "US DOJ v. Apple — Smartphone Monopoly",
    jurisdiction: "United States",
    authority: "U.S. Department of Justice (DOJ)",
    status: "Litigation",
    openedDate: "2024-03-21",
    summary:
      "The DOJ alleges Apple maintains an illegal monopoly over the smartphone market by imposing restrictive contractual terms and withholding APIs to suppress technologies that would increase competition.",
    theoriesOfHarm: [
      "Suppression of super apps that reduce switching costs",
      "Degradation of cross-platform messaging (green bubbles)",
      "Limiting cloud streaming game apps",
      "Restricting NFC access for competing digital wallets",
      "Imposing anticompetitive App Store terms",
    ],
    keyDates: [
      { date: "2024-03-21", event: "DOJ and 16 state AGs file complaint (D.N.J.)", url: "https://www.justice.gov/archives/opa/pr/justice-department-sues-apple-monopolizing-smartphone-markets" },
      { date: "2025-01-00", event: "Apple's motion to dismiss partially denied" },
    ],
    nextSteps: [
      {
        description: "Discovery phase underway",
        date: null,
      },
      {
        description: "Trial date to be set",
        date: null,
      },
    ],
    documents: [{ name: "Complaint (Mar 2024)", url: "https://www.justice.gov/atr/case/us-and-plaintiff-states-v-apple-inc" }],
    notes:
      "Broad case targeting Apple's entire ecosystem strategy. Apple argues its restrictions improve security, privacy, and user experience.",
  },
  {
    id: 5,
    company: "Apple",
    title: "EU Commission — Apple App Store (Spotify)",
    jurisdiction: "European Union",
    authority: "European Commission (DG Competition)",
    status: "Appeal",
    openedDate: "2020-06-16",
    summary:
      "Following a complaint by Spotify, the Commission found Apple abused its dominant position by imposing anti-steering provisions that prevented music streaming app developers from informing users of alternative purchasing options.",
    theoriesOfHarm: [
      "Anti-steering provisions restricting developer communication with users",
      "Leveraging App Store dominance to benefit Apple Music",
      "Excessive commission fees on in-app purchases",
    ],
    keyDates: [
      { date: "2020-06-16", event: "Statement of Objections issued", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_20_1073" },
      { date: "2024-03-04", event: "Commission fines Apple €1.84B", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_24_1161" },
      { date: "2024-05-00", event: "Apple appeals to General Court" },
    ],
    nextSteps: [
      {
        description: "General Court hearing on appeal",
        date: null,
      },
    ],
    documents: [
      { name: "Statement of Objections (Jun 2020)", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_20_1073" },
      { name: "Commission Decision (Mar 2024)", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_24_1161" },
    ],
    notes:
      "Decided under the Digital Markets Act as well. Apple has also been designated as a gatekeeper under the DMA with separate compliance obligations.",
  },
  {
    id: 6,
    company: "Meta",
    title: "FTC v. Meta — Social Networking Monopoly",
    jurisdiction: "United States",
    authority: "Federal Trade Commission (FTC)",
    status: "Litigation",
    openedDate: "2020-12-09",
    summary:
      "The FTC alleges Meta (then Facebook) maintained a monopoly in personal social networking through anticompetitive acquisitions of Instagram and WhatsApp and by imposing anticompetitive conditions on third-party app developers.",
    theoriesOfHarm: [
      "Anticompetitive acquisitions (Instagram 2012, WhatsApp 2014)",
      "Platform anti-interoperability policies targeting rival apps",
      "Monopoly maintenance in personal social networking services",
    ],
    keyDates: [
      { date: "2020-12-09", event: "FTC files complaint", url: "https://www.ftc.gov/news-events/news/press-releases/2020/12/ftc-sues-facebook-illegal-monopolization" },
      { date: "2021-06-28", event: "Initial complaint dismissed; FTC refiles" },
      { date: "2022-01-11", event: "Amended complaint survives motion to dismiss" },
      { date: "2025-04-14", event: "Trial scheduled to begin" },
    ],
    nextSteps: [
      {
        description: "Trial begins in FTC v. Meta",
        date: "2025-04-14",
      },
      {
        description: "FTC seeking structural relief (divestiture of Instagram/WhatsApp)",
        date: null,
      },
    ],
    documents: [
      { name: "Original Complaint (Dec 2020)", url: "https://www.ftc.gov/legal-library/browse/cases-proceedings/191-0134-facebook-inc-ftc-v-ftc-v-meta-platforms-inc" },
      { name: "Amended Complaint (Aug 2021)", url: "https://www.ftc.gov/legal-library/browse/cases-proceedings/191-0134-facebook-inc-ftc-v-ftc-v-meta-platforms-inc" },
    ],
    notes:
      "One of the most significant tech antitrust cases. The FTC must prove that personal social networking is a relevant market and that the acquisitions were anticompetitive — years after they were approved.",
  },
  {
    id: 7,
    company: "Microsoft",
    title: "UK CMA — Microsoft / Activision Blizzard",
    jurisdiction: "United Kingdom",
    authority: "Competition and Markets Authority (CMA)",
    status: "Closed",
    openedDate: "2022-07-06",
    summary:
      "The CMA initially blocked Microsoft's $69B acquisition of Activision Blizzard over concerns about cloud gaming. After Microsoft restructured the deal, the CMA ultimately approved it.",
    theoriesOfHarm: [
      "Input foreclosure in cloud gaming services",
      "Vertical effects from owning major game titles (Call of Duty, etc.)",
      "Strengthening dominance in gaming ecosystems",
    ],
    keyDates: [
      { date: "2022-07-06", event: "CMA opens Phase 1 investigation", url: "https://www.gov.uk/cma-cases/microsoft-slash-activision-blizzard-merger-inquiry" },
      { date: "2023-04-26", event: "CMA blocks the deal", url: "https://www.gov.uk/government/news/microsoft-activision-deal-prevented-to-protect-innovation-and-choice-in-cloud-gaming" },
      { date: "2023-08-22", event: "Microsoft restructures deal (cloud rights to Ubisoft)", url: "https://www.gov.uk/government/news/microsoft-submits-new-deal-for-review-after-cma-confirms-original-deal-is-blocked" },
      { date: "2023-10-13", event: "CMA approves restructured deal", url: "https://www.gov.uk/government/news/new-microsoft-activision-deal-addresses-previous-cma-concerns-in-cloud-gaming" },
    ],
    nextSteps: [],
    documents: [
      { name: "Phase 1 Decision", url: "https://www.gov.uk/cma-cases/microsoft-slash-activision-blizzard-merger-inquiry" },
      { name: "Phase 2 Final Report (Apr 2023)", url: "https://www.gov.uk/government/news/microsoft-activision-deal-prevented-to-protect-innovation-and-choice-in-cloud-gaming" },
      { name: "Restructured Deal Approval (Oct 2023)", url: "https://www.gov.uk/cma-cases/microsoft-slash-activision-blizzard-ex-cloud-streaming-rights-merger-inquiry" },
    ],
    notes:
      "High-profile example of a competition authority successfully forcing deal restructuring. The CMA required Microsoft to divest cloud streaming rights for Activision games to Ubisoft for 15 years.",
  },
  {
    id: 8,
    company: "Amazon",
    title: "FTC v. Amazon — Online Marketplace Monopoly",
    jurisdiction: "United States",
    authority: "Federal Trade Commission (FTC)",
    status: "Litigation",
    openedDate: "2023-09-26",
    summary:
      "The FTC and 17 state AGs allege Amazon illegally maintains monopoly power in the online superstore market and online marketplace services market through anticompetitive practices.",
    theoriesOfHarm: [
      "Anti-discounting strategy punishing sellers who offer lower prices elsewhere",
      "Pay-to-play advertising (Project Nessie) degrading search quality",
      "Coercive bundling of Fulfillment by Amazon (FBA) for Buy Box access",
      "Degradation of seller and consumer experience to extract rents",
    ],
    keyDates: [
      { date: "2023-09-26", event: "FTC and 17 states file complaint (W.D. Wash.)", url: "https://www.ftc.gov/news-events/news/press-releases/2023/09/ftc-sues-amazon-illegally-maintaining-monopoly-power" },
      { date: "2024-10-00", event: "Motion to dismiss largely denied" },
    ],
    nextSteps: [
      {
        description: "Discovery ongoing",
        date: null,
      },
      {
        description: "Trial date expected to be set in 2025",
        date: null,
      },
    ],
    documents: [{ name: "Complaint (Sep 2023) — partially redacted", url: "https://www.ftc.gov/legal-library/browse/cases-proceedings/1910129-1910130-amazoncom-inc-amazon-ecommerce" }],
    notes:
      "Key allegations center on Amazon's pricing algorithms and the coercive dynamics of its marketplace ecosystem. Significant portions of the complaint were initially redacted.",
  },
  {
    id: 9,
    company: "Google",
    title: "EU Commission — Google Android",
    jurisdiction: "European Union",
    authority: "European Commission (DG Competition)",
    status: "Closed",
    openedDate: "2015-04-15",
    summary:
      "The Commission found Google imposed illegal restrictions on Android device manufacturers and mobile network operators to cement the dominance of its search engine.",
    theoriesOfHarm: [
      "Tying of Google Search and Chrome with the Play Store",
      "Anti-fragmentation agreements preventing Android forks",
      "Revenue sharing for exclusive pre-installation of Google Search",
    ],
    keyDates: [
      { date: "2015-04-15", event: "Formal investigation opened" },
      { date: "2018-07-18", event: "Commission issues €4.34B fine", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_18_4581" },
      { date: "2022-09-14", event: "General Court reduces fine to €4.125B" },
      { date: "2024-09-00", event: "CJEU appeal proceedings" },
    ],
    nextSteps: [],
    documents: [
      { name: "Commission Decision (Jul 2018)", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_18_4581" },
      { name: "General Court Judgment (Sep 2022)" },
    ],
    notes:
      "The largest EU antitrust fine at the time. Google changed its Android licensing model in Europe to offer a paid license for devices without Google apps.",
  },
  {
    id: 10,
    company: "Apple",
    title: "EU DMA — Apple Compliance (App Store & Browser)",
    jurisdiction: "European Union",
    authority: "European Commission (DMA Enforcement)",
    status: "Investigation",
    openedDate: "2024-06-24",
    summary:
      "The Commission opened proceedings to assess whether Apple's App Store rules and Safari browser choice screen comply with obligations under the Digital Markets Act.",
    theoriesOfHarm: [
      "Non-compliant App Store alternative distribution terms (Core Technology Fee)",
      "Ineffective browser choice screen design",
      "Restrictions on app developers steering users to alternative payment",
    ],
    keyDates: [
      { date: "2024-03-07", event: "DMA obligations take effect for Apple", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_24_1689" },
      { date: "2024-06-24", event: "Commission opens non-compliance proceedings", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_24_3433" },
      { date: "2024-11-00", event: "Preliminary findings on App Store steering rules" },
    ],
    nextSteps: [
      {
        description: "Final determination on App Store DMA compliance",
        date: "2025-06-01",
      },
      {
        description: "Potential fines up to 10% of global turnover for non-compliance",
        date: null,
      },
    ],
    documents: [{ name: "Preliminary Findings (Nov 2024)", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_24_3433" }],
    notes:
      "First major enforcement action under the Digital Markets Act. Apple has modified its terms several times in response to DMA requirements but the Commission considers them insufficient.",
  },
  {
    id: 11,
    company: "Google",
    title: "Japan JFTC — Google Search & Ads Investigation",
    jurisdiction: "Japan",
    authority: "Japan Fair Trade Commission (JFTC)",
    status: "Investigation",
    openedDate: "2023-10-23",
    summary:
      "The JFTC is investigating Google's practices in search and digital advertising, including potential abuse of superior bargaining position and restrictions on competition.",
    theoriesOfHarm: [
      "Abuse of superior bargaining position over advertisers",
      "Restrictions on ad tech competitors",
      "Self-preferencing in search results",
    ],
    keyDates: [
      { date: "2023-10-23", event: "JFTC confirms investigation", url: "https://www.jftc.go.jp/en/pressreleases/yearly-2023/October/231023.html" },
      { date: "2024-04-00", event: "JFTC issues report on digital advertising" },
    ],
    nextSteps: [
      {
        description: "JFTC decision on whether to issue cease-and-desist order",
        date: null,
      },
    ],
    documents: [{ name: "JFTC Digital Advertising Report (2024)" }],
    notes:
      "Part of a broader trend of Asian competition authorities scrutinizing big tech. South Korea's KFTC has pursued similar investigations.",
  },
  {
    id: 12,
    company: "Meta",
    title: "EU Commission — Meta Marketplace (Classified Ads)",
    jurisdiction: "European Union",
    authority: "European Commission (DG Competition)",
    status: "Formal Charges",
    openedDate: "2019-06-00",
    summary:
      "The Commission charged Meta with distorting competition in online classified ads by tying Facebook Marketplace to Facebook's social network and using data from competing advertisers.",
    theoriesOfHarm: [
      "Tying Facebook Marketplace to Facebook social network",
      "Unfair use of advertising data from competing classified ad providers",
      "Leveraging social network dominance into classified ads market",
    ],
    keyDates: [
      { date: "2019-06-01", event: "Formal investigation opened" },
      { date: "2022-12-19", event: "Statement of Objections issued", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_22_7728" },
      { date: "2024-11-00", event: "Commission issues preliminary decision", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_24_5801" },
    ],
    nextSteps: [
      {
        description: "Final Commission decision expected",
        date: "2025-06-01",
      },
    ],
    documents: [{ name: "Statement of Objections (Dec 2022)", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_22_7728" }],
    notes:
      "Focus is on data advantages and tying in a market (classified ads) where Meta competes with entrenched players like eBay Kleinanzeigen and others.",
  },
];

// Helper: all unique companies
export const companies = [...new Set(cases.map((c) => c.company))].sort();

// Helper: all unique jurisdictions
export const jurisdictions = [
  ...new Set(cases.map((c) => c.jurisdiction)),
].sort();

// Helper: all possible statuses in pipeline order
export const statuses = [
  "Investigation",
  "Preliminary Findings",
  "Formal Charges",
  "Litigation",
  "Remedies/Settlement",
  "Appeal",
  "Closed",
];

export default cases;
