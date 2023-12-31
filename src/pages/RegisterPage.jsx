import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };

  return (
    <main>
      <section className='register-page'>
        <h2>Register</h2>
        <RegisterInput register={onRegisterHandler} />
        <p>Kembali ke <Link to="/">Masuk</Link></p>
      </section>
    </main>
  );
};

export default RegisterPage;
