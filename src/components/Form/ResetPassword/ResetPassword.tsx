import React from 'react';

import Button from '@/components/Button/Button';
import Form from '@/components/Form/Form';
import TextInput from '@/components/TextInput/TextInput';

type ResetPasswordProps = {
  handleChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  handleResetPassword: React.FormEventHandler<HTMLFormElement>;
  loading: boolean;
};

const ResetPassword: React.FC<ResetPasswordProps> = ({
  handleChangeInput,
  handleResetPassword,
  loading,
}) => {
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
        text={loading ? 'Resetting Password...' : 'Reset Password'}
        buttonType="submit"
      />
    </Form>
  );
};

export default ResetPassword;
