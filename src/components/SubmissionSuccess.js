import React from 'react';
import { useLocation } from 'react-router-dom';

function SubmissionSuccess() {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div>
      <h1>Thank you, {formData.name}! Your message has been sent.</h1>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Message:</strong> {formData.message}</p>
    </div>
  );
}

export default SubmissionSuccess;
