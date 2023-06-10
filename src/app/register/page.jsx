'use client';

import Link from "next/link";
import PageLayout from "../pageLayout";
import { useFormik } from "formik";
import { registrationSchema } from "./signupValidation";
import { useRouter } from "next/navigation";
import Input from "@/components/formfields/Input";
import { useQuery } from "@tanstack/react-query";


export default function registration() {
    const router = useRouter();

    const initialValues = {
        firstName: '',
        lastName: '',
        division: '',
        district: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    //fetch divisions
    const { isLoading: divisionLoading, error: divisionError, data: divisionList } = useQuery({
        queryKey: ['divisions'],
        queryFn: () =>
            fetch('https://bdapis.com/api/v1.1/divisions').then(
                (res) => res.json(),
            )
    });


    function registerFormik() {
        const { values, errors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
            initialValues: initialValues,
            validationSchema: registrationSchema,
            onSubmit: (values) => {
                console.log(values);
                router.push('/login');
            }
        })

        //fetch districts depend on selected division
        const { isLoading: districtLoading, error: districtError, data: districtList } = useQuery({
            queryKey: ['districts', values.division],
            queryFn: () =>
                fetch(`https://bdapis.com/api/v1.1/division/${values.division}`).then(
                    (res) => res.json(),
                )
        });

        if (divisionLoading) {
            return "Form Loading..."
        }

        if (!divisionLoading && divisionError || divisionList) {
            return (
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
                    <div className="w-full flex flex-col md:flex-row md:justify-between md:gap-x-5 gap-y-5">
                        <div className="flex flex-col w-full md:w-1/2">
                            <span className="text-sm text-neutral-600 font-bold">Division</span>
                            <select
                                className="p-3 border rounded-md w-full"
                                id="division"
                                value={values.division}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option className="text-neutral-400 text-sm font-bold" value="" disabled selected>Select your division</option>
                                {
                                    divisionList?.data?.map((data, i) => <option key={i} value={data?._id}>{data?.division}</option>)
                                }
                            </select>
                            {errors.division && touched.district && <p className='text-red-600 text-xs py-1'>{errors.division}</p>}
                        </div>
                        <div className="flex flex-col w-full md:w-1/2">
                            <span className="text-sm text-neutral-600 font-bold">Districts</span>
                            <select
                                className="p-3 border rounded-md w-full"
                                id="district"
                                value={values.district}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option className="text-neutral-400 text-sm font-bold" value="" disabled selected>Select your district</option>
                                {!districtLoading && !districtError && districtList &&
                                    districtList?.data?.map((data, i) => <option key={i} value={data?._id}>{data?.district}</option>)
                                }
                            </select>
                            {errors.district && touched.district && <p className='text-red-600 text-xs py-1'>{errors.district}</p>}
                        </div>
                    </div>
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
                        label="Confirm password"
                        type="password"
                        placeholder="Confirm your password"
                        id='confirmPassword'
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.confirmPassword}
                        touched={touched.confirmPassword}
                    />
                    <button className="p-2 bg-slate-500 hover:bg-slate-400 rounded-md text-base text-white font-semibold tracking-wide" type="submit" >Register</button>
                </form>
            )
        }
    }


    return (
        <PageLayout>
            <main className="flex flex-col items-center justify-between p-12">
                <h3 className="py-5 text-xl font-bold">Signup Now!</h3>
                {registerFormik()}
                <p className="py-2 text-sm text-neutral-600 font-medium ">Already registered? <Link className="font-bold" href="/login">Login</Link></p>
            </main>
        </PageLayout>
    )
}