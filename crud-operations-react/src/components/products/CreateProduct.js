import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [validationErrors, setvalidationErrors] = useState({});
  const navigate = useNavigate();

  async function handelSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const product = Object.fromEntries(formData.entries());

    if (
      !product.name ||
      !product.brand ||
      !product.category ||
      !product.price ||
      !product.description ||
      !product.image.name
    ) {
      alert("Please fill all the fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/products", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        //Product created correctly!
        navigate("/");
      } else if (response.status === 400) {
        setvalidationErrors(data)
      } else {
        alert("Unable to create the product!");
      }
    } catch (error) {
      alert("Unable to create the server!");
    }
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-7 mx-auto rounded border p-4">
          <h2 className="text-center mb-5">Create Product</h2>

          {/* Form */}
          <form onSubmit={handelSubmit}>
            <div className="row mb-4">
              <label className="col-sm-4 col-form-label">Name</label>
              <div className="col-sm-8">
                <input className="form-control" name="name" />
                <span className="text-danger">{validationErrors.name}</span>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-sm-4 col-form-label">Brand</label>
              <div className="col-sm-8">
                <input className="form-control" name="brand" />
                <span className="text-danger">{validationErrors.brand}</span>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-sm-4 col-form-label">Category</label>
              <div className="col-sm-8">
                <select className="form-select" name="category">
                  <option value="Other">Other</option>
                  <option value="Phones">Phones</option>
                  <option value="Computers">Computers</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Printers">Printers</option>
                  <option value="Cameras">Cameras</option>
                </select>
                <span className="text-danger">{validationErrors.category}</span>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-sm-4 col-form-label">Price</label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  name="price"
                  type="number"
                  step="1"
                  min="1"
                />
                <span className="text-danger">{validationErrors.price}</span>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-sm-4 col-form-label">Description</label>
              <div className="col-sm-8">
                <textarea
                  className="form-control"
                  name="description"
                  type="number"
                  rows="4"
                />
                <span className="text-danger">
                  {validationErrors.description}
                </span>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-sm-4 col-form-label">Iamge</label>
              <div className="col-sm-8">
                <input className="form-control" name="image" type="file" />
                <span className="text-danger">{validationErrors.image}</span>
              </div>
            </div>

            <div className="row">
              <div className="offset-sm-4 col-sm-4 d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="col-sm-4 d-grid">
                <Link className="btn btn-secondary" to="/" role="button">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
