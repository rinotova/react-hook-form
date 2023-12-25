import { useFormContext } from 'react-hook-form';
import FormFieldError from './FormFieldError';
import React from 'react';
import { UserRegister } from '../models/UserRegister';

const FormField = ({
  children,
  label,
  type = 'text',
}: {
  children: React.ReactNode;
  label: keyof UserRegister;
  type?: string;
}) => {
  const {
    formState: { errors },
    register,
  } = useFormContext<UserRegister>();

  return (
    <>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor={label}
      >
        {children}
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        {...register(label)}
        type={type}
        id={label}
      />
      <FormFieldError show={!!errors[label]}>
        {errors[label]?.message}
      </FormFieldError>
    </>
  );
};

export default FormField;
