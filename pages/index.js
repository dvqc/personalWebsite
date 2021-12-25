import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'

const Home = () => {
  const introMessage = "My name is Ibrahim and I am a full stack developer";
  const [message, setMessage] = useState("");
  const [restart, setRestart] = useState(false)
  const typing = (i) => {
    if (i > introMessage.length) {
      setRestart(true)
      return;
    }
    setMessage(introMessage.slice(0, i))
    setTimeout(() => typing(i + 1), 150)
  }
  const deleting = (i) => {
    if (i < 0) {
      setRestart(false)
      return;
    }
    setMessage(introMessage.slice(0, i))
    setTimeout(() => deleting(i - 1), 80)
  }
  useEffect(() => {
    if (!restart)
      typing(1)
    else
      deleting(introMessage.length)
  }, [restart]);

  return (
    <main>
      <section className={styles.homeCard}>
        <img src="/me.jpeg" alt="My picture"></img>
        <div className={styles.description}>
          <p>Hey there, </p>
          <p >{message}</p>
        </div>
      </section>
    </main >
  )
}
Home.getLayout = page => (
  <Layout>
    {page}
  </Layout>
)
export default Home
