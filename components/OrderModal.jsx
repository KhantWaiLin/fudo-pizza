import { Modal, useMantineTheme } from '@mantine/core';
import css from '../styles/OrderModal.module.css';
import { useState } from 'react';
import { createOrder } from '../lib/orderHandler';
import toast,{Toaster} from 'react-hot-toast';
import { useStore } from '../store/store';
import { useRouter } from 'next/router';

export default function OrderModal({opened,setOpened,PaymentMethod}) {

    const theme = useMantineTheme();
    const [FormData, setFormData] = useState({});
    const total = typeof window !== 'undefined' && localStorage.getItem("total");
    const resetCart = useStore((state)=>state.resetCart);
    const router = useRouter();


    const handleInput = (e)=>{
      setFormData({...FormData,[e.target.name] : e.target.value})

    }



    const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log(FormData);
      const id = await createOrder({...FormData,total,PaymentMethod})
      toast.success("Order Success!!");
      resetCart();
      {
        typeof window !== 'undefined' && localStorage.setItem("order",id);
      }
      console.log("Order placed",id);
      router.push(`/order/${id}`);
    }

    return(
        <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={()=>setOpened(null)}
      >
        <form action="" className={css.formContainer} onSubmit={handleSubmit}>
            <input onChange={handleInput} type="text" name='name' 
            required placeholder='Name'/>
            <input type="text" name='phone' onChange={handleInput}  required placeholder='Phone Number'/>
            <textarea onChange={handleInput}  name="address" id=""  placeholder="Address" rows={3}></textarea>
            <span>
                You will pay <span>$ {total}</span> on delivery.
            </span>

            <button type='submit' className='btn'>Place Order</button>
        </form>
        <Toaster />
      </Modal>
    );

}