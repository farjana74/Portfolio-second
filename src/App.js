import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Pages/Navigation/Navigation";
import BannerSection from "./Pages/Home/BannerSection/BannerSection";
import AboutSection from "./Pages/Home/AboutSection/AboutSection";
import ServiceList from "./Pages/Home/BannerSection/ServiceList/ServiceList";
import DoctorSection from "./Pages/Home/DoctorSection/DoctorSection";
import DepartmentSection from "./Pages/Home/DepartmentSection/DepartmentSection";
import LatestNews from "./Pages/Home/LatestNews/LatestNews";
import ChoseUs from "./Pages/Home/ChoseUs/ChoseUs";
import FooterFirst from "./Pages/Footer/FooterFirst/FooterFirst";
import FooterSecond from "./Pages/Footer/FooterSecond/FooterSecond";
import Testimonial from "./Pages/Home/Testimonial/Testimonial";

function App() {
  return (
    <div className="app">
      <Navigation />
      <BannerSection />
      <AboutSection />
      <ChoseUs />
      <ServiceList />
      <DoctorSection />
      <DepartmentSection />
      <Testimonial/>
      <LatestNews />
      <FooterFirst/>
      <FooterSecond/>
    </div>
  );
}
export default App;
