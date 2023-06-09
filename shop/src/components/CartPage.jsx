import { useCartStore } from "./useCartStore";
import { Link } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { Checkout } from "./Checkout";

export function CartPage() {
  const { products } = useCartStore();
  const total = useCartStore((state) => state.totalPrice).toFixed(0);
  const clearStore = useCartStore((state) => state.deleteEverything)
  return (
    <div className="container cart justify-content-center">
      <h1>Cart</h1>
      <ul className="list-group">
        {products?.map((product) => (
          <li key={product.id} className="list-group-item">
            <h3>{product.title}</h3>
            <p>Price: {product.discountedPrice},-</p>
          </li>
        ))}
      </ul>
      <div className="row d-flex">
      <div className="col-md-12 d-flex justify-content-end">{products.length > 0 && <h5 className="pt-2">Sub Total: {total},-</h5>}</div>
      <div className="col-md-12 d-flex justify-content-end">{products.length > 0 && <Link to="/Checkout" onClick={clearStore} className="btn btn-outline-dark flex-shrink-0" type="button">checkout</Link>}</div>
      </div>
    </div>
  );
}
