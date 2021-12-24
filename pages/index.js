import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <main className={styles.homeCard}>
      <img src="/me.jpeg" alt="My picture"></img>
      <div className={styles.description}>
        <p>Hey there, </p>
        <p>My name is Ibrahim and I am a full stack developer </p>
      </div>
    </main>
  )
}
Home.getLayout = page => (
  <Layout>
    {page}
  </Layout>
)
export default Home
