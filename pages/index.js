import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PEI Municipal Election 2022</title>
        <meta name="description" content="Complete coverage of the PEI 2022 Municipal Election" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          PEI Municipal Election 2022
        </h1>

        <div className={styles.grid}>
            <div className={styles.card}>Election By Municipality</div>
            <div className={styles.card}>Election Schedule</div>
            <div className={styles.card}>Municipal Status Reports</div>
        </div>
      </main>

      <footer className={styles.footer}>
          <span className={styles.logo}>
          Complete coverage of the PEI 2022 Municipal Election
          </span>
      </footer>
    </div>
  )
}
