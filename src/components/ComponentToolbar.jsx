import { useState } from "react";
import { components } from "../constants/components";

const ComponentToolbar = ({ handleDragStart }) => {
  const [toggleShow, setToggleShow] = useState(true);

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className="w-48 bg-slate-50 border-r border-gray-200 p-4 fixed top-0 left-0 h-full transition-transform duration-300"
        style={{
          zIndex: 100,
          transform: toggleShow ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Toggle Button */}
      <button
        onClick={() => setToggleShow((curr) => !curr)}
        className="bg-blue-900 text-white cursor-pointer w-8 h-8 shadow-lg absolute left-48 rounded top-0 transition-all duration-300"
        
      >
        <i className={`fa-solid ${toggleShow ? "fa-eye-slash" : "fa-eye"}`}></i>
      </button>
        <h2 className="font-bold mb-2">Elements Toolbar</h2>
        <div className="space-y-1">
          {components.map((component) => (
            <div
              key={component.elementType}
              draggable
              onDragStart={(e) => handleDragStart(e, component.elementType)}
              className="flex items-center justify-start gap-3 px-2 bg-white border border-gray-300 rounded cursor-move hover:bg-gray-50"
            >
              <i className={component.icon}></i>
              {component.label}
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default ComponentToolbar;
