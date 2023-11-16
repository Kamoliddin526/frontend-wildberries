import Routing from "./routing/Routing";
import "./styles/main.scss";
import Navbar from "./view/pages/navbar/Navbar";
import Footer from "./view/pages/footer/Footer";
import { CartProvider } from "./view/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="main">
        <Navbar />
        <Routing />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
