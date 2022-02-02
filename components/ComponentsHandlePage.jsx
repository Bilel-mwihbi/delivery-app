import Image from "next/image";
import { useState } from "react";
import styles from "../styles/ComponentsHandlePage.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cart";


const ComponentsHandlePage = ({obj}) => {
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const handleClick = () =>{
            dispatch(addProduct({...obj, extras, price, quantity}));
    }
    return ( 
        <>
        {obj.category == "pizza" && 
             <><div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={obj.img} objectFit="contain" layout="fill" alt="" />
                    </div>
                </div>
                <div className={styles.right}>
                        <h1 className={styles.title}>{obj.title}</h1>
                        <span className={styles.price}>{obj.price[size]}</span>
                        <p className={styles.desc}>{obj.desc}</p>
                        <h3 className={styles.choose}>Choose the size</h3>
                        <div className={styles.sizes}>
                            <div className={styles.size} onClick={() => setSize(0)}>
                                <Image src="/images/size.png" layout="fill" alt="" />
                                <span className={styles.number}>Small</span>
                            </div>
                            <div className={styles.size} onClick={() => setSize(1)}>
                                <Image src="/images/size.png" layout="fill" alt="" />
                                <span className={styles.number}>Medium</span>
                            </div>
                            <div className={styles.size} onClick={() => setSize(2)}>
                                <Image src="/images/size.png" layout="fill" alt="" />
                                <span className={styles.number}>Large</span>
                            </div>
                        </div>
                        <h3 className={styles.choose}>Choose additional ingredients</h3>
                        <div className={styles.ingredients}>
                            <div className={styles.option}>
                                <input
                                    type="checkbox"
                                    id="double"
                                    name="double"
                                    className={styles.checkbox} />
                                <label htmlFor="double">Double Ingredients</label>
                            </div>
                            <div className={styles.option}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    id="cheese"
                                    name="cheese" />
                                <label htmlFor="cheese">Extra Cheese</label>
                            </div>
                            <div className={styles.option}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    id="spicy"
                                    name="spicy" />
                                <label htmlFor="spicy">Spicy Sauce</label>
                            </div>
                            <div className={styles.option}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    id="garlic"
                                    name="garlic" />
                                <label htmlFor="garlic">Garlic Sauce</label>
                            </div>
                        </div>
                        <div className={styles.add}>
                            <input onChange={(e)=>setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
                            <button className={styles.button} onClick={handleClick}>Add to Cart</button>
                        </div>
                    </div></>
        }
        {obj.category == "meal1" && 
                <>
                 <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={obj.img} objectFit="contain" layout="fill" alt="" />
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{obj.title}</h1>
                        <span className={styles.price}>${obj.price[size]}</span>
                        <p className={styles.desc}>{obj.desc}</p>
                    
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                        <div className={styles.ingredients}>
                            <div className={styles.option}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    id="mayonnaise"
                                    name="mayonnaise" />
                                <label htmlFor="mayonnaise">Mayonnaise</label>
                            </div>
                            <div className={styles.option}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    id="harissa"
                                    name="harissa" />
                                <label htmlFor="harissa">Harissa</label>
                            </div>
                            <div className={styles.option}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    id="ketchup"
                                    name="ketchup" />
                                <label htmlFor="ketchup">Ketchup</label>
                            </div>
                        </div>
                        <h3 className={styles.choose}>Choose coke</h3>
                        <div className={styles.sizes}>
                            <div className={styles.drinks} onClick={() => setSize(0)}>
                                <Image src="/images/drink.png" layout="fill" alt="" />
                                <span className={styles.number}>Coca</span>
                            </div>
                            <div className={styles.drinks} onClick={() => setSize(1)}>
                                <Image src="/images/drink.png" layout="fill" alt="" />
                                <span className={styles.number}>Sprite</span>
                            </div>
                            <div className={styles.drinks} onClick={() => setSize(2)}>
                                <Image src="/images/drink.png" layout="fill" alt="" />
                                <span className={styles.number}>Fanta</span>
                            </div>
                        </div>
                        <div className={styles.add}>
                            <input type="number" defaultValue={1} className={styles.quantity} />
                            <button className={styles.button}>Add to Cart</button>
                        </div>    
                </div>
                
                </>
         }
         {obj.category == "product" && 
         <>
            <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={obj.img} objectFit="contain" layout="fill" alt="" />
                    </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{obj.title}</h1>
                <h3>Brand :{obj.brand}</h3>
                <span className={styles.price}>${obj.price}</span>
                <p className={styles.desc}>{obj.description}</p>
                <h3 className={styles.choose}>Specification</h3>
                <ul>
                    {obj.specifications.map(spec =>(
                        <li key={spec.idContent}>{spec.content}</li>
                    ))}
                    
                    
                </ul>
                <div className={styles.add}>
                            <input type="number" defaultValue={1} className={styles.quantity} />
                            <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
         </>
         }
        </>
     );
}
 
export default ComponentsHandlePage;