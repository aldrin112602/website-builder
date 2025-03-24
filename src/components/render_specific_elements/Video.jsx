import React from "react";

const Video = ({ selectedElement, setElements, setSelectedElement }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Video URL</label>
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
          className="w-full p-2 border border-gray-300 rounded bg-white"
          placeholder="Enter video URL"
        />
      </div>
    </div>
  );
};

export default Video;
