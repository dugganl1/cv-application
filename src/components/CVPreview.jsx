function CVPreview({ personalDetails, education }) {
  return (
    <div className="cv-preview">
      <h1>{personalDetails.name || "Your Name"}</h1>
      <div className="contact-info">
        <span>{personalDetails.email || "your.email@example.com"}</span>
        <span>{personalDetails.phone || "123-456-7890"}</span>
      </div>
      <h2>Education</h2>
      <div className="education-info">
        <h3>{education.school || "School Name"}</h3>
        <p>{education.degree || "Degree"}</p>
        <p>{education.location || "Location"}</p>
      </div>
    </div>
  );
}

export default CVPreview;
