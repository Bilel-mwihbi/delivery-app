import styles from "../styles/Card.module.css";
import Image from 'next/image'
import Link from "next/link"
const FoodCard = ({food}) => {
    return (  
    <div className={styles.container}>
      <Link href={`/food/${food._id}`} passHref>
      <Image src={food.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{food.title}</h1>
      <span className={styles.price}>${food.price[0]}</span>
      <p className={styles.desc}>
        {food.description}
      </p>
    </div>
    );
}
 
export default FoodCard ;
