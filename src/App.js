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

function App() {
  return (
    <div className="App">
      <Navigation />
      <BannerSection />
      <AboutSection />
      <ChoseUs/>
      <ServiceList />

      <DoctorSection />

      <DepartmentSection />

      <LatestNews />
    </div>
  );
}
// http://newhospitalhtml.bdtask.com/images/appointment-bg.jpg

export default App;
