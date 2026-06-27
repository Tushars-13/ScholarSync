function CircularProgress({
  value,
  max,
  label,
  status,
}) {
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
            r="60"
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