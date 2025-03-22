// Get default content based on element type
const getDefaultContent = (type) => {
  switch (type) {
    case "heading":
      return "Lorem ipsum dolor sit amet";
    case "text":
      return "Lorem ipsum dolor sit amet";
    case "paragraph":
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    case "button":
      return "Lorem ipsum dolor sit amet";
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
