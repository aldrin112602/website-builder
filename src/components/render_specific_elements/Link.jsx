import React from "react";

const Link = ({ selectedElement, setElements, setSelectedElement }) => {
  const targetValues = ["_blank", "_self", "_parent", "_top"];

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Link URL</label>
        <input
          type="text"
          value={selectedElement.href || ""}
          onChange={(e) => {
            const href = e.target.value;
            setElements((prevElements) =>
              prevElements.map((el) =>
                el.id === selectedElement.id ? { ...el, href } : el
              )
            );
            setSelectedElement((prev) => ({ ...prev, href }));
          }}
          className="w-full p-2 border border-gray-300 rounded bg-white"
          placeholder="Enter Link URL"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Target</label>
        <select
          className="w-full p-2 border border-gray-300 rounded bg-white"
          value={selectedElement.target || "_blank"}
          onChange={(e) => {
            const target = e.target.value;
            setElements((prevElements) =>
              prevElements.map((el) =>
                el.id === selectedElement.id ? { ...el, target } : el
              )
            );
            setSelectedElement((prev) => ({ ...prev, target }));
          }}
        >
          {targetValues.map((target) => (
            <option key={target} value={target}>
              {target}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Link;
