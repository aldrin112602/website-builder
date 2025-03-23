import { useRef, useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

// Render HTML export modal
const RenderExportModal = ({
  showExportModal,
  setShowExportModal,
  htmlOutput,
}) => {
  if (!showExportModal) return null;
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = hljs.highlight(htmlOutput, {
        language: "html",
      }).value;
    }
  }, [htmlOutput]);

  // Copy HTML to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 z-200">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-screen overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-slate-300">
          <h3 className="text-lg font-bold">Export HTML with Tailwind CSS</h3>
          <button
            onClick={() => setShowExportModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="p-4 flex-1 overflow-auto">
          <pre className="bg-gray-50 p-4 rounded overflow-auto text-sm h-64">
            <code ref={codeRef} className="language-html"></code>
          </pre>
        </div>
        <div className="p-4 border-t flex justify-end gap-2">
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {copied ? "Code Copied to Clipboard!" : "Copy to Clipboard"}
          </button>
          <button
            onClick={() => setShowExportModal(false)}
            className="border border-gray-300 py-2 px-4 rounded hover:bg-gray-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderExportModal;
