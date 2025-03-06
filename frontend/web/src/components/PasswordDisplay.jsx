import React, { useState } from 'react';

function PasswordDisplay() {
  const [password, setPassword] = useState('YourSecurePassword123!');

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div>
      <h2>Generated Password</h2>
      <input type="text" value={password} readOnly />
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
}

export default PasswordDisplay;
