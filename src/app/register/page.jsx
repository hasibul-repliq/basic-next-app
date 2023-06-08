'use client';

import Link from "next/link";
import PageLayout from "../pageLayout";
import { useFormik } from "formik";
import { registrationSchema } from "./signupValidation";
import { useRouter } from "next/navigation";
import Input from "@/components/formfields/Input";

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
                    <Input
                        label="First name"
                        type="text"
                        placeholder="Enter your first name"
                        id='firstName'
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.firstName}
                        touched={touched.firstName}
                    />

                    <Input
                        label="Last name"
                        type="text"
                        placeholder="Enter your last name"
                        id='lastName'
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.lastName}
                        touched={touched.lastName}
                    />
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        id='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.email}
                        touched={touched.email}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        id='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.password}
                        touched={touched.password}
                    />

                    <Input
                        label="Re-type password"
                        type="password"
                        placeholder="Re-type your password"
                        id='confirmPassword'
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.confirmPassword}
                        touched={touched.confirmPassword}
                    />
                    <button className="p-2 bg-slate-500 hover:bg-slate-400 rounded-md text-base text-white font-semibold tracking-wide" type="submit" >Signup</button>
                </form>
                <p className="py-2 text-sm text-neutral-600 font-medium ">Already registered? <Link className="font-bold" href="/login">Login</Link></p>
            </main>
        </PageLayout>
    )
}