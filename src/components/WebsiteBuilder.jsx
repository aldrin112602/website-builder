import React, { useState, useRef, useEffect } from "react";
import ImagePlaceholder from "../assets/image-placeholder.png";
import VideoPlaceholder from "../assets/Video-Placeholder.mp4";
import { getDefaultContent } from "../constants/getDefaultContent";
import { getDefaultStyle } from "../constants/getDefaultStyle";
import { stylesToTailwind } from "../constants/stylesToTailwind";
import { generateHtml } from "../constants/generateHtml";
import RenderExportModal from "./RenderExportModal";
import RenderPropertiesPanel from "./RenderPropertiesPanel";
import RenderElement from "./RenderElement";
import ComponentToolbar from "./ComponentToolbar";

const WebsiteBuilder = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [nextId, setNextId] = useState(1);
  const [draggingId, setDraggingId] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [htmlOutput, setHtmlOutput] = useState("");
  const [showExportModal, setShowExportModal] = useState(false);
  const canvasRef = useRef(null);

  // Handle drag start from toolbar
  const handleDragStart = (e, elementType) => {
    e.dataTransfer.setData("elementType", elementType);
  };

  // Handle drop on canvas for new elements from toolbar
  const handleDrop = (e) => {
    e.preventDefault();
    const elementType = e.dataTransfer.getData("elementType");

    // Only proceed if we have a elementType (means it was dragged from toolbar)
    if (elementType) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create new element
      const newElement = {
        id: nextId,
        elementType,
        x,
        y,
        content: getDefaultContent(elementType),
        style: getDefaultStyle(elementType),
        // Add specific properties for different element elementTypes
        ...(elementType === "image"
          ? { src: ImagePlaceholder, alt: "Placeholder image" }
          : {}),
        ...(elementType === "video" ? { src: VideoPlaceholder } : {}),
        ...(elementType === "link" ? { href: "#", target: "_self" } : {}),
      };

      setElements([...elements, newElement]);
      setNextId(nextId + 1);
    }
  };

  // Allow drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Setup mouse move and mouse up event listeners
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (draggingId !== null) {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - dragOffset.x;
        const y = e.clientY - rect.top - dragOffset.y;

        setElements((prevElements) =>
          prevElements.map((el) =>
            el.id === draggingId ? { ...el, x, y } : el
          )
        );

        if (selectedElement && selectedElement.id === draggingId) {
          setSelectedElement((prev) => ({ ...prev, x, y }));
        }
      }
    };

    const handleMouseUp = () => {
      setDraggingId(null);
    };

    if (draggingId !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingId, dragOffset, selectedElement]);

  // Handle element selection
  const handleElementClick = (e, id) => {
    e.stopPropagation();
    const element = elements.find((el) => el.id === id);
    setSelectedElement(element);
  };

  // Start dragging an existing element
  const handleElementDragStart = (e, id) => {
    e.stopPropagation();

    // Find the element
    const element = elements.find((el) => el.id === id);

    // Calculate offset from where the user clicked on the element to the top-left corner
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    setDragOffset({ x: offsetX, y: offsetY });
    setDraggingId(id);
    setSelectedElement(element);
  };

  // Handle click on canvas to deselect elements
  const handleCanvasClick = () => {
    setSelectedElement(null);
  };

  // Handle export button
  const handleExport = () => {
    const html = generateHtml(elements, stylesToTailwind);
    setHtmlOutput(html);
    setShowExportModal(true);
  };

  return (
    <div className="flex h-screen">
      {/* Left sidebar - Component Toolbar */}
      <ComponentToolbar handleDragStart={handleDragStart}/>

      {/* Center - Canvas */}
      <div
        ref={canvasRef}
        className="flex-1 bg-white overflow-auto relative w-auto"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleCanvasClick}
      >
        {elements.map((element) => (
          <RenderElement
            element={element}
            draggingId={draggingId}
            selectedElement={selectedElement}
            handleElementClick={handleElementClick}
            handleElementDragStart={handleElementDragStart}
            ImagePlaceholder={ImagePlaceholder}
            VideoPlaceholder={VideoPlaceholder}
          />
        ))}
      </div>

      {/* Right sidebar - Properties */}
      <RenderPropertiesPanel
        handleExport={handleExport}
        selectedElement={selectedElement}
        elements={elements}
        setElements={setElements}
        setSelectedElement={setSelectedElement}
      />

      {/* Export Modal */}
      <RenderExportModal
        showExportModal={showExportModal}
        setShowExportModal={setShowExportModal}
        htmlOutput={htmlOutput}
      />
    </div>
  );
};

export default WebsiteBuilder;
