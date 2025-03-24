// Get default style based on element type
const getDefaultStyle = (elementType) => {
  const baseStyle = { position: "absolute" };

  switch (elementType) {
    case "heading":
      return {
        ...baseStyle,
        fontSize: "24px",
        fontWeight: "bold",
        color: "#111827",
      };
      case "input":
        return {
          ...baseStyle,
          color: "#374151",
          fontSize: "16px",
          padding: "8px",
          border: "1px solid #9ca3af",
          borderRadius: "4px",
        };
        case "textarea":
          return {
            ...baseStyle,
            color: "#374151",
            fontSize: "16px",
            padding: "8px",
            border: "1px solid #9ca3af",
            borderRadius: "4px",
          };
    case "paragraph":
      return {
        ...baseStyle,
        color: "#374151",
        fontSize: "16px",
      };
      case "link":
        return {
          ...baseStyle,
          color: "#374151",
          fontSize: "16px",
        };
    case "button":
      return {
        ...baseStyle,
        padding: "8px 16px",
        backgroundColor: "#3b82f6",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      };
    case "image":
      return {
        ...baseStyle,
        width: "200px",
        height: "150px",
      };
    case "container":
      return {
        ...baseStyle,
        width: "300px",
        height: "200px",
        border: "1px dashed #9ca3af",
        backgroundColor: "#f3f4f6",
      };
    case "video":
      return {
        ...baseStyle,
        width: "320px",
        height: "240px",
        backgroundColor: "#d1d5db",
      };
    default:
      return baseStyle;
  }
};

export { getDefaultStyle };
