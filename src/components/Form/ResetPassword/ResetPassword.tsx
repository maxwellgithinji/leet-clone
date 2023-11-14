import React from 'react';

import Button from '@/components/Button/Button';
import Form from '@/components/Form/Form';
import TextInput from '@/components/TextInput/TextInput';

type ResetPasswordProps = {
  submitForm: React.MouseEventHandler<HTMLButtonElement>;
};

const ResetPassword: React.FC<ResetPasswordProps> = ({ submitForm }) => {
  return (
    <Form headingText="Reset Your Password">
      <p className="text-sm text-white">
        Forgotten your password? Enter your email address below and we&apos;ll
        send you an email to reset your password
      </p>
      <TextInput
        id="email"
        name="email"
        type="email"
        label="Your Email"
        placeholder="jondoe@email.com"
      />

      <Button
        buttonClass="primary"
        text="Reset Password"
        buttonType="submit"
        onClick={submitForm}
      />
    </Form>
  );
};

export default ResetPassword;
