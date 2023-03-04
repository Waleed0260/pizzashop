import React, { useState } from "react";
import Layout from "../../Compoenents/Layout";
import css from "../../styles/Pizza.module.css";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { useStore } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";
import { client, urlFor } from "../../lib/client";



export async function getStaticPaths() {
  const paths = await client.fetch(
    '*[_type == "post" && defined(slug.current)][].slug.current'
  );
  return {
    paths: paths.map((slug)=> ({params: {slug}})),
    fallback: "blocking"  
  };
};

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type == "post" && slug.current == '${slug}'][0]`
  )
  return{
    props: {
      pizza,
    }
  }
};

const Pizza = ({ pizza }) => {
  const [size, setSize] = useState(1);
  const [Quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };

  const addPizza = useStore((state) => state.addPizza);
  const addToCart = () => {
    addPizza({ ...pizza, price: pizza.price[size],  quantity: Quantity, size: size });
    toast.success("Added to cart")
  };

  const src = urlFor(pizza.image).url();
  return (
    <Layout>
      <div className={css.single}>
        <div className={css.sinimg}>
          <img src={src} alt="" style={{ borderRadius: "40px" }} />
        </div>
        <div className={css.sintext}>
          <h1>{pizza.name}</h1>
          <p>{pizza.desc}</p>
          <b>
            <span>$</span>
            {pizza.price[size]}
          </b>
          <div className={css.sizebutton}>
            <h2> Size </h2>
            <button className={size === 0 ? css.selected : css.pricebutton} onClick={() => setSize(0)}>
              <b>Small</b>
            </button>
            <button className={size === 1 ? css.selected : css.pricebutton} onClick={() => setSize(1)}>
              <b>Medium</b>
            </button>
            <button className={size === 2 ? css.selected : css.pricebutton} onClick={() => setSize(2)}>
              <b>Large</b>
            </button>
          </div>
          <div className={css.quantity}>
            <h2>Quantity</h2>
            <span>
              <AiFillCaretLeft onClick={()=>handleQuantity("dec")} />
            </span>
            <b>{Quantity}</b>
            <span>
              <AiFillCaretRight onClick={()=>handleQuantity("inc")} />
            </span>
          </div>
          <button className={css.cart} onClick={addToCart}>
            <b>Add to cart</b>
          </button>
          <Toaster/>
        </div>
      </div>
    </Layout>
  );
};

export default Pizza;
