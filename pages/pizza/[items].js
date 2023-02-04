import React from 'react'
import Layout from "../../Compoenents/Layout"


export const getStaticPaths = async()=>{
    const res = await fetch("http://localhost:3000/api/hello")
    const data = await res.json();
    const paths = data.map((curElement)=>{
        return{
            params: {
                items: curElement.id.toString(),
            }
        }
    })
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context)=>{
    const id = context.params;
    const res = await fetch(`http://localhost:3000/api/hello/${id}`);
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
  }



const Pizza = ({data}) => {
  return (
    <Layout>
        Pizza page
    </Layout>
  )
}

export default Pizza
