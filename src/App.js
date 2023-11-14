import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Pages/Navigation/Navigation";
import BannerSection from "./Pages/Home/BannerSection/BannerSection";
import AboutSection from "./Pages/Home/AboutSection/AboutSection";
import ServiceList from "./Pages/Home/BannerSection/ServiceList/ServiceList";
import DoctorSection from "./Pages/Home/DoctorSection/DoctorSection";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BannerSection />
      <AboutSection />
      <ServiceList />
      <br />
      <br />
      <DoctorSection />
    </div>
  );
}

export default App;
