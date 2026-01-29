import { useState, useEffect } from 'react';
import { Copy, RefreshCw, Upload, Link, FileText, Download } from 'lucide-react';

export default function Converter() {
  const [csvInput, setCsvInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');
  const [autoUpdate, setAutoUpdate] = useState(true);

  const convertCsvToJson = (csv: string) => {
    if (!csv.trim()) {
      setJsonOutput('');
      return;
    }

    try {
      const lines = csv.trim().split('\n');
      if (lines.length < 2) {
        setJsonOutput('');
        return;
      }

      const headers = lines[0].split(',').map(h => h.trim());
      const result = [];

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim());
        const obj: Record<string, string> = {};

        headers.forEach((header, index) => {
          obj[header] = values[index] || '';
        });

        result.push(obj);
      }

      setJsonOutput(JSON.stringify({ result }, null, 2));
    } catch (error) {
      setJsonOutput('Error parsing CSV');
    }
  };

  useEffect(() => {
    if (autoUpdate) {
      convertCsvToJson(csvInput);
    }
  }, [csvInput, autoUpdate]);

  const handleConvert = () => {
    convertCsvToJson(csvInput);
  };

  const handleCopyInput = () => {
    navigator.clipboard.writeText(csvInput);
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(jsonOutput);
  };

  const handleDownloadOutput = () => {
    const blob = new Blob([jsonOutput], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleRefreshInput = () => {
    setCsvInput('');
    setJsonOutput('');
  };

  return (
    <div className="flex-1 bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">CSV to JSON Converter</h1>
          <p className="text-gray-600 text-lg">
            This free tool allows you to convert CSV to JSON online and instantly. Upload, paste, or enter CSV data, and
            you'll get a structured JSON output in seconds.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <span>TestMu AI</span>
            <span>&gt;</span>
            <span>Free Tools</span>
            <span>&gt;</span>
            <span className="font-semibold text-black">CSV to JSON</span>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Enter Value</h2>
            <div className="relative">
              <textarea
                value={csvInput}
                onChange={(e) => setCsvInput(e.target.value)}
                placeholder="Enter CSV here"
                className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute right-4 top-4 flex flex-col gap-2">
                <button
                  onClick={handleCopyInput}
                  className="p-2 hover:bg-gray-100 rounded"
                  title="Copy"
                >
                  <Copy size={18} />
                </button>
                <button
                  onClick={handleRefreshInput}
                  className="p-2 hover:bg-gray-100 rounded"
                  title="Refresh"
                >
                  <RefreshCw size={18} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded" title="Upload">
                  <Upload size={18} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded" title="Link">
                  <Link size={18} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded" title="File">
                  <FileText size={18} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded" title="Download">
                  <Download size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={autoUpdate}
                onChange={(e) => setAutoUpdate(e.target.checked)}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Auto Update</span>
            </label>
            <button
              onClick={handleConvert}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Convert to JSON
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Output</h2>
            <div className="relative">
              <textarea
                value={jsonOutput}
                readOnly
                className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none bg-gray-50 focus:outline-none font-mono text-sm"
              />
              <div className="absolute right-4 top-4 flex flex-col gap-2">
                <button
                  onClick={handleCopyOutput}
                  className="p-2 hover:bg-gray-100 rounded"
                  title="Copy"
                >
                  <Copy size={18} />
                </button>
                <button
                  onClick={handleDownloadOutput}
                  className="p-2 hover:bg-gray-100 rounded"
                  title="Download"
                >
                  <Download size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
