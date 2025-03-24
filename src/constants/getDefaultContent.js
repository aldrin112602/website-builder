// Get default content based on element type
const getDefaultContent = (elementType) => {
  switch (elementType) {
    case "heading":
      return "Heading";
    case "text":
      return "Text";
      case "link":
        return "Link";
    case "paragraph":
      return "Paragraph";
    case "button":
      return "Button";
    case "image":
      return "";
    case "container":
      return "";
    case "video":
      return "";
    default:
      return "";
  }
};

export { getDefaultContent };
