const statusColorMap = {
  Investigation: "var(--status-investigation)",
  "Preliminary Findings": "var(--status-preliminary)",
  "Formal Charges": "var(--status-formal)",
  Litigation: "var(--status-litigation)",
  "Remedies/Settlement": "var(--status-remedies)",
  Appeal: "var(--status-appeal)",
  Closed: "var(--status-closed)",
};

function StatusPipeline({ statuses, counts }) {
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <div className="pipeline">
      <div className="pipeline-header">
        <span className="pipeline-title">Case Pipeline</span>
        <span className="pipeline-total">{total} case{total !== 1 ? "s" : ""}</span>
      </div>
      <div className="pipeline-stages">
        {statuses.map((s) => (
          <div key={s} className="pipeline-stage">
            <div
              className="pipeline-dot"
              style={{ backgroundColor: statusColorMap[s] }}
            />
            <span className="pipeline-label">{s}</span>
            <span
              className="pipeline-count"
              style={{ color: statusColorMap[s] }}
            >
              {counts[s]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusPipeline;
