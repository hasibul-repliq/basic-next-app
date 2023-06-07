'use client';

import PageLayout from "@/app/pageLayout";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";


export default function ProductDetails({ params }) {
    const savedCart = localStorage.getItem("cart");
    const [cart, setCart] = useState(savedCart !== null ? JSON.parse(savedCart) : [])


    const productId = parseInt(params?.id)

    const { isLoading, error, data } = useQuery({
        queryKey: [`product/${productId}`, productId],
        queryFn: () =>
            fetch(`https://fakestoreapi.com/products/${productId}`).then(
                (res) => res.json(),
            )
    });

    const { id, title, description, price, category, image, rating } = data || {};

    //add to cart functionality
    const handleAddToCart = () => {
        if (savedCart) {
            const prevCart = JSON.parse(savedCart)
            const isAdded = prevCart.find((node) => node.id === id);
            if (!isAdded) {
                setCart([...cart, data])
                const newCart = [...prevCart, data]
                localStorage.setItem('cart', JSON.stringify(newCart))
            }
        } else {
            setCart([...cart, data])
            localStorage.setItem('cart', JSON.stringify([data]))
        }
    }

    //check added or not
    let isAdded
    if (cart.length) {
        isAdded = cart?.find((node) => node.id === id);
    }


    let content;
    if (isLoading) content = <p className="text-center text-base font-bold">Loading...</p>
    if (!isLoading && error) content = <p className="text-center text-red-600 text-base font-bold">Can't fetch data, something went wrong!</p>
    if (!isLoading && !error && data) content =
        <>
            <img className="w-3/4 md:w-2/5 lg:w-1/4" src={image} alt="product_image" />
            <div className="w-3/4 md:w-2/5 lg:w-1/4" >
                <p className="text-sm text-neutral-500 font-bold">{category}</p>
                <h4 className="text-xl text-neutral-800 font-semibold">{title}</h4>
                <p className="py-2 text-sm text-neutral-800 leading-tight">{description}</p>

                <div className="flex flex-col-reverse gap-y-1 md:flex-row justify-between md:items-center pt-5">
                    <p className='font-bold text-xl text-cyan-800'>${price}</p>
                    <div className="flex items-center">
                        <div className="flex justify-center items-center text-amber-500">
                            <MdOutlineStar /> {rating?.rate}
                        </div> |
                        <p className="text-sm text-cyan-800">{rating?.count} reviews</p>
                    </div>
                </div>
                {
                    !isAdded ?
                        <div className="mt-5 flex items-center gap-x-2 p-3 w-fit bg-black text-white cursor-pointer" onClick={handleAddToCart}>Add to cart  <FaShoppingCart /></div>
                        :
                        <div className="mt-5 flex items-center gap-x-2 p-3 w-fit bg-black text-white cursor-pointer">Product added  <FaShoppingCart /></div>
                }
            </div>
        </>

    return (
        <PageLayout>
            <main className="flex flex-col md:flex-row gap-5 md:gap-x-10 lg:gap-x-20 justify-center items-center p-12">
                {content}
            </main>
        </PageLayout>
    )
}