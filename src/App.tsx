import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Converter from './components/Converter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20 flex">
        <Sidebar />
        <Converter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
