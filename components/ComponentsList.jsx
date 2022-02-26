import styles from "../styles/ComponentsList.module.css";
import FoodCard from "./FoodCard";
import ProductCard from "./ProductCard";
const ComponentsList = ({foodList,productList}) => {
    return (  
    <div className={styles.container}>
      <h1 className={styles.title}>Order food , meals and products to your door</h1>
      <p className={styles.desc}>
        This platform provides the users to order any kind of products or maybe food in one click !! you can also track your order online no need to call any delivery services .
      </p>
      <h2>Eat what makes you happy</h2>
      <div className={styles.wrapper}>
        {foodList.length ==0 && <h4>food list is empty</h4>}
        {foodList && foodList.map(food =>(
            <FoodCard key={food._id} food={food}/>
      ))}
         
         
      </div>
      
      <h2>Spend less. Smile more</h2>
      <div className={styles.wrapper}>
           {productList.length ==0 && <h4>productList is empty</h4>}
           {productList && productList.map(product =>(
            <ProductCard key={product._id} product={product}/>
      ))}
      </div>
    </div>);
}
 
export default ComponentsList;