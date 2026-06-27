function InfoPanel({ icon, title, children }) {
  return (
    <div className="panel">

      <h2>
        {icon} {title}
      </h2>

      {children}

    </div>
  );
}

export default InfoPanel;