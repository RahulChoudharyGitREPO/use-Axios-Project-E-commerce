import axios from 'axios';
import  {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct =() => {
const { id } = useParams()


const [product, setProduct] = useState([]);

useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching single product:", error);
      }
    };

    fetchSingleProduct();
  }, [id]);



    return <div>
    {product && (
        <div className='m-36'>
         <h1 className='text-3xl'>{product.title}</h1>
          <p className='text-lg'>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <img src={product.image} alt={product.title} className="h-20 w-20" />
          {/* Add more properties as needed */}
        
        </div>
      )}
    </div>;
};



export { SingleProduct };