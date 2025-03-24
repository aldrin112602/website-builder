// Convert element style to Tailwind classes

const stylesToTailwind = (elementType, style) => {
  // Base positioning classes
  let classes = [];

  // Element type specific classes
  switch (elementType) {
    case "heading":
      classes.push("font-bold text-2xl text-gray-900");
      break;
    case "paragraph":
      classes.push("text-gray-700 text-base");
      break;
    case "button":
      classes.push(
        "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      );
      break;
    case "image":
      classes.push("");
      break;
    case "container":
      classes.push("border border-gray-300 bg-gray-50");
      break;
      case "input":
        classes.push("border border-slate-100 px-3 py-2 rounded");
        break;
        case "textarea":
          classes.push("border border-slate-100 px-3 py-2 rounded");
          break;
    case "video":
      classes.push("bg-gray-300");
      break;
  }

  // Width and height
  if (style.width) {
    if (parseInt(style.width) <= 100) classes.push("w-24");
    else if (parseInt(style.width) <= 200) classes.push("w-48");
    else if (parseInt(style.width) <= 300) classes.push("w-64");
    else if (parseInt(style.width) <= 400) classes.push("w-96");
    else classes.push("w-full");
  }

  if (style.height) {
    if (parseInt(style.height) <= 100) classes.push("h-24");
    else if (parseInt(style.height) <= 200) classes.push("h-48");
    else if (parseInt(style.height) <= 300) classes.push("h-64");
    else classes.push("h-auto");
  }

  return classes.join(" ");
};

export { stylesToTailwind };
