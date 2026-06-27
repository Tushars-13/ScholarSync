function AcademicStatCard({ title, value, status, icon }) {
  return (
    <div className="academic-card">

      <div className="academic-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <div className="academic-value">
        {value}
      </div>

      <p className="academic-status">
        {status}
      </p>

    </div>
  );
}

export default AcademicStatCard;