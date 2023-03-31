import React, { useState } from "react";
import Layout from "../Compoenents/Layout";
import css from "../styles/cart.module.css";
import Image from "next/image";
import { useStore } from "../store/store";
import toast, { Toaster } from "react-hot-toast";
import OrderModal from "../Compoenents/OrderModal";
import { urlFor } from "../lib/client";

const cart = () => {
  const CartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);

  const [PaymentMethod, setPaymentMethod] = useState(null);

  const handleRemove = (i) => {
    removePizza(i);
    toast.error("Items removed");
  };

  const total = () =>
    CartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);

  const handleonDelivery = () => {
    setPaymentMethod(0);
    typeof window !== "undefined" && localStorage.getItem("total", total());
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.details}>
          <table className={css.table}>
            <thead className={css.thead}>
              <tr>
                <th>Pizza</th>
                <th>Name</th>
                <th>Size</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className={css.tbody}>
              {CartData.pizzas.length > 0
                ? CartData.pizzas.map((pizza, i) => {
                    const src = urlFor(pizza.image).url();
                    return (
                      <tr key={i}>
                        <td className={css.imageTd}>
                          <Image
                            loader={() => src}
                            src={src}
                            alt=""
                            objectFit="cover"
                            width={85}
                            height={85}
                          />
                        </td>
                        <td>{pizza.name}</td>
                        <td>
                          {pizza.size === 0
                            ? "Small"
                            : pizza.size === 1
                            ? "Medium"
                            : "Large"}
                        </td>
                        <td>{pizza.price}</td>
                        <td>{pizza.quantity}</td>
                        <td>{pizza.price * pizza.quantity}</td>
                        <td
                          style={{
                            color: "var(--themeRed)",
                            cursor: "pointer",
                          }}
                          onClick={() => handleRemove(i)}
                        >
                          X
                        </td>
                      </tr>
                    );
                  })
                : "You have not added any item"}
            </tbody>
          </table>
        </div>
        <div className={css.cart}>
          <h2>Cart</h2>
          <div className={css.CartDetails}>
            <div>
              <span>Items</span>
              <span>{CartData.pizzas.length}</span>
            </div>
            <div>
              <span>Total</span>
              <span>$ {total()}</span>
            </div>
          </div>
          <div className={css.buttons}>
            <button className={css.btn} onClick={handleonDelivery}>
              Pay on delivery
            </button>
            <button className={css.btn}>Pay now</button>
          </div>
        </div>
      </div>
      <Toaster />
      <OrderModal
        opened={PaymentMethod === 0}
        setOpened={setPaymentMethod}
        PaymentMethod={PaymentMethod}
      />
    </Layout>
  );
};

export default cart;
