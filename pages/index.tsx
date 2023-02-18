import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from '@/app/components/screens/home/HomePage'
import { NextPageAuth } from '@/app/providers/private.route.interface'



const Home: NextPageAuth = () => {
  return <HomePage />;
};

Home.isOnlyUser = true

export default Home;