import React, { useRef } from 'react'
import { BodyContainer, MainContainer, SubmitButton, TextAreaMessage, TextInput } from './contact-page-styles'
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa"
import { PiInstagramLogoFill } from "react-icons/pi";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { notification } from 'antd';


const ContactPage = () => {

    const myFormRef = useRef();
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'all' });

    const sendEmail = (e) => {
        e = e || window.event;
        e.preventDefault();

        emailjs.sendForm('service_85xusxj', 'template_sn9bv0k', myFormRef.current, 'C3wVW-jtxiYWD_d6f')
            .then((result) => {

                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        openNotification();
        myFormRef.current.reset();
    };

    const openNotification = () => {


        notification.success({
            message: `Email Sent Successfully`,
            description:
                'Your email has been sent successfully.',
            placement: 'bottomLeft',
        });
    };

    return (
        <MainContainer id="contact">
           
            <BodyContainer>
                <div className='flex flex-col  left-container'>
                    <div data-aos="zoom-in" className='flex flex-col '>
                        <p className='left-header text-[#FFF] text-5xl font-normal'>We would love to hear it from you.</p>
                        <br />
                        <span className='left-description text-[#FFF]'>We’re here to help and answer any question you might have. We look forward to hearing from you. </span>
                        <br />
                        <div className='left-social-media-container flex items-center gap-3'>
                            <a href="https://www.facebook.com/DDSSI/" target="_blank"><FaFacebook size={25} className='cursor-pointer text-white ' /></a>
                            <a href="www.instagram.com/solvbiz" target="_blank"><PiInstagramLogoFill size={25} className='cursor-pointer text-white' /></a>
                            <a href="https://www.youtube.com/channel/UCr5GylGgZ5lrJ1Ewc6JCVEw" target="_blank"><FaYoutube size={25} className='cursor-pointer text-white' /></a>
                            <a href="https://www.linkedin.com/company/digital-doors-software-systems-inc" target="_blank"><FaLinkedin size={25} className='cursor-pointer text-white' /></a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col bg-[#1595FF] right-container p-10 h-full'>
                    <p className='text-[#fff] text-3xl font-normal' >Get in touch.</p>
                    <form onSubmit={handleSubmit(() => sendEmail())} ref={myFormRef}>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <TextInput hasError={errors.name} {...register("name", {
                                        required: "Please input your full name!",
                                    })} size="large" type="text" placeholder="Full Name" name="name" />
                                    <p className='errorMessage text-sm text-red-700'>{errors.name?.message}</p>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <TextInput hasError={errors.email} {...register("email", {
                                        required: "Please input your email!",
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Plase input a valid email!"
                                        }
                                    })} size="large" placeholder="Email" name="email" />
                                    <p className='errorMessage text-sm text-red-700'>{errors.email?.message}</p>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                                    Contact Number
                                </label>
                                <div className="mt-2">
                                <TextInput hasError={errors.contact} {...register("contact", {
                                        required: "Please input your Contact Number!",
                                    })} size="large" placeholder="Contact Number" name="contact" />
                                    <p className='errorMessage text-sm text-red-700'>{errors.contact?.message}</p>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
                                    Company Name
                                </label>
                                <div className="mt-2">
                                <TextInput hasError={errors.company} {...register("company", {
                                        required: "Please input your Company Name!",
                                    })} size="large" placeholder="Company Name" name="company" />
                                    <p className='errorMessage text-sm text-red-700'>{errors.company?.message}</p>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
                                    Message
                                </label>
                                <div className="mt-2">
                                    <TextAreaMessage
                                        messageHasError={errors.message}
                                        {...register("message", {
                                            required: "Please input your message!",

                                        })}
                                        placeholder="Enter your Message"
                                        type="text"
                                        name="message"


                                    />
                                    <p className='errorMessage text-sm text-red-700'>{errors.message?.message}</p>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <span className='text-white'>By clicking "Send now", you agree to our <a href="/privacy-policy" target="_blank" className='text-[#343434] hover:underline '>Privacy Policy</a> and <a href="/terms-of-use" target="_blank" className='text-[#343434] hover:underline'>Terms of Use</a>  </span>
                            </div>
                            <div className="col-span-full">
                                <SubmitButton type="submit">Send Now</SubmitButton>
                            </div>
                        </div>
                    </form>
                </div>
            </BodyContainer>
        </MainContainer>
    )
}

export default ContactPage