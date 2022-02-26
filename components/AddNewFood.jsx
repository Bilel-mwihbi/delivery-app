import styles from "../styles/Add.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const AddNewFood = ({setClose}) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDesc] = useState(null);
  const [category, setCate] = useState("pizza");
  const [price, setPrices] = useState([]);
  const [options, setOptions] = useState([]);
  const router = useRouter();

  const handlePrices = (e, index) => {
    const allPrices = price;
    allPrices[index] = e.target.value;
    setPrices(allPrices);
  };

  
  
  const handleOptions=(tab)=>{
    let myObj={}
    let myArray=[];
    console.log(tab)
    for(let i=0;i<tab.length;i++){
      myObj={text:tab[i]}
      myArray.push(myObj)

  }
  
 
  return myArray;

  }
  const handleSubmit = async()=>{
     const formData = new FormData();
    console.log("inside fn")
    formData.append("file", image);
    formData.append("upload_preset", "uploads");
    

     const response = await fetch("https://api.cloudinary.com/v1_1/dbwyvcnoj/image/upload", {
      method: 'POST',
      body: formData
    })
    .then(response=>response.json())
    .then(data => {
      const newFood = {
        title,
        description,
        img: data.url,
        category,
        price,
        options:handleOptions(options.split(" ")),
        
      };
      console.log(JSON.stringify(newFood));
      fetch("http://localhost:3000/api/foods",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newFood)
      })
      .then(response => console.log("fetch response"+response.status))
      .then(data =>console.log(data))
      .catch(error => console.log("error while inserting"))
      
    })
   
    .catch(error => console.log(error))
    
   
     
  }
    return ( 
        <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(false)} className={styles.close}>
          X
        </span>
        <h2>Add  New Food</h2>
      
        <div className={styles.item}>
            <label>title:</label>
            <input className={styles.input}
             type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required 
             />
        </div>
        <div className={styles.item}>
              <label>desc:</label>
              <textarea required value={description} onChange={(e)=>setDesc(e.target.value)}></textarea>
        </div>
      <div className={styles.item}>
          <label>category</label>
          <select   required value={category} onChange={(e)=>setCate(e.target.value)}>
            <option value="meal">meal</option>
            <option value="pizza">pizza</option>
          </select>
      </div>
      <div className={styles.item}>
        <label>choose an image</label>
         <input className={styles.input} type="file"  onChange={(e) => setImage(e.target.files[0])} />
      </div>  
      <div className={styles.item}>
        <label>prices</label>
         <input className={styles.input}
         defaultValue="0"
          type="number"
          placeholder="small for pizza /no coke for meal"
          onChange={(e)=>handlePrices(e, 0)}
        />
         <input className={styles.input}
         defaultValue="0"
          type="number"
          placeholder="medium for pizza /with coke for meal"
          onChange={(e)=>handlePrices(e, 1)}
        />
         <input className={styles.input}
         defaultValue="0"
          type="number"
          placeholder="Large for pizza"
          onChange={(e)=>handlePrices(e, 2)}
        />
      </div>  
        <div className={styles.item}>
          <label>options</label>
          <textarea required value={options} onChange={(e)=>setOptions(e.target.value)}></textarea>
        </div>
        <button className={styles.addButton} onClick={handleSubmit}>Add food</button>
        
      
      </div>
    </div>
     );
}
 
export default AddNewFood;