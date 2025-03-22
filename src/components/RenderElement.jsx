// Render element based on type
const RenderElement = ({
  element,
  draggingId,
  selectedElement,
  handleElementClick,
  handleElementDragStart,
  ImagePlaceholder,
}) => {
  const { id, type, content, style, x, y, src, alt } = element;
  const elementStyle = {
    ...style,
    left: `${x}px`,
    top: `${y}px`,
    cursor: draggingId === id ? "grabbing" : "grab",
    userSelect: "none",
  };

  const isSelected = selectedElement && selectedElement.id === id;

  if (isSelected) {
    elementStyle.outline = "2px solid #2563eb";
    elementStyle.zIndex = 10;
  } else {
    elementStyle.zIndex = 1;
  }

  const commonProps = {
    style: elementStyle,
    onClick: (e) => handleElementClick(e, id),
    onMouseDown: (e) => handleElementDragStart(e, id),
  };

  switch (type) {
    case "heading":
      return <h2 {...commonProps}>{content}</h2>;
    case "paragraph":
      return <p {...commonProps}>{content}</p>;
    case "button":
      return <button {...commonProps}>{content}</button>;
    case "image":
      return (
        <img
          src={src || ImagePlaceholder}
          alt={alt || "Placeholder image"}
          {...commonProps}
        />
      );
    case "container":
      return <div {...commonProps}></div>;
    case "video":
      return (
        <div {...commonProps}>
          <div className="flex items-center justify-center h-full text-gray-500">
            Video Placeholder
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default RenderElement;
