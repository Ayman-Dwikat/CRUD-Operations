import { ProductList } from "./products/ProductList";

export function Home() {
  return (
    <div className="container my-4">
      <h2
        className="text-center"
        style={{
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          width: "fit-content",
        }}
      >
        Welcome to our website
        <hr />
      </h2>
      <ProductList />
    </div>
  );
}
