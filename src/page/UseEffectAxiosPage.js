import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

function UseEffectAxiosPage() {
  // useState để lưu trữ dữ liệu
  const [data, setData] = useState([]);

  // useEffect để gọi API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gọi API bằng axios.get
        const response = await axios.get(
          "https://6776afed12a55a9a7d0c90f2.mockapi.io/api/v1/product"
        );
        setData(response.data); // Axios tự động parse JSON, không cần .json()
      } catch (err) {
        console.error("Error fetching data:", err); // Xử lý lỗi
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex max-w-2xl justify-center items-center mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product) => (
          <div
            className="flex flex-col items-center text-center space-y-2"
            key={product.id}
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto"
            />
            <div className="space-y-1 mt-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              {/* <p className="text-sm text-gray-700">{product.price}</p> */}
              <p className="text-gray-700">${product.price}</p>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xs text-gray-500">color</span>
                <div
                  className="w-14 h-3 border border-black"
                  style={{ backgroundColor: product.colors }}
                  title={product.colors} // Show the color HEX as a tooltip
                ></div>
                {/* <p className="text-xs text-gray-500">{product.colors}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseEffectAxiosPage;
