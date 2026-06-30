import CircularProgress from "./CircularProgress";

function ProgressStatCard({
  value,
  max,
  title,
  status,
}) {
  return (
    <div className="progress-stat-card">

      <CircularProgress
        value={value}
        max={max}
        label={title}
        status={status}
      />

    </div>
  );
}

export default ProgressStatCard;