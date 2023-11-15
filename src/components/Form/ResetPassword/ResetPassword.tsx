import React, { useState } from 'react';

import Button from '@/components/Button/Button';
import Form from '@/components/Form/Form';
import TextInput from '@/components/TextInput/TextInput';

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [inputs, setInputs] = useState({
    email: '',
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleResetPassword = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <Form headingText="Reset Your Password" onSubmit={handleResetPassword}>
      <p className="text-sm text-white">
        Forgotten your password? Enter your email address below and we&apos;ll
        send you an email to reset your password
      </p>
      <TextInput
        id="email"
        name="email"
        type="email"
        label="Your Email"
        required
        placeholder="jondoe@email.com"
        onChange={handleChangeInput}
      />

      <Button
        buttonClass="secondary"
        text="Reset Password"
        buttonType="submit"
      />
    </Form>
  );
};

export default ResetPassword;
