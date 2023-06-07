'use client';

import Link from "next/link";
import PageLayout from "../pageLayout";
import { useFormik } from "formik";
import { loginSchema } from "./loginValidation";
import { useRouter } from "next/navigation";


export default function login() {
    const router = useRouter();

    const initialValues = {
        email: '',
        password: ''
    }

    const { values, errors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log(values)
            router.push('/')
        }
    })
    return (
        <PageLayout>
            <main className="flex flex-col items-center justify-between p-12">
                <h3 className="py-5 text-xl font-bold">Login Now!</h3>
                <form className="flex flex-col gap-y-5 w-full md:w-2/5" onSubmit={handleSubmit}>
                    <div>
                        <input
                            className="p-3 border rounded-md w-full"
                            type="email"
                            placeholder="Enter your email"
                            id='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email && <p className='text-red-600 text-xs py-1'>{errors.email}</p>}
                    </div>
                    <div>
                        <input
                            className="p-3 border rounded-md w-full"
                            type="password"
                            placeholder="Enter your password"
                            id='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password && <p className='text-red-600 text-xs py-1'>{errors.password}</p>}
                    </div>
                    <button className="p-2 bg-slate-500 hover:bg-slate-400 rounded-md text-base text-white font-semibold tracking-wide" type="submit">Login</button>
                </form>
                <p className="py-2 text-sm text-neutral-600 font-medium ">Not registered yet? <Link className="font-bold" href="/register">Signup</Link></p>
            </main>
        </PageLayout>
    )
}