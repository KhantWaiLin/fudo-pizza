import Layout from "../components/Layout";
import OrderModal from "../components/OrderModal";
import Head from "next/head";


export default function Success(){
    return(
        <Layout>
            <div>
                <Head>
                    <title>FUDO</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/Logo.png" />
                </Head>
            </div>
            <OrderModal opened={true} PaymentMethod={1} />
        </Layout>

    )
}