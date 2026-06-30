function CircularProgress({
  value,
  max,
  label,
  status,
}) {
  const radius = 60;

  const circumference = 2 * Math.PI * radius;

  const progress = value / max;

  const offset = circumference * (1 - progress);

  return (
    <div className="circular-progress">

      <div className="circle">

        <svg
          className="progress-ring"
          width="140"
          height="140"
        >
          <circle
            className="progress-ring-bg"
            cx="70"
            cy="70"
            r="60"
          />

          <circle
            className="progress-ring-fill"
            cx="70"
            cy="70"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>

        <div className="circle-center">
          <h2>{value}</h2>
          <p>{label}</p>
        </div>

      </div>

      <p className="circle-status">
        {status}
      </p>

    </div>
  );
}

export default CircularProgress;