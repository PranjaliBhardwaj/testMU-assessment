import { Code, Database, Shuffle, Shield, Wrench } from 'lucide-react';

export default function Sidebar() {
  const categories = [
    { icon: Code, label: 'Code Tidy' },
    { icon: Database, label: 'Data Format' },
    { icon: Shuffle, label: 'Random Data' },
    { icon: Shield, label: 'Security Tools' },
    { icon: Wrench, label: 'Utils' },
  ];

  return (
    <aside className="w-80 bg-white border-r border-gray-200 p-6">
      <h2 className="text-xl font-bold mb-6">CATEGORIES</h2>
      <ul className="space-y-4">
        {categories.map(({ icon: Icon, label }) => (
          <li key={label}>
            <button className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors">
              <Icon size={20} />
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-12 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-300 rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4">
          Test Your Web Or Mobile Apps On 3000+ Browsers
        </h3>
        <button className="bg-white text-black px-6 py-2 rounded border-2 border-black font-medium hover:bg-gray-50 transition-colors">
          Signup for free
        </button>
        <div className="mt-6">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23f0f0f0' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%23999' text-anchor='middle' dy='.3em'%3EDashboard Preview%3C/text%3E%3C/svg%3E"
            alt="Dashboard preview"
            className="w-full rounded"
          />
        </div>
      </div>
    </aside>
  );
}
