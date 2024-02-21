import { useEffect, useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Corrected import

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_data':
      return { ...state, data: action.payload, loading: false }
    case "SET_ERROR":
      return { ...state, error: true, loading: false }
    default:
      return state
  }
}

const Product = () => {
  const api = `https://fakestoreapi.com/products`
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: true,
    error: false,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        dispatch({ type: 'set_data', payload: response.data })
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch({ type: "SET_ERROR" });
      }
      // Set loading to false regardless of success or error
    }

    fetchData();
  }, [api]);

  return (
    <>
      <h1 className="flex justify-center text-3xl">Product Page</h1>
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-10 m-36">
          {state.data &&
            state.data.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}> {/* Fixed import here */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <p>Title: {product.title}</p>
                  <p>Price: ${product.price}</p>
                  <img src={product.image} alt={product.title} className="h-20 w-20" />
                  <p>Description: {product.description}</p>
                  <p>Category: {product.category}</p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
};

export { Product };
