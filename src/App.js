import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Heading';

function App() {
  return (
    <main className="flex flex-col justify-between bg-white dark:bg-gray-900 min-h-screen">
      <Header />
      <div className="container mx-auto px-4">
        <div className="place-items-center mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {/* Example card */}
          <Card number="1" />
          <Card number="2" />
          <Card number="3" />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
