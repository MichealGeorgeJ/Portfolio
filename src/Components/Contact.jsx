import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = ({ id }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().required('Email is required').email('Enter a valid email'),
      message: yup.string().required('Enter your message')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await emailjs.sendForm('service_wsecvk6', 'template_ltxbfxb', '#contactForm', 'ukcMmZ7E0p5b7P9OW');
        toast.success('Message sent successfully');
        resetForm();
      } catch (error) {
        toast.error('Failed to send message');
        console.error('Error:', error);
      }
    }
  });

  return (
    <div id={id}>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-6 col-sm-12">
            <h1>Contact</h1>
            <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: ".5rem" }} className="card p-2">
              <form id="contactForm" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input style={{ border: "1px solid #66ccff" }} type="text" className="form-control" id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name} />
                  {formik.touched.name && formik.errors.name ? (
                    <div style={{ color: 'red' }}> {formik.errors.name} </div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input style={{ border: "1px solid #66ccff" }} type="email" className="form-control" id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: 'red' }}> {formik.errors.email} </div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea style={{ border: "1px solid #66ccff", borderRadius: ".2rem" }} className='w-100 px-2' name="message" id="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message} />
                  {formik.touched.message && formik.errors.message ? (
                    <div style={{ color: 'red' }}> {formik.errors.message} </div>
                  ) : null}
                </div>
                <div className="form-group d-flex justify-content-center">
                  <button type='submit' style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: ".5rem", backgroundColor: "#66ccff" }} className="btn text-white "> Send Message </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;