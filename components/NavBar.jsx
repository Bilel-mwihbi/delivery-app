import styles from "../styles/Navbar.module.css"
import Image from 'next/image';
import { useSelector } from "react-redux";

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
    return (
    <div className={styles.container}>
        <h1>DELIVERY</h1>
        <nav>
          <ul className={styles.nav_links}>
            <li>
              <a href="">Homepage</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.cart} >
          <Image src="/images/cart.png" alt="" width="30px" height="30px"/>
          <div className={styles.counter}>
              {quantity}
          </div>
        </div>
      </div>
    );
}
 
export default NavBar;