'use client';

import CartItem from "@/components/carts/CartItem";
import PageLayout from "../pageLayout";
import Envoice from "@/components/carts/Envoice";
import { useState } from "react";

export default function cart() {
    const savedCart = localStorage.getItem('cart')
    const [cart, setCart] = useState(savedCart !== null ? JSON.parse(savedCart) : [])

    const handleDelete = (id) => {
        if (savedCart && cart.length) {
            const prevCart = JSON.parse(savedCart)
            const restItems = cart.filter((item) => item.id !== id)
            setCart([...restItems])
            const newCart = prevCart.filter((item) => item.id !== id)
            localStorage.setItem('cart', JSON.stringify(newCart))

        }
    }

    let content;
    if (cart) content = cart.map((items, i) => <CartItem key={i} items={items} handleDelete={handleDelete} />)

    return (
        <PageLayout>
            <main className="flex flex-col items-center justify-between divide-y p-12">
                {!cart.length && <p className="py-5 text-base text-neutral-700 font-bold">No product added to cart!</p>}
                {cart.length > 0 && cart.map((items, i) => <CartItem key={i} items={items} handleDelete={handleDelete} />)}
                <Envoice cart={cart} />
            </main>
        </PageLayout>
    )
}