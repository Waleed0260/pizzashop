import React from "react";
import Layout from "../../Compoenents/Layout";
import css from "../../styles/Pizza.module.css";
import {AiFillCaretLeft} from "react-icons/ai"
import {AiFillCaretRight} from "react-icons/ai"


export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/products");
  const data = await res.json();
  const paths = data.map((curElement) => {
    return {
      params: {
        id: curElement.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:8000/products/${id}`);
  const data = await res.json();
  return {
    props: {
      curElement: data,
    },
  };
};

const Pizza = ({ curElement }) => {
  return (
    <Layout>
      <div className={css.single}>
        <div className={css.sinimg}>
          <img src={curElement.image} alt="" style={{borderRadius: "40px"}}/>
        </div>
        <div className={css.sintext}>
          <h1>{curElement.name}</h1>
          <p>{curElement.desc}</p>
          <b><span>$</span>15</b>
          <div className={css.sizebutton}>
            <h2> Size </h2>
            <button className={css.pricebutton}><b>Small</b></button>
            <button className={css.pricebutton}><b>Medium</b></button>
            <button className={css.pricebutton}><b>Large</b></button>
          </div>
          <div className={css.quantity}>
            <h2>Quantity</h2>
            <span><AiFillCaretLeft/></span>
            <b>1</b>
            <span><AiFillCaretRight/></span>
          </div>
          <button className={css.cart}><b>Add to cart</b></button>
        </div>
      </div>
    </Layout>
  );
};

export default Pizza;
