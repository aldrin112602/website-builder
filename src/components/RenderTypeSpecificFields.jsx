import Image from "./render_specific_elements/Image";
import Link from "./render_specific_elements/Link";
import Video from "./render_specific_elements/Video";
import Input from "./render_specific_elements/Input";

// Render different property fields based on element type
const RenderTypeSpecificFields = ({
  selectedElement,
  elements,
  setElements,
  setSelectedElement,
}) => {
  const { elementType } = selectedElement;

  switch (elementType) {
    case "input":
      return (
        <Input
          setSelectedElement={setSelectedElement}
          setElements={setElements}
          selectedElement={selectedElement}
        />
      );
    case "image":
      return (
        <Image
          setSelectedElement={setSelectedElement}
          setElements={setElements}
          selectedElement={selectedElement}
        />
      );

    case "link":
      return (
        <Link
          setSelectedElement={setSelectedElement}
          setElements={setElements}
          selectedElement={selectedElement}
        />
      );

    case "video":
      return (
        <Video
          setSelectedElement={setSelectedElement}
          setElements={setElements}
          selectedElement={selectedElement}
        />
      );
    default:
      return null;
  }
};

export default RenderTypeSpecificFields;
