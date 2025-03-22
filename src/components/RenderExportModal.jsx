// Render HTML export modal
const RenderExportModal = ({
  showExportModal,
  setShowExportModal,
  htmlOutput,
}) => {
  if (!showExportModal) return null;

  // Copy HTML to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlOutput);
    alert("HTML copied to clipboard!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-screen overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold">Export HTML with Tailwind CSS</h3>
          <button
            onClick={() => setShowExportModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="p-4 flex-1 overflow-auto">
          <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm h-64">
            {htmlOutput}
          </pre>
        </div>
        <div className="p-4 border-t flex justify-end gap-2">
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Copy to Clipboard
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
