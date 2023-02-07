import React from 'react'
import Layout from "../../Compoenents/Layout"
import css from "../../styles/Pizza.module.css"



export const getStaticPaths = async()=>{
    const res = await fetch("http://localhost:8000/products")
    const data = await res.json();
    const paths = data.map((curElement)=>{
        return{
            params: {
                id: curElement.id.toString(),
            }
        }
    })
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context)=>{
    const id =  context.params.id;
    const res = await fetch("http://localhost:8000/products/" + id);
    const data = await res.json();
    return {
        props: {
            curElement: data,
        }
    }
}



const Pizza = ({curElement}) => {
  return (
    <Layout>
        <div className={css.single}>
        <div className={css.sinimg}>
        <img src={curElement.image} alt=""/>
        </div>
        <div className={css.sintext}>
        <h1>{curElement.name}</h1>
        <p>{curElement.desc}</p>
        </div>
        </div>
    </Layout>
  )
}

export default Pizza
