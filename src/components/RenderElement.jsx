// Render element based on elementType
const RenderElement = ({
  element,
  draggingId,
  selectedElement,
  handleElementClick,
  handleElementDragStart,
  ImagePlaceholder,
  VideoPlaceholder,
}) => {
  const {
    id,
    type = "text",
    elementType,
    content,
    style,
    x,
    y,
    src,
    alt,
    href,
    target,
    width,
    height,
    backgroundColor = "#999999",
    color = "#000000",
    fontSize,
  } = element;
  const elementStyle = {
    ...style,
    width,
    height,
    fontSize,
    backgroundColor: elementType === "button" ? backgroundColor : "transparent",
    color,
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

  switch (elementType) {
    case "heading":
      return <h2 {...commonProps}>{content}</h2>;
    case "input":
      return <input type={type} value={content} {...commonProps} />;
    case "textarea":
      return <textarea {...commonProps} value={content}></textarea>;
    case "text":
      return <span {...commonProps}>{content}</span>;
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
    case "link":
      return (
        <a href={href || "#"} target={target || "_self"} {...commonProps}>
          {content}
        </a>
      );
    case "container":
      return <div {...commonProps}></div>;
    case "video":
      return <video src={src || VideoPlaceholder} {...commonProps} />;
    default:
      return null;
  }
};

export default RenderElement;
