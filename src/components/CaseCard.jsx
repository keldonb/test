import {
  Building2,
  MapPin,
  ChevronRight,
  Calendar,
  AlertCircle,
} from "lucide-react";
import StatusBadge from "./StatusBadge";

function formatDate(dateStr) {
  if (!dateStr) return null;
  // Handle partial dates like "2025-04-00"
  const cleaned = dateStr.replace(/-00/g, "-01");
  const d = new Date(cleaned + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: dateStr.endsWith("-00") ? undefined : "numeric",
  });
}

function CaseCard({ caseData, onClick }) {
  const nextStep = caseData.nextSteps?.[0];

  return (
    <button className="case-card" onClick={onClick}>
      <div className="case-card-header">
        <StatusBadge status={caseData.status} />
        <span className="case-card-jurisdiction">
          <MapPin size={13} />
          {caseData.jurisdiction}
        </span>
      </div>

      <h3 className="case-card-title">{caseData.title}</h3>

      <div className="case-card-meta">
        <span className="case-card-company">
          <Building2 size={14} />
          {caseData.company}
        </span>
        <span className="case-card-authority">{caseData.authority}</span>
      </div>

      <p className="case-card-summary">{caseData.summary}</p>

      {nextStep && (
        <div className="case-card-next">
          <AlertCircle size={14} />
          <span className="case-card-next-label">Next:</span>
          <span>{nextStep.description}</span>
          {nextStep.date && (
            <span className="case-card-next-date">
              <Calendar size={12} />
              {formatDate(nextStep.date)}
            </span>
          )}
        </div>
      )}

      <div className="case-card-footer">
        <span className="case-card-opened">
          <Calendar size={13} />
          Opened {formatDate(caseData.openedDate)}
        </span>
        <span className="case-card-link">
          View details <ChevronRight size={14} />
        </span>
      </div>
    </button>
  );
}

export default CaseCard;
