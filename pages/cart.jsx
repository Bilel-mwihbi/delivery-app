import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import OrderDetail from "../components/OrderDetail";
import { useRouter } from "next/router";
import { reset } from "../redux/cart";

const cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const selectedFood=[]
  const selectProducts=[];
  const cart = useSelector((state) => state.cart);
  const [payed,setPayed]=useState(false);
  const [order,setOrder]=useState(false);
  
  const createOrder = async (data) => {
    
     fetch("http://localhost:3000/api/orders",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(data)
          
      }).then(response =>response.json())
        .then(obj => router.push("/order/"+obj._id))
        dispatch(reset());
  }
 
  
  cart.products.map((product)=>{
    if((product.category =="pizza") || (product.category =="meal")){
      selectedFood.push(product);
    }
     if(product.category =="product"){
      selectProducts.push(product);
    }
  })

    return ( 
      
        <div className={styles.container}>
          <div className={styles.left}>
            {selectProducts.length !=0 &&
            <>
              <h3>Product :</h3>
              <table className={styles.table}>
                <tr className={styles.trTitle}>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Specifications</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  
                </tr>
                {selectProducts.map((product)=>(
                    <tr className={styles.tr} >
                        <td>
                          <div className={styles.imgContainer}>
                            <Image
                              src={product.img}
                              layout="fill"
                              objectFit="cover"
                              alt="" />
                          </div>
                        </td>
                        <td>
                          <span className={styles.name}>{product.title}</span>
                        </td>
                        <td>
                          <span className={styles.extras}>
                            {product.specifications.map((spec)=>(
                              <span>{spec.content}<br/></span>
                            ))}
                            
                          </span>
                        </td>
                        <td>
                          <span className={styles.price}>{product.price}</span>
                        </td>
                        <td>
                          <span className={styles.quantity}>{product.quantity}</span>
                        </td>
                        <td>
                          <span className={styles.total}>{product.price * product.quantity}</span>
                        </td>
                  </tr>

                ))}
                
              </table>
            </> 
              }
              {/* //FOOOD */}
              {selectedFood.length !=0 &&
            <>
              <h3>Food :</h3>
              <table className={styles.table}>
                <tr className={styles.trTitle}>
                    <th>Photo</th>
                  <th>Name</th>
                  <th>Extra</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
                {selectedFood.map((food)=>(
                    <tr className={styles.tr} >
                        <td>
                          <div className={styles.imgContainer}>
                            <Image
                              src={food.img}
                              layout="fill"
                              objectFit="cover"
                              alt="" />
                          </div>
                        </td>
                        <td>
                          <span className={styles.name}>{food.title}</span>
                        </td>
                        <td>
                          <span className={styles.extras}>
                            {food.options.map((spec)=>(
                              <span key={spec._id}>{spec}<br/></span>
                            ))}
                            
                          </span>
                        </td>
                        <td>
                          <span className={styles.price}>{food.price}</span>
                        </td>
                        <td>
                          <span className={styles.quantity}>{food.quantity}</span>
                        </td>
                        <td>
                          <span className={styles.total}>{food.price * food.quantity}</span>
                        </td>
                  </tr>

                ))}
                
              </table>
            </> 
              }
              
          </div>

              <div className={styles.right}>
                <div className={styles.wrapper}>
                  <h2 className={styles.title}>CART TOTAL</h2>
                  <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>{cart.total}
                  </div>
                  <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                  </div>
                  <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>{cart.total}
                  </div>
                  {payed && 
                  <div className={styles.payement}>
                      <button onClick={()=>setOrder(true)} className={styles.payButton}>
                        CASH ON DELIVERY
                      </button>
                  </div>
                  }
                  {!payed && 
                      <button onClick={()=>setPayed(true)} className={styles.button}>CHECKOUT NOW!</button>
                  }
                  
                </div>
              </div>
              {order && (
                <OrderDetail total={cart.total} createOrder={createOrder} />
              )}
         </div> 
    );
}
 
export default cart;