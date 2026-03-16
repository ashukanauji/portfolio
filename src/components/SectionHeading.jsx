const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-10">
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>
);

export default SectionHeading;
