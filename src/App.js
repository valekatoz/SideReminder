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
          <Card appLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png" appName="Spotify++" expiry = "3 Days" />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
