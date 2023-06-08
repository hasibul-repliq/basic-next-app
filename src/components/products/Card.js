import { MdOutlineStar } from 'react-icons/md';
import { useRouter } from 'next/navigation';

export default function Card({ data }) {
    const router = useRouter();
    const { id, title, price, category, image, rating } = data || {};


    return (
        <div className="flex flex-col p-3 rounded-md bg-neutral-100 shadow-sm hover:shadow-lg w-full">
            <div className='flex justify-center w-full bg-white rounded-md p-2'>
                <img className="w-fit h-36" src={image} alt="product" />
            </div>

            <div className="py-2 border-b">
                <p className="text-sm text-neutral-500 font-bold">{category}</p>
                <h5 className="text-xl text-neutral-800 font-semibold cursor-pointer hover:underline" onClick={() => router.push(`products/${id}`)} >{title.length > 12 ? title.slice(0, 12) + '...' : title}</h5>
                <div className='flex justify-start items-center text-amber-500'>
                    <MdOutlineStar /> {rating?.rate}
                </div>
            </div>

            <div className='flex justify-between items-center pt-2'>
                <p className='font-bold text-base text-stone-700'>${price}</p>
                {/* <FaShoppingCart className=' text-neutral-400 hover:text-amber-500 cursor-pointer' /> */}
            </div>
        </div>
    )
}