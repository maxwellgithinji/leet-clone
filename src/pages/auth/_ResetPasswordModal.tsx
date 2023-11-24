import React, { useState } from 'react';

import ResetPassword from '@/components/Form/ResetPassword/ResetPassword';
import Modal from '@/components/Modal/Modal';

type ResetPasswordModalProps = {
  closeModal: React.MouseEventHandler<SVGElement>;
  loading: boolean;
};

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({
  closeModal,
  loading,
}) => {
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
    <Modal
      closeModal={closeModal}
      modalBody={
        <ResetPassword
          handleChangeInput={handleChangeInput}
          handleResetPassword={handleResetPassword}
          loading={loading}
        />
      }
    />
  );
};

export default ResetPasswordModal;
