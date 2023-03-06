import {client} from "../../lib/client"
import Layout from "../../Compoenents/Layout"
import css from "../../styles/OrderPage.module.css"


export const getServerSideProps = async ({params})=>{
    const query = `*[_type == 'order' && _id == '${params.id}' ]`
    const order = await client.fetch(query);

    return {
        props: {
            order: order[0],
        }
    }
}

export default function Orders({order}){
    console.log(order.phone)
    return(
        <Layout>
            <div className={css.container}>
                <h2>Order in process</h2>
                <div className={css.details}>
                    <div>
                        <p>order ID</p>
                        <b>{order._id}</b>
                    </div>
                    <div>
                        <p>Customer Name</p>
                        <b>{order.name}</b>
                    </div>
                    <div>
                        <p>Phone</p>
                        <b>{order.phone}</b>
                    </div>
                    <div>
                        <p>Method</p>
                        <b>{order.method === 0 ? "Cash on delivery": "Online Payment (paid)"}</b>
                    </div>
                    <div>
                        <p>Total</p>
                        <b>$ {order.total}</b>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
