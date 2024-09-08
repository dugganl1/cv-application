import { useState } from "react";
import "./App.css";
import FormSection from "./components/FormSection";
import CVPreview from "./components/CVPreview";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    location: "",
  });

  const personalFields = [
    { name: "name", type: "text", placeholder: "Full Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "phone", type: "tel", placeholder: "Phone Number" },
  ];

  const educationFields = [
    { name: "school", type: "text", placeholder: "School Name" },
    { name: "degree", type: "text", placeholder: "Degree" },
    { name: "location", type: "text", placeholder: "Location" },
  ];

  return (
    <div className="app-container">
      <div className="edit-panel">
        <FormSection
          title="Personal Details"
          fields={personalFields}
          data={personalDetails}
          setData={setPersonalDetails}
        />
        <FormSection
          title="Education"
          fields={educationFields}
          data={education}
          setData={setEducation}
        />
      </div>
      <div className="preview-panel">
        <CVPreview
          personalDetails={personalDetails}
          education={education}
        />
      </div>
    </div>
  );
}

export default App;
