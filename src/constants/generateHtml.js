
// Generate HTML output with Tailwind classes
const generateHtml = (elements, stylesToTailwind) => {
  // Sort elements by position to maintain visual hierarchy
  const sortedElements = [...elements].sort((a, b) => {
    if (a.y === b.y) return a.x - b.x;
    return a.y - b.y;
  });

  // Create a container div
  let html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n';
  html += '  <meta charset="UTF-8">\n';
  html +=
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
  html += "  <title>Generated Website</title>\n";
  html += '  <script src="https://cdn.tailwindcss.com"></script>\n';
  html += '</head>\n<body class="min-h-screen p-4">\n';
  html += '  <div class="container mx-auto relative min-h-screen">\n';

  // Add each element
  sortedElements.forEach((element) => {
    const { type, content, x, y, style, src, alt, href, target } = element;
    const positionStyle = `style="position: absolute; left: ${x}px; top: ${y}px;"`;
    const tailwindClasses = stylesToTailwind(type, style);

    switch (type) {
      case "heading":
        html += `    <h2 class="${tailwindClasses}" ${positionStyle}>${content}</h2>\n`;
        break;
        case "link":
          html += `    <a href="${href}" target="${target}" class="${tailwindClasses} underline" ${positionStyle}>${content}</a>\n`;
          break;
      case "paragraph":
        html += `    <p class="${tailwindClasses}" ${positionStyle}>${content}</p>\n`;
        break;
      case "button":
        html += `    <button class="${tailwindClasses}" ${positionStyle}>${content}</button>\n`;
        break;
      case "image":
        html += `    <img src="${src}" alt="${alt}" class="${tailwindClasses}" ${positionStyle}>\n`;
        break;
      case "container":
        html += `    <div class="${tailwindClasses}" ${positionStyle}></div>\n`;
        break;
      case "video":
        html += `    <video src="${src}" class="${tailwindClasses}" ${positionStyle}>\n`;
        break;
    }
  });

  html += "  </div>\n</body>\n</html>";

  return html;
};

export { generateHtml };
