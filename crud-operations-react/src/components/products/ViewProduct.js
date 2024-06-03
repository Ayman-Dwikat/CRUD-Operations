import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewProduct.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ViewProduct() {
  const api_url = "http://localhost:4000/products/";
  const [product, setProduct] = useState({});

  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(`${api_url}/${params.id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params.productId]);

  return (
    <div className="details">
      <div className="container">
        <section className="py-5">
          <div className="row gx-5">
            {/* Product Image */}
            <aside className="col-lg-6">
              <div className="border rounded-4 p-4 mb-4 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  className="rounded-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-type="image"
                  href={"http://localhost:4000/images/" + product.imageFilename}
                >
                  <img
                    style={{
                      width: "56vh",
                      height: "60vh",
                      objectFit: "contain",
                    }}
                    className="rounded-4 fit"
                    src={
                      "http://localhost:4000/images/" + product.imageFilename
                    }
                    alt="Product"
                  />
                </a>
              </div>
            </aside>

            {/* Product Details */}
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark mb-4">{product.name}</h4>

                <div className="mb-3">
                  <span className="h5">${product.price}</span>
                  <span className="text-muted"> /per box</span>
                </div>

                <p className="mb-4">{product.description}</p>

                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">{product.category}</dd>

                  <dt className="col-3">createdAt</dt>
                  <dd className="col-9">
                    {product.createdAt ? product.createdAt.slice(0, 10) : "N/A"}
                  </dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">{product.brand}</dd>
                </div>

                <hr />

                <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: "35px" }}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div
                      className="input-group mb-2"
                      style={{ width: "170px" }}
                    >
                      <input
                        type="number"
                        min="1"
                        className="form-control text-center border border-secondary"
                        placeholder="1"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                    </div>
                  </div>
                </div>
                <a href="#" className="btn btn-warning shadow-0 me-2">
                  Buy now
                </a>
                <a href="#" className="btn btn-primary shadow-0 me-2">
                  <FontAwesomeIcon icon={faCartShopping} /> Add to cart
                </a>
                <a
                  href="#"
                  className="btn btn-light border-secondary icon-hover px-3"
                >
                  <FontAwesomeIcon icon={faHeart} /> Save
                </a>
              </div>
            </main>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ViewProduct;
