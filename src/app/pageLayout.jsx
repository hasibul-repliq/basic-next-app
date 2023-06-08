'use client';
import Link from 'next/link';
import { useState } from 'react';
import { BiMenu } from "react-icons/bi";


export default function PageLayout({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 bg-white p-3 md:p-5 flex justify-between items-center shadow-sm">
                <div><Link href="/">
                    <img className='h-10 w-auto' src='/images/repliq2x-logo.png' alt='brand_logo' />
                </Link></div>

                <div className='hidden md:flex md:items-center gap-x-3 font-semibold'>
                    <Link className='text-black hover:text-neutral-600' href="/">Home</Link>
                    <Link className='text-black hover:text-neutral-600' href="/cart">Cart</Link>
                    <Link className='text-black hover:text-neutral-600' href="/login">Login</Link>
                </div>

                <div className='md:hidden text-lg cursor-pointer'>
                    <BiMenu onClick={() => setOpen(!open)} />
                </div>

                {
                    open &&
                    <div className='md:hidden w-3/12 px-1 py-3 rounded-md bg-white shadow-md absolute right-5 top-10'>
                        <div className='flex flex-col items-center gap-y-2 font-semibold divide-y divide-solid'>
                            <Link className='text-black hover:text-neutral-600 tracking-wide py-1' href="/">Home</Link>
                            <Link className='text-black hover:text-neutral-600 tracking-wide py-1' href="/cart">Cart</Link>
                            <Link className='text-black hover:text-neutral-600 tracking-wide py-1' href="/login">Login</Link>
                        </div>
                    </div>
                }
            </nav>
            {children}
        </>
    )
}