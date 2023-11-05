import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'
import { Button, Layout } from 'antd';
import Header from './components/Header/header';
import FormLogin from './components/Form_Login/form__login';

export default function Home() {

  return (
    <main className={styles.main}>
      <Header></Header>


      <div>
        <h1>Hoàng Minh Tâm</h1>
      </div>

      <FormLogin></FormLogin>


    </main>
  )
}
