import styles from "../styles/Slider.module.css"
import Image from 'next/image'
import { useState } from "react";

const Slider = () => {
   const [index, setIndex] = useState(0);
  const images = [
    "/images/img2.png",
    "/images/img1.png",
    "/images/img3.png"
  ];

  const handleSlider = (direction) =>{
      if(direction==="left"){
          //setIndex(index !== 0 ? index-1 : 2)
          if (index !==0) {
              setIndex(index-1);
          }else {
              setIndex(2);
          }
      }
      if(direction==="right"){
          if (index !==2) {
              setIndex(index+1);
          }else {
              setIndex(0);
          }
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftArrow} onClick={()=>handleSlider("left")}>
            <Image src="/images/arrowLeft.png" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}} >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i} >
            <Image src={img}  alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
     <div className={styles.rightArrow} onClick={()=>handleSlider("right")}>
            <Image src="/images/arrowRight.png" layout="fill" objectFit="contain"/>
      </div>
    </div>
  );
};
 
export default Slider;