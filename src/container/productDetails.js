import {useParams} from "react-router-dom"
import axios from "axios";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeSelectedProduct, selectedProduct} from "../redux/actions/productActions";
const ProductDetail = () =>{
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const {image, title, price, category, description} = product;

    const fetchProductDeteil = () =>{
      axios.get(`https://fakestoreapi.com/products/${productId}`).then(res=>{
          dispatch(selectedProduct(res.data))
      }).catch(err=>{console.log(err.message)})
    };

useEffect(()=>{
   if (productId && productId !== "")fetchProductDeteil()

    return () =>{
       dispatch(removeSelectedProduct())
    }
},[productId]);

    return(
        <div className="ui grid container">
            {Object.keys(product).length === 0 ?(
                <div>...Loading</div>
            ):(<div className="ui  segment">
                  <div className="ui two column stackable center aligned grid">
                      <div className="ui vertical divider">ADD</div>
                      <div className="middle aligned row">
                          <div className="column lp">
                              <img src={image} alt={title}/>
                          </div>
                          <div className="column rp">
                              <h1>{title}</h1>
                              <h2>
                                  <a className="ui teal tag label">${price}</a>
                              </h2>
                              <h3 className="ui brown block header">
                                  {category}
                              </h3>
                              <p>{description}</p>
                              <div className="ui vertical animated button" tabIndex="0">
                                  <div className="hidden content">
                                      <i className="shop icon"></i>
                                  </div>
                                  <div className="visible content"> add to card</div>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>)}
        </div>
    )
};

export default ProductDetail