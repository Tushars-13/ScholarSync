function StatCard({ icon, title, value }) {
  return (
    <div className="card">

      <div className="card-icon">
        {icon}
      </div>

      <p className="value">
        {value}
      </p>

      <h3 className="card-title">
        {title}
      </h3>

    </div>
  );
}

export default StatCard;