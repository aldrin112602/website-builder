import React from "react";

const Image = ({ selectedElement, setElements, setSelectedElement }) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <input
          type="text"
          value={selectedElement.src || ""}
          onChange={(e) => {
            const src = e.target.value;
            const updatedElements = elements.map((el) =>
              el.id === selectedElement.id ? { ...el, src } : el
            );
            setElements(updatedElements);
            setSelectedElement({ ...selectedElement, src });
          }}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter image URL"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Alt Text</label>
        <input
          type="text"
          value={selectedElement.alt || ""}
          onChange={(e) => {
            const alt = e.target.value;
            const updatedElements = elements.map((el) =>
              el.id === selectedElement.id ? { ...el, alt } : el
            );
            setElements(updatedElements);
            setSelectedElement({ ...selectedElement, alt });
          }}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter alt text"
        />
      </div>
    </>
  );
};

export default Image;
