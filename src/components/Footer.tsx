export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">What is CSV?</h2>
            <p className="text-gray-700 leading-relaxed">
              CSV (Comma-Separated Values) is a widely used file format for tabular data in plain text. Each row corresponds to a
              record, with individual values separated by commas. Due to its simplicity and compatibility with multiple platforms,
              CSV is commonly used for data storage and transfer in spreadsheets, databases, and various software applications.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">What is JSON?</h2>
            <p className="text-gray-700 leading-relaxed">
              JSON (JavaScript Object Notation) is a lightweight data format designed for structured data representation and
              exchange. It uses a hierarchical structure with key-value pairs, making it highly readable and efficient for
              transmitting data between servers and web applications. Due to its flexibility and support for nested data structures,
              JSON is extensively employed in APIs, modern web development, and NoSQL databases.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">What is CSV to JSON Conversion?</h2>
            <p className="text-gray-700 leading-relaxed">
              CSV (Comma-Separated Values) is a simple, tabular format for storing structured data in plain text. JSON (JavaScript
              Object Notation), on the other hand, is a lightweight and flexible format widely used for data exchange, especially in
              APIs and modern web applications.
            </p>
          </section>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
            Start Free Testing
          </button>
        </div>
      </div>

      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">How can we help? <span className="underline">Contact Us</span></h2>
          </div>
          <div className="text-center text-8xl font-bold text-gray-700 tracking-wider">
            TestMu AI
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            © 2026 TestMu AI. All rights reserved
          </p>
          <p className="text-sm text-gray-400">
            AI-Agentic Cloud Built With ❤️ For Quality Engineering
          </p>
          <div className="flex gap-4">
            <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              f
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              X
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              in
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              ▶
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              G
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              💬
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
