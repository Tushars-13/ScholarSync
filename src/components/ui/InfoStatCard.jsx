function InfoStatCard({
  title,
  value,
  status,
  icon,
}) {
  return (
    <div className="info-stat-card">

      <div className="info-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <div className="info-value">
        {value}
      </div>

      <p className="info-status">
        {status}
      </p>

    </div>
  );
}

export default InfoStatCard;