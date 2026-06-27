function PageHeader({ title, subtitle, icon }) {
  return (
    <div className="welcome">

      <h1>
        {icon} {title}
      </h1>

      <p>{subtitle}</p>

    </div>
  );
}

export default PageHeader;