import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'

const Home = () => {
  const introMessage = "My name is Ibrahim and I am a full stack developer";
  const welcomeMessage = "Welcome to my website"
  const [message, setMessage] = useState("");
  const [restart, setRestart] = useState(false);
  const [currentMessage, setCurrMessage] = useState(introMessage.slice(0));
  
  const typing = (i, message) => {
    if (i > introMessage.length) {
      setTimeout(() => setRestart(true), 1000)
      return;
    }
    setMessage(message.slice(0, i))
    setTimeout(() => typing(i + 1, message), 100)
  }
  const deleting = (i, message) => {
    if (i < 0) {
      if (currentMessage == introMessage)
        setCurrMessage(welcomeMessage.slice(0))
      else
        setCurrMessage(introMessage.slice(0))
      setRestart(false)
      return;
    }
    setMessage(message.slice(0, i))
    setTimeout(() => deleting(i - 1, message), 50)
  }
  useEffect(() => {
    if (!restart)
      typing(1, currentMessage)
    else
      deleting(currentMessage.length, currentMessage)
  }, [restart]);

  return (
    <main>
      <section className={styles.homeCard}>
        <img src="/me.jpeg" alt="My picture"></img>
        <div className={styles.description}>
          <span>Hey there, </span>
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
