import "./App.css";
import { useData } from "./api/useData";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import { Products } from "./components/Products";
import { Productpage } from "./components/Productpage";
import { CartPage } from "./components/CartPage";
import { Checkout } from "./components/Checkout";

function App() {
  const { data, isloading, error } = useData(
    "https://api.noroff.dev/api/v1/online-shop"
  );
  const item = data;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route exact path="/:id" element={<Productpage />} />
          <Route exact path="/CartPage" element={<CartPage />} />
          <Route exact path="/Checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
