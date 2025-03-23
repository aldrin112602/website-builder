// Render different property fields based on element type
const RenderTypeSpecificFields = ({
  selectedElement,
  elements,
  setElements,
  setSelectedElement,
}) => {
  const { type } = selectedElement;

  switch (type) {
    case "image":
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

    case "link":
      return (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Link URL</label>
            <input
              type="text"
              value={selectedElement.href || ""}
              onChange={(e) => {
                const href = e.target.value;
                const updatedElements = elements.map((el) =>
                  el.id === selectedElement.id ? { ...el, href } : el
                );
                setElements(updatedElements);
                setSelectedElement({ ...selectedElement, href });
              }}
              className="w-full p-2 border border-gray-300 rounded bg-white"
              placeholder="Enter Link URL"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Select Target
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded bg-white"
              onChange={(e) => {
                const target = e.target.value;
                const updatedElements = elements.map((el) =>
                  el.id === selectedElement.id ? { ...el, target } : el
                );
                setElements(updatedElements);
                setSelectedElement({ ...selectedElement, target });
              }}
            >
              <option
                selected={(selectedElement.target || "") === "_blank"}
                value="_blank"
              >
                _blank
              </option>
              <option
                selected={(selectedElement.target || "") === "_self"}
                value="_self"
              >
                _self
              </option>
              <option
                selected={(selectedElement.target || "") === "_parent"}
                value="_parent"
              >
                _parent
              </option>
              <option
                selected={(selectedElement.target || "") === "_top"}
                value="_top"
              >
                _top
              </option>
            </select>
          </div>
        </>
      );

    case "video":
      return (
        <>
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
        </>
      );
    default:
      return null;
  }
};

export default RenderTypeSpecificFields;
