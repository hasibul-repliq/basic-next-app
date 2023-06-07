'use client';

import Link from "next/link";
import PageLayout from "../pageLayout";
import { useFormik } from "formik";
import { registrationSchema } from "./signupValidation";
import { useRouter } from "next/navigation";

export default function registration() {
    const router = useRouter();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const { values, errors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: registrationSchema,
        onSubmit: (values) => {
            console.log(values);
            router.push('/login');
        }
    })
    return (
        <PageLayout>
            <main className="flex flex-col items-center justify-between p-12">
                <h3 className="py-5 text-xl font-bold">Signup Now!</h3>
                <form className="flex flex-col gap-y-5 w-full md:w-2/5" onSubmit={handleSubmit} >
                    <div>
                        <input
                            className="p-3 border rounded-md w-full"
                            type="text"
                            placeholder="Enter your first name"
                            id='firstName'
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.firstName && touched.firstName && <p className='text-red-600 text-xs py-1'>{errors.firstName}</p>}
                    </div>
                    <div>
                        <input
                            className="p-3 border rounded-md w-full"
                            type="text"
                            placeholder="Enter your last name"
                            id='lastName'
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.lastName && touched.lastName && <p className='text-red-600 text-xs py-1'>{errors.lastName}</p>}
                    </div>
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
                    <div>
                        <input
                            className="p-3 border rounded-md w-full"
                            type="password"
                            placeholder="Re-type your password"
                            id='confirmPassword'
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.confirmPassword && touched.confirmPassword && <p className='text-red-600 text-xs py-1'>{errors.confirmPassword}</p>}
                    </div>
                    <button className="p-2 bg-slate-500 hover:bg-slate-400 rounded-md text-base text-white font-semibold tracking-wide" type="submit" >Signup</button>
                </form>
                <p className="py-2 text-sm text-neutral-600 font-medium ">Already registered? <Link className="font-bold" href="/login">Login</Link></p>
            </main>
        </PageLayout>
    )
}