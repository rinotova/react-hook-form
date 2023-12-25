import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { UserRegister, UserRegisterSchema } from '../models/UserRegister';
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from './FormField';

function UserForm() {
  const methods = useForm<UserRegister>({
    resolver: zodResolver(UserRegisterSchema),
  });

  const onFormSubmit: SubmitHandler<UserRegister> = (data) => {
    console.log(data);
    alert('Form submitted!');
  };
  return (
    <div className='flex flex-col gap-4 max-w-xl bg-emerald-600 min-h-screen items-center justify-center mx-auto'>
      <h1 className='text-3xl text-white antialiased'>React hook form</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onFormSubmit)}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[90%]'
        >
          <FormField label={'username'}>Username</FormField>
          <FormField label={'email'}>Email</FormField>
          <FormField label={'password'} type='password'>
            Password
          </FormField>
          <div className='flex items-center'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              SUBMIT
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default UserForm;
