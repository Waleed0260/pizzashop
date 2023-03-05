import Head from "next/head";
import Hero from "../Compoenents/Hero";
import Layout from "../Compoenents/Layout";
import Menu from "../Compoenents/Menu";
import Service from "../Compoenents/Service";
import { client } from "../lib/client";
import css from "../styles/Home.module.css"



export default function Home({pizzas}) {
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>Fudo</title>
          <meta name="description" content="Generated by create-next-app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        <main>
          <Hero/>
          <Service/>
          <Menu data={pizzas}/>
          
        </main>
      </div>
      </Layout>
      
  );
}



export const getServerSideProps = async()=>{
  const query = '*[_type == "post"]';
  const pizzas = await client.fetch(query);
  return {
    props: {
      pizzas,
    }
  }
}