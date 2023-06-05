import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../api/useData";
import { useCartStore } from "./useCartStore";


export function Productpage() {
  const { id } = useParams();
  const newUrl = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  const { data, isLoading, isError } = useData(newUrl);
  const product = data;
  const discount = (product.price - product.discountedPrice) / product.price * 100.0;
  var showDiscount = `${discount.toFixed(0)}% Off`
  if (discount === 0) {
    showDiscount = "";
  }

  const addToCart = useCartStore((state) => state.addToCart);
  return (
            <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product.imageUrl} alt={product.title} /></div>
                    <div className="col-md-6">
                          <h1 className="display-5 fw-bolder">{product.title}</h1>
                        <div className="fs-5 mb-5">
                            <span>{product.discountedPrice},- NOK</span>
                            <h3 className="text-success">{showDiscount}</h3>
                        </div>
                          <p className="lead">{product.description}</p>
                        <div className="d-flex">
                            <button onClick={addToCart} className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}