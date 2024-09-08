import React, { useState, useCallback } from "react";

const FormSection = React.memo(({ title, fields, data, setData }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    [setData]
  );

  return (
    <div className="form-section">
      <h2 onClick={toggleOpen}>
        {title} {isOpen ? "▼" : "▶"}
      </h2>
      {isOpen && (
        <div className="form-section-content">
          {fields.map(({ name, type, placeholder }) => (
            <input
              key={name}
              type={type}
              name={name}
              value={data[name] || ""}
              onChange={handleChange}
              placeholder={placeholder}
            />
          ))}
        </div>
      )}
    </div>
  );
});

FormSection.displayName = "FormSection";

export default FormSection;
