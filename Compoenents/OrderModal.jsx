import React, { useState } from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import css from "../styles/OrderModal.module.css"
import { useStore } from '../store/store';
import { createOrder } from '../lib/orderhandler';
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from 'next/router';


const OrderModal = ({opened, setOpened, PaymentMethod}) => {
    const theme = useMantineTheme();
    const CartData = useStore((state)=> state.cart);
    const router  = useRouter();
    const[FormData, setFormData]= useState({})
    const total = ()=> CartData.pizzas.reduce((a,b)=> a+b.quantity * b.price, 0)

    const resetCart = useStore((state)=> state.resetCart)

    const handleInput = (e)=>{
      setFormData({...FormData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e)=>{
      e.preventDefault();
      const id = await createOrder({...FormData, total, PaymentMethod})
      toast.success("Order placed");
      // resetCart();
      {
        typeof window !== 'undefined' && localStorage.setItem('order', id)
      }
      router .push(`/order/${id}`)
    }


    
  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={()=> setOpened(null)}
    >
        <form action="" className={css.formContainer} onSubmit={handleSubmit}>
            <input onChange={handleInput} type="text" name="name" required placeholder='name' />
            <input onChange={handleInput} type="text" name="Phone" required placeholder='Phone number' />
            <textarea onChange={handleInput} name="address" cols={8} rows={3} placeholder="address"></textarea>
            <b>You will pay <span>$ {total()}</span> on delivery</b>
            <button type="submit" className='btn'>Place holder</button>
        </form>
        <Toaster/>
    </Modal>
  )
}

export default OrderModal
