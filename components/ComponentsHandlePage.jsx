import Image from "next/image";
import { useState } from "react";
import styles from "../styles/ComponentsHandlePage.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cart";


const ComponentsHandlePage = ({obj}) => {
    
    const [quantity, setQuantity] = useState(1);
    const [options,setOptions] =useState([]);
    
    const [price,setPrice]=useState(obj.price[0]);

    const dispatch = useDispatch();
    const handleClick = () =>{
            dispatch(addProduct({...obj, options, price, quantity}));
    }
    const handleClick2 = (price) =>{
            dispatch(addProduct({...obj, price, quantity}));
    }
    const handleOptions=(e) =>{
        options =[...options]
        const checked = e.target.checked
        if (checked){
            options.push(e.target.name)
        }else {
            options.splice(options.indexOf(e.target.name),1)
        }
        
        setOptions(options)

        
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
                        
                        <span className={styles.price}>{price}TND</span>
                        <p className={styles.desc}>{obj.description}</p>
                        <h3 className={styles.choose}>Choose the size</h3>
                        <div className={styles.sizes}>
                            <div className={styles.size} onClick={() => setPrice(obj.price[0])}>
                                <Image src="/images/size.png" layout="fill" alt="" />
                                <span className={styles.number}>Small</span>
                            </div>
                            <div className={styles.size} onClick={() => setPrice(obj.price[1])}>
                                <Image src="/images/size.png" layout="fill" alt="" />
                                <span className={styles.number}>Medium</span>
                            </div>
                            <div className={styles.size} onClick={() =>setPrice(obj.price[2])}>
                                <Image src="/images/size.png" layout="fill" alt="" />
                                <span className={styles.number}>Large</span>
                            </div>
                        </div>
                        <h3 className={styles.choose}>Choose additional ingredients</h3>
                        <div className={styles.ingredients}>
                            {obj.options.map((option)=>(
                                <div className={styles.option}>
                                <input
                                    type="checkbox"
                                    id={option.text}
                                    name={option.text}
                                    className={styles.checkbox} 
                                    onChange={(e)=>handleOptions(e)}
                
                                    />
                                <label htmlFor="double">{option.text}</label>
                            </div>
                            ))}
                        </div>
                        <div className={styles.add}>
                            <input onChange={(e)=>setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
                            <button className={styles.button} onClick={handleClick}>Add to Cart</button>
                        </div>
                    </div></>
        }
        {obj.category == "meal" && 
                <>
                 <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={obj.img} objectFit="contain" layout="fill" alt="" />
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{obj.title}</h1>
                        <span className={styles.price}>{price}TND</span>
                        <p className={styles.desc}>{obj.description}</p>
                    
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                        <div className={styles.ingredients}>
                              {obj.options.map((option)=>(
                                <div className={styles.option}>
                            <input
                                    type="checkbox"
                                    id={option.text}
                                    name={option.text}
                                    className={styles.checkbox} 
                                    onChange={(e)=>handleOptions(e)}
            
                                    />
                                <label htmlFor="double">{option.text}</label>
                            </div>
                            ))}
                        </div>
                        <h3 className={styles.choose}>Choose coke</h3>
                        <div className={styles.sizes}>
                            <div className={styles.drinks} onClick={() => setPrice(obj.price[1])}>
                                <Image src="/images/drink.png" layout="fill" alt="" />
                                <span className={styles.number}>Coca</span>
                            </div>
                            <div className={styles.drinks} onClick={() => setPrice(obj.price[1])}>
                                <Image src="/images/drink.png" layout="fill" alt="" />
                                <span className={styles.number}>No drinks</span>
                            </div>
                        </div>
                        <div className={styles.add}>
                            <input onChange={(e)=>setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
                            <button className={styles.button} onClick={handleClick}>Add to Cart</button>
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
                            <input onChange={(e)=>setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
                            <button className={styles.button} onClick={()=>handleClick2(obj.price)}>Add to Cart</button>
                </div>
            </div>
         </>
         }
        </>
     );
}
 
export default ComponentsHandlePage;