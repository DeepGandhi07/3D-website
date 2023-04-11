import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Soundsec from "./components/Soundsec";

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Soundsec />
      <DisplaySection />
    </div>
  );
}

export default App;
