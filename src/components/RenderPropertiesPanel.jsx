import RenderTypeSpecificFields from "./RenderTypeSpecificFields";
import { useState } from "react";
// Properties panel for editing selected element
const RenderPropertiesPanel = ({
  handleExport,
  selectedElement,
  elements,
  setElements,
  setSelectedElement,
}) => {
  const [toggleShow, setToggleShow] = useState(true);

  if (!selectedElement)
    return (
      <div
        className="w-80 bg-slate-50 border-r border-gray-200 p-3 fixed top-0 right-0 h-full transition-transform duration-300"
        style={{
          zIndex: 100,
          transform: toggleShow ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div>
          {/* Toggle Button */}
          <button
            onClick={() => setToggleShow((curr) => !curr)}
            className="bg-blue-900 text-white cursor-pointer w-8 h-8 shadow-lg absolute right-80 rounded top-0 transition-all duration-300"
          >
            <i
              className={`fa-solid ${toggleShow ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </button>
          <p className="mb-4 text-center">
            Select an element to edit its properties
          </p>
          <button
            onClick={handleExport}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Export HTML
          </button>
        </div>
      </div>
    );

  return (
    <div
      className="w-80 bg-slate-50 border-r border-gray-200 p-3 fixed top-0 right-0 h-full transition-transform duration-300"
      style={{
        zIndex: 100,
        transform: toggleShow ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <div>
        <button
          onClick={() => setToggleShow((curr) => !curr)}
          className="bg-blue-900 text-white cursor-pointer w-8 h-8 shadow-lg absolute right-80 rounded top-0 transition-all duration-300"
        >
          <i
            className={`fa-solid ${toggleShow ? "fa-eye-slash" : "fa-eye"}`}
          ></i>
        </button>
        <h3 className="text-lg font-medium mb-4">Properties</h3>

        {!["image", "video"].includes(selectedElement.type) && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Content</label>
            <input
              type="text"
              value={selectedElement.content || ""}
              onChange={(e) => {
                const content = e.target.value;
                const updatedElements = elements.map((el) =>
                  el.id === selectedElement.id ? { ...el, content } : el
                );
                setElements(updatedElements);
                setSelectedElement({ ...selectedElement, content });
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        )}

        <RenderTypeSpecificFields
          selectedElement={selectedElement}
          elements={elements}
          setElements={setElements}
          setSelectedElement={setSelectedElement}
        />

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">X Position</label>
            <input
              type="number"
              value={Math.round(selectedElement.x)}
              onChange={(e) => {
                const x = parseInt(e.target.value);
                const updatedElements = elements.map((el) =>
                  el.id === selectedElement.id ? { ...el, x } : el
                );
                setElements(updatedElements);
                setSelectedElement({ ...selectedElement, x });
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Y Position</label>
            <input
              type="number"
              value={Math.round(selectedElement.y)}
              onChange={(e) => {
                const y = parseInt(e.target.value);
                const updatedElements = elements.map((el) =>
                  el.id === selectedElement.id ? { ...el, y } : el
                );
                setElements(updatedElements);
                setSelectedElement({ ...selectedElement, y });
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <button
          className="w-full mb-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
          onClick={() => {
            const updatedElements = elements.filter(
              (el) => el.id !== selectedElement.id
            );
            setElements(updatedElements);
            setSelectedElement(null);
          }}
        >
          Delete Element
        </button>

        <button
          onClick={handleExport}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Export HTML
        </button>
      </div>
    </div>
  );
};

export default RenderPropertiesPanel;
