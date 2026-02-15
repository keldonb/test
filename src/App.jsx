import { useState, useMemo } from "react";
import cases, { companies, jurisdictions, statuses } from "./data/cases";
import CaseCard from "./components/CaseCard";
import CaseDetail from "./components/CaseDetail";
import FilterBar from "./components/FilterBar";
import StatusPipeline from "./components/StatusPipeline";
import "./App.css";

function App() {
  const [selectedCompany, setSelectedCompany] = useState("Google");
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCase, setSelectedCase] = useState(null);

  const filtered = useMemo(() => {
    return cases.filter((c) => {
      if (selectedCompany !== "All" && c.company !== selectedCompany) return false;
      if (selectedJurisdiction !== "All" && c.jurisdiction !== selectedJurisdiction)
        return false;
      if (selectedStatus !== "All" && c.status !== selectedStatus) return false;
      return true;
    });
  }, [selectedCompany, selectedJurisdiction, selectedStatus]);

  const statusCounts = useMemo(() => {
    const counts = {};
    statuses.forEach((s) => (counts[s] = 0));
    filtered.forEach((c) => {
      if (counts[c.status] !== undefined) counts[c.status]++;
    });
    return counts;
  }, [filtered]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Antitrust Case Tracker</h1>
          <p className="header-subtitle">
            Competition &amp; antitrust proceedings worldwide
          </p>
        </div>
      </header>

      <main className="app-main">
        <FilterBar
          companies={companies}
          jurisdictions={jurisdictions}
          allStatuses={statuses}
          selectedCompany={selectedCompany}
          selectedJurisdiction={selectedJurisdiction}
          selectedStatus={selectedStatus}
          onCompanyChange={setSelectedCompany}
          onJurisdictionChange={setSelectedJurisdiction}
          onStatusChange={setSelectedStatus}
        />

        <StatusPipeline statuses={statuses} counts={statusCounts} />

        {selectedCase ? (
          <CaseDetail
            caseData={selectedCase}
            onBack={() => setSelectedCase(null)}
          />
        ) : (
          <div className="case-grid">
            {filtered.length === 0 && (
              <p className="empty-state">No cases match the current filters.</p>
            )}
            {filtered.map((c) => (
              <CaseCard
                key={c.id}
                caseData={c}
                onClick={() => setSelectedCase(c)}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>
          Data is illustrative. Dates and details should be verified against
          official sources.
        </p>
      </footer>
    </div>
  );
}

export default App;
