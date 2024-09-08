import { useState } from "react";

function PersonalDetails({ personalDetails, setPersonalDetails }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="personal-details">
      <h2 onClick={() => setIsOpen(!isOpen)}>Personal Details {isOpen ? "▼" : "▶"}</h2>
      {isOpen && (
        <div className="personal-details-content">
          <input
            type="text"
            name="name"
            value={personalDetails.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={personalDetails.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            value={personalDetails.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>
      )}
    </div>
  );
}

export default PersonalDetails;
