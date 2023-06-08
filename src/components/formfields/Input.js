
export default function Input({ label, type, placeholder, id, value, onChange, onBlur, errors, touched }) {
    return (
        <div>
            <span className="text-sm text-neutral-600 font-bold">{label}</span>
            <input
                className="p-3 border rounded-md w-full"
                type={type}
                placeholder={placeholder}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {errors && touched && <p className='text-red-600 text-xs py-1'>{errors}</p>}
        </div>
    )
}