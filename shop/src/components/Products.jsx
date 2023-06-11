import { useData } from "../api/useData";
import { useState } from "react";
import { Link } from "react-router-dom";


export function Products() {
    const { data } = useData(
    "https://api.noroff.dev/api/v1/online-shop"
  );
  const products = data;
  const [search, setsearch] = useState('');
  const handleSearch = (event) => {
    setsearch(event.target.value);
  }
    const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <>
    <div className="row row-cols-1 row-cols-md-2 g-4 p-4 justify-content-center">
      <div className="input-group mb-3 justify-content-center">
        <input type="search" value={search} onChange={handleSearch} className="form-control search" placeholder="search items..." aria-label="Search items" aria-describedby="basic-addon2" />
      </div>
        {filteredProducts.map((product) => (
            <div className="card m-2 p-2 d-flex flex-column" key={product.id}>
              <img src={product.imageUrl} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column justify-content-end">
                <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <Link to={product.id}>
                <button className="btn btn-primary btn-dark">More info</button>
            </Link>  
            </div>
            </div>
          ))
        }
    </div>
  </>);
}