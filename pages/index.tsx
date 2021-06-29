import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Pride flag</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.flag}></main>
    </div>
  )
}

export default Home
