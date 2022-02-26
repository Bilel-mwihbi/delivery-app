import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({total,createOrder}) => {
 
    const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setphNumber] = useState(0);
  const handleClick=()=>{
    
    createOrder({customer,address,total,phoneNumber})
  }
    return ( 
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay {total} DT after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name </label>
          <input
            placeholder="Bilel Mouihbi"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="number"
            placeholder="20 911 709"
            className={styles.input}
            onChange={(e) => setphNumber(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={5}
            placeholder="Ahmed Tlili"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button onClick={handleClick} className={styles.button} >
          Order
        </button>
        <button  className={styles.button} >
          Close
        </button>
      </div>
    </div> );
}
 
export default OrderDetail;