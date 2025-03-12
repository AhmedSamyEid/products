import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("فشل تحميل بيانات المنتج");
        const data = await response.json();
        if (isMounted) {
          setProduct(data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          setLoading(false);
        }
      }
    }

    fetchProduct();

    return () => {
      isMounted = false; // إلغاء التحديث إذا تم تفريغ المكون
    };
  }, [id]);

  if (loading) return <p className="text-center text-white">جاري تحميل المنتج...</p>;
  if (error) return <p className="text-center text-red-500">❌ {error}</p>;

  return (
    <div className="p-10 min-h-screen flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 bg-gray-700 text-white px-4 py-2 rounded"
      >
        ⬅ العودة
      </button>
      <div className="border border-gray-300 p-6 max-w-lg bg-white rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-48 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-xl font-semibold text-blue-600 mt-4">
          💰 السعر: ${product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
