import React from "react";

const Input = ({ selectedElement, setElements, setSelectedElement }) => {
  const inputTypes = [
    "text",
    "password",
    "email",
    "number",
    "tel",
    "url",
    "search",
    "date",
    "datetime-local",
    "month",
    "time",
    "week",
    "color",
    "file",
    "checkbox",
    "radio",
    "range",
    "hidden",
    "submit",
    "reset",
    "button",
  ];

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Type</label>
        <select
          className="w-full p-2 border border-gray-300 rounded bg-white"
          value={selectedElement.type || "text"}
          onChange={(e) => {
            const type = e.target.value;
            setElements((prevElements) =>
              prevElements.map((el) =>
                el.id === selectedElement.id ? { ...el, type } : el
              )
            );
            setSelectedElement((prev) => ({ ...prev, type }));
          }}
        >
          {inputTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
