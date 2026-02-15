const statusColorMap = {
  Investigation: "var(--status-investigation)",
  "Preliminary Findings": "var(--status-preliminary)",
  "Formal Charges": "var(--status-formal)",
  Litigation: "var(--status-litigation)",
  "Remedies/Settlement": "var(--status-remedies)",
  Appeal: "var(--status-appeal)",
  Closed: "var(--status-closed)",
};

function StatusBadge({ status }) {
  const color = statusColorMap[status] || "var(--color-text-secondary)";

  return (
    <span
      className="status-badge"
      style={{
        "--badge-color": color,
      }}
    >
      <span className="status-badge-dot" />
      {status}
    </span>
  );
}

export default StatusBadge;
