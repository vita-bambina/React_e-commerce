import { useState, useEffect } from "react";

function Shop() {
  const [boxProduct, setBoxProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductCatGroup = async () => {
      try {
        const response = await fetch(
          "http://localhost:4001/api/products/product-category",
        );

        const data = await response.json();
        setBoxProduct(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getProductCatGroup();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading products.....</p>
      </div>
    );
  }

  return (
    <div className="background">
      {boxProduct.map((section) => (
        <div key={section.sectionTitle}>
          <div className="section_title">
            <p id="Eco">{section.sectionTitle}</p>

            <p>
              <a href={section.link}>View All</a>
            </p>
          </div>

          <div className="box_container">
            {section.products.map((product) => (
              <a href={`/shop?id=${product.id}`} key={product.id}>
                <div className="image_wrapper">
                  <img src={product.image} alt={product.title} />
                  <p className="title">{product.title}</p>
                  <p className="description">{product.description}</p>
                  <p className="price">
                    <b>₦{product.price.toLocaleString()}</b>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
