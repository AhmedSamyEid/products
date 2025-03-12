import React, { useState, useEffect } from "react";
import { Link } from "react-router";

function ProductsApp() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("فشل تحميل المنتجات");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-10  min-h-screen">
      <h1 className="text-center text-4xl text-white mb-10">
        🛒 قائمة المنتجات
      </h1>

      {loading && (
        <p className="text-center text-white">جاري تحميل المنتجات...</p>
      )}
      {error && <p className="text-center text-red-500">❌ {error}</p>}

      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 p-4 w-64 text-center bg-white rounded-lg shadow-md"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-700">💰 السعر: ${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                عرض التفاصيل
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsApp;
