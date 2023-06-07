

export default function Envoice({ cart }) {

    let total;
    if (cart?.length) total = cart.reduce((acc, curr) => acc + curr.price, 0)
    return (
        <div className="w-full p-5 flex gap-3 flex-col md:w-4/5 lg:w-3/4 divide-y">
            <div className="flex justify-between items-center">
                <p className="font-bold text-base">Subtotal:</p>
                <p className="font-semibold text-sm text-neutral-700">$ {total ? total : 0}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-bold text-base">Vat:</p>
                <p className="font-semibold text-sm text-neutral-700">0 %</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-bold text-base">Grandtotal:</p>
                <p className="font-semibold text-sm text-neutral-700">$ {total ? total : 0}</p>
            </div>
            <div className="mt-5 flex items-center gap-x-2 p-3 w-fit bg-black text-white cursor-pointer">Check out</div>
        </div>
    )
}