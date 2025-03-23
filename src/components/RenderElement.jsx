// Render element based on type
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
    type,
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
    backgroundColor = "#999",
    color = "#000",
    fontSize,
  } = element;
  const elementStyle = {
    ...style,
    width,
    height,
    fontSize,
    backgroundColor: type === "button" ? backgroundColor : "transparent",
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

  switch (type) {
    case "heading":
      return <h2 {...commonProps}>{content}</h2>;
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
