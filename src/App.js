import Routing from "./routing/Routing";
import "./styles/main.scss";
import Navbar from "./view/pages/navbar/Navbar";
import Footer from "./view/pages/footer/Footer";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
