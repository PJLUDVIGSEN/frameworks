import "./App.css";
import { Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import { Products } from "./components/Products";
import { Productpage } from "./components/Productpage";
import { CartPage } from "./components/CartPage";
import { Checkout } from "./components/Checkout";
import { Contact } from "./components/Contact";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route exact path="/:id" element={<Productpage />} />
          <Route exact path="/CartPage" element={<CartPage />} />
          <Route exact path="/Checkout" element={<Checkout />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
  );
}

export default App;
