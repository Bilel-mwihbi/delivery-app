import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css";

const login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();
    
    
  const handleLogin = async () => {
    try {
      const data ={username,password}
      
      await fetch("http://localhost:3000/api/login",{
          method:"POST",
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(data),
      })
      
      .then(response => 
        { if (response.status === 200) {
           router.push("/admin")
        } else {
                setError(true);
        }})
    } catch (err) {
        console.log(err)
      
    }
  };
    return ( 
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
     );
}
 
export default login;