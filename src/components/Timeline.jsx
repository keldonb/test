function formatDate(dateStr) {
  if (!dateStr) return "";
  const cleaned = dateStr.replace(/-00/g, "-01");
  const d = new Date(cleaned + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: dateStr.endsWith("-00") ? undefined : "numeric",
  });
}

function Timeline({ events }) {
  return (
    <div className="timeline">
      {events.map((ev, i) => {
        const isLast = i === events.length - 1;
        return (
          <div key={i} className={`timeline-item${isLast ? " timeline-item--last" : ""}`}>
            <div className="timeline-marker">
              <div className="timeline-dot" />
              {!isLast && <div className="timeline-line" />}
            </div>
            <div className="timeline-content">
              <span className="timeline-date">{formatDate(ev.date)}</span>
              <span className="timeline-event">{ev.event}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
