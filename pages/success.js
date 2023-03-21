import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        
        <main className={styles.main}>

        <div className={styles.grid}>
           <div className={styles.card}>
        <img className={styles.logosuccess} src="logo.svg" alt="" />
         <h3 className={styles.success}>Success!</h3>
           
           </div> 
         </div> 

      </main>
     
    </div>
  )
}