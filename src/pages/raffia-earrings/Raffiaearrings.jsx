import { useState, useEffect } from "react";

function RaffiaEarrings() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:4001/api/products/getproducts?category=raffia_earrings",
        );

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading products.....</p>
      </div>
    );
  }

  return (
    <div
      className="box_container 
"
    >
      {products.map((product) => (
        <div className="eco_image_wrapper" key={product.id}>
          <img src={product.image} alt={product.title} />

          <p className="title">{product.title}</p>

          <p className="description">{product.description}</p>

          <p className="price">
            <b>₦{product.price.toLocaleString()}</b>
          </p>
        </div>
      ))}
    </div>
  );
}

export default RaffiaEarrings;
