import "./App.css";
import NavigationBar from "./components/NavigationBar";
import MyCarousel from "./components/Carousel";
import "./style/LandingPage.css";
import { Stack } from "react-bootstrap";
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <div className="LandingPage">
        <Stack gap={3}>
          <div className="NavBar">
            <NavigationBar />
          </div>
          <MyCarousel />
          <div className="Content">
            <Content />
          </div>
          <Footer />
        </Stack>
      </div>
    </div>
  );
}

export default App;