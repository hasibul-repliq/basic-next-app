import { MdDelete } from "react-icons/md";

export default function CartItem({ items, handleDelete }) {
    const { id, title, price, image } = items || {};
    return (
        <div className="flex flex-row justify-between items-center p-5 w-full md:w-4/5 lg:w-3/4">
            <div className="flex items-center w-3/5 md:w-2/5 gap-x-2 md:gap-x-5">
                <div className="flex justify-center w-2/5 md:w-1/4">
                    <img className="h-auto w-auto" src={image} alt="product_image" />
                </div>
                <div>
                    <p className="text-lg font-bold">{title.length > 10 ? title.slice(0, 10) + '...' : title}</p>
                    <p className="text-sm font-semibold text-neutral-600">${price}</p>
                </div>
            </div>

            {/* <div className="flex items-center">
                <div className="flex justify-center items-center px-2 py-1 md:px-3 md:py-2 bg-black text-white text-xs font-semibold cursor-pointer">-</div>
                <div className="flex justify-center items-center px-2 py-1 md:px-3 md:py-2 bg-white text-sm text-neutral-600 font-bold">1</div>
                <div className="flex justify-center items-center px-2 py-1 md:px-3 md:py-2 bg-black text-white text-xs font-semibold cursor-pointer">+</div>
            </div> */}

            {/* <div>
                <p className=" text-sm font-semibold text-neutral-800">$256</p>
            </div> */}

            <div className="text-3xl md:text-5xl">
                <MdDelete className="cursor-pointer" onClick={() => handleDelete(id)} />
            </div>

        </div>
    )
}