import { Filter } from "lucide-react";

function FilterBar({
  companies,
  jurisdictions,
  allStatuses,
  selectedCompany,
  selectedJurisdiction,
  selectedStatus,
  onCompanyChange,
  onJurisdictionChange,
  onStatusChange,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-bar-icon">
        <Filter size={16} />
        <span>Filters</span>
      </div>

      <div className="filter-group">
        <label htmlFor="company-filter">Company</label>
        <select
          id="company-filter"
          value={selectedCompany}
          onChange={(e) => onCompanyChange(e.target.value)}
        >
          <option value="All">All Companies</option>
          {companies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="jurisdiction-filter">Jurisdiction</label>
        <select
          id="jurisdiction-filter"
          value={selectedJurisdiction}
          onChange={(e) => onJurisdictionChange(e.target.value)}
        >
          <option value="All">All Jurisdictions</option>
          {jurisdictions.map((j) => (
            <option key={j} value={j}>
              {j}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="status-filter">Status</label>
        <select
          id="status-filter"
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          <option value="All">All Statuses</option>
          {allStatuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
