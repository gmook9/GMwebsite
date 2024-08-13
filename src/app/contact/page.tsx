'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Message Sent!');
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl text-white mb-4 text-center">Contact Me</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Message</span>
            </label>
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
