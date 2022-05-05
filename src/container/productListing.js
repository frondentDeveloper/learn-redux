import {useDispatch, useSelector} from "react-redux";
import ProductComponents from "./productComponents"
import axios from "axios";
import {setProduct} from "../redux/actions/productActions";
import {useEffect} from "react";

const ProductListing = () =>{
   const products = useSelector(state => state);
   const dispatch = useDispatch()
    const fetchComponent = () =>{
      axios.get('https://fakestoreapi.com/products').then((response)=>{
          dispatch(setProduct(response.data))
      }).catch(err=>{
          console.log(err.message)
      })
    };


   useEffect(()=>{
       fetchComponent()
       },[]);

   console.log("product: ",products);

  return(
      <div className="ui grid container">
        <ProductComponents/>
        <div>s</div>
      </div>
  )
};

export default ProductListing