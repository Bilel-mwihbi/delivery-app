import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import { useState} from "react";

const index = ({foodList,productList,orderList}) => {
  const status = ["preparing", "on the way", "delivered","aaaa", "bbbb" ,"cccc"];
  //food_list hook
  const [fdList,setFdlist]  =useState(foodList);
  //product_list hook
  const [prList,setPrlist]  =useState(productList);
  //order_list hook
  const [orList,setOrlist]  =useState(orderList);
  
 

  const handleDelete=async(url,id)=>{
    try {
        fetch(url+id,{
        method:"DELETE"
      })
      
      setFdlist(fdList.filter(food => food._id !== id));
      setPrlist(prList.filter(product => product._id !== id));
    }catch(err){
      console.log(err)
    }
    
  }
  const handleStatus=async(id) =>{
    //find the order element with the same id
    const obj=orList.find(order=>order._id === id );
            
     
        fetch("http://localhost:3000/api/orders/"+id,{
        method:"PUT",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({ status: obj.status + 1 })
      })
      .then(response => response.json())
      .then(data => setOrlist([data,...orList.filter(order => order._id !== id)]))
      
    
  }
    return (    
    <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.item}>
          <h1 className={styles.title}>Foods</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Image</th>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </tbody>
            {fdList.map((food)=>(
              <tbody key={food._id}>
                <tr>
                 <td>
                  <Image
                    src={food.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{food._id.slice(0, 5)}...</td>
                <td>{food.title}</td>
                <td>${food.price[0]}</td>
                <td>
                    <button className={styles.button}>Edit</button>
                    <button
                      className={styles.button}
                       onClick={() => handleDelete("http://localhost:3000/api/foods/",food._id)}
                      >
                      Delete
                    </button>
                </td>
                </tr>
              </tbody>
            ))}
            
         </table>
         </div>
         <div className={styles.item}>
          <h1 className={styles.title}>Products</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Image</th>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </tbody>
            {prList.map((product)=>(
              <tbody key={product._id}>
                <tr>
                 <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                    <button className={styles.button}>Edit</button>
                    <button
                      className={styles.button}
                     onClick={() => handleDelete("http://localhost:3000/api/products/",product._id)}

                      >
                      Delete
                    </button>
                </td>
                </tr>
              </tbody>
            ))}
         </table>
       </div>
        </div>
       
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                 <span>cash</span> 
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button onClick={() => handleStatus(order._id)}>
                    Next Status
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div> );
}
 
export const getServerSideProps = async () => {
  const resFood = await fetch(`http://localhost:3000/api/foods`);
  const resProduct = await fetch(`http://localhost:3000/api/products`);
  const resOrder = await fetch(`http://localhost:3000/api/orders`);
  const Fooddata = await resFood.json();
  const Productdata = await resProduct.json();
  const Orderdata = await resOrder.json();

  return {
    props: {
      foodList: Fooddata,
      productList: Productdata,
      orderList: Orderdata
    },
  };
}; 

export default index;
/*  {
        "_id": "61fe52d8efed32e003dba20e",
        "customer": "bilel",
        "address": "auyaguayguya",
        "total": 77.5,
        "phoneNumber": 20548774,
        "status": 4,
        "creationDate": "2022-02-05T10:35:04.295Z",
        "__v": 0
    } */