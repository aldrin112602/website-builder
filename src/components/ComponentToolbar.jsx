import { components } from "../constant/components";

{/* Left sidebar - Component Toolbar */}
const ComponentToolbar = ({ handleDragStart }) => {
  return (
    <div className="w-48 bg-gray-100 border-r border-gray-200 p-4">
      <h2 className="font-bold mb-4">Components</h2>
      <div className="space-y-2">
        {components.map((component) => (
          <div
            key={component.type}
            draggable
            onDragStart={(e) => handleDragStart(e, component.type)}
            className="p-2 bg-white border border-gray-300 rounded cursor-move hover:bg-gray-50"
          >
            {component.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentToolbar;
