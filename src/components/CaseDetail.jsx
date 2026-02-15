import {
  ArrowLeft,
  Building2,
  MapPin,
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Clock,
  StickyNote,
} from "lucide-react";
import StatusBadge from "./StatusBadge";
import Timeline from "./Timeline";

function formatDate(dateStr) {
  if (!dateStr) return "TBD";
  const cleaned = dateStr.replace(/-00/g, "-01");
  const d = new Date(cleaned + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: dateStr.endsWith("-00") ? undefined : "numeric",
  });
}

function CaseDetail({ caseData, onBack }) {
  return (
    <div className="case-detail">
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={16} />
        Back to all cases
      </button>

      <div className="detail-header">
        <div className="detail-header-top">
          <StatusBadge status={caseData.status} />
          <span className="detail-jurisdiction">
            <MapPin size={14} />
            {caseData.jurisdiction}
          </span>
        </div>
        <h2 className="detail-title">{caseData.title}</h2>
        <div className="detail-meta">
          <span>
            <Building2 size={14} />
            {caseData.company}
          </span>
          <span>{caseData.authority}</span>
          <span>
            <Calendar size={14} />
            Opened {formatDate(caseData.openedDate)}
          </span>
        </div>
      </div>

      <div className="detail-grid">
        {/* Summary */}
        <section className="detail-section detail-summary">
          <h3>
            <FileText size={16} />
            Summary
          </h3>
          <p>{caseData.summary}</p>
        </section>

        {/* Theories of Harm */}
        <section className="detail-section detail-theories">
          <h3>
            <AlertTriangle size={16} />
            Theories of Harm
          </h3>
          <ul>
            {caseData.theoriesOfHarm.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>

        {/* Timeline */}
        <section className="detail-section detail-timeline">
          <h3>
            <Clock size={16} />
            Key Dates
          </h3>
          <Timeline events={caseData.keyDates} />
        </section>

        {/* Next Steps */}
        {caseData.nextSteps.length > 0 && (
          <section className="detail-section detail-next-steps">
            <h3>
              <CheckCircle2 size={16} />
              Next Steps
            </h3>
            <ul className="next-steps-list">
              {caseData.nextSteps.map((ns, i) => (
                <li key={i} className="next-step-item">
                  <span className="next-step-desc">{ns.description}</span>
                  <span className="next-step-date">
                    {ns.date ? formatDate(ns.date) : "Date TBD"}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Documents */}
        <section className="detail-section detail-documents">
          <h3>
            <FileText size={16} />
            Key Documents
          </h3>
          <ul>
            {caseData.documents.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </section>

        {/* Notes */}
        {caseData.notes && (
          <section className="detail-section detail-notes">
            <h3>
              <StickyNote size={16} />
              Notes
            </h3>
            <p>{caseData.notes}</p>
          </section>
        )}
      </div>
    </div>
  );
}

export default CaseDetail;
