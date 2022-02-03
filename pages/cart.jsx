import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const cart = () => {
  const dispatch = useDispatch();
  const selectedFood=[]
  const selectProducts=[];
  const cart = useSelector((state) => state.cart);
  const [payed,setPayed]=useState(false);
  
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
                      <button className={styles.payButton}>
                        CASH ON DELIVERY
                      </button>
                  </div>
                  }
                  {!payed && 
                      <button onClick={()=>setPayed(true)} className={styles.button}>CHECKOUT NOW!</button>
                  }
                  
                </div>
              </div>
         </div> 
    );
}
 
export default cart;