import styles from '../styles/Home.module.css'
import Router, { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
        
        <img className={styles.logo} src="Logo.svg" alt="" />
        <main className={styles.main}>
        <h1 className={styles.title}> </h1>
            
         <div className={styles.grid}>
          <div className={styles.card}>
            <h1 >Welcome to Systempackage</h1>
             <div className={styles.username}>
              <input type="text" name="" id="" className={styles.input} placeholder=' Username' />
             <select name="" id="" className= { styles.name}>
              <option value="" className={styles.lastpart}>@gmail.com</option>
              <option value="">@yahoo.com</option>
             </select>
             </div>
             <div className={styles.username}>
              <input type="text" name="" id="" className={styles.password} placeholder=' Password' />
             </div>
             <button onClick={()=>{router.push("/validate")}} className={styles.btn }>Next</button>
             <a href="" className={styles.fgt}>Forgot Password?</a>
          </div> 

          <div className={styles.cardHide } >
            <div className={styles.secondpart}>
             <img src="/image.svg" alt="" className={styles.img} />
            <h6>NEW</h6>
              <h4>Developer handoff improvements</h4>
              <p>You will now see a highlight around Symbols on the Canvas and in the Inspector.</p>
            </div>
          </div>

        </div>
      </main>
         <div className={styles.signup}>Not member? <a href="">Create Account</a></div>

     
    </div>
  )
}


