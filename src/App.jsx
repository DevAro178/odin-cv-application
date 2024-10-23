import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Banner from "./components/Banner";
import Experiences from "./components/Experiences";
import Divider from "./components/Divider";
import Education from "./components/Education";

function App() {
  return (
    <div className="max-w-[768px] m-auto px-[24px]">
      <Banner />
      <Divider />
      <Experiences />
      <Divider />
      <Education />
    </div>
  );
}

export default App;
