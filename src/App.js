
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Pages/Navigation/Navigation';
import BannerSection from './Pages/Home/BannerSection/BannerSection';
import AboutSection from './Pages/Home/AboutSection/AboutSection';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <BannerSection/>
      <AboutSection />
    </div>
  );
}

export default App;
