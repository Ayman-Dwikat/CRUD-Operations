import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function ProductList() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    fetch("http://localhost:4000/products?_sort=id&_order=desc")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error();
      })
      .then((data) => setProducts(data))
      .catch((error) => alert("Unable to get the data"));
  }

  useEffect(getProducts, []);

  function deleteProduct(id) {
    fetch("http://localhost:4000/products/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }

        getProducts();
      })
      .catch((error) => alert("Unable to delete the product"));
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-3">Products</h2>
      <br />

      <div class="row mb-3">
        <div class="col">
          <Link
            className="btn btn-primary me-1"
            to="/create-product"
            role="button"
          >
            Create Product
          </Link>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={getProducts}
          >
            Refresh
          </button>
        </div>
        <div class="col"></div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}$</td>
                <td>
                  <img
                    src={
                      "http://localhost:4000/images/" + product.imageFilename
                    }
                    alt="..."
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                </td>
                <td>
                  {product.createdAt ? product.createdAt.slice(0, 10) : "N/A"}
                </td>
                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                  <Link
                    className="btn btn-primary btn-sm me-1"
                    to={`/edit-product/${product.id}`}
                    role="button"
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-info btn-sm me-1"
                    to={`/view-product/${product.id}`}
                    role="button"
                  >
                    View
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
