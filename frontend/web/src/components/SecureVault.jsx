import React from 'react';

function SecureVault() {
  // Mock list of saved passwords (we'll connect this to backend later)
  const savedPasswords = [
    { id: 1, name: 'Email Account', password: 'email_pass_123!' },
    { id: 2, name: 'Bank Account', password: 'bank_pass_456!' },
  ];

  return (
    <div>
      <h2>Secure Vault</h2>
      <ul>
        {savedPasswords.map((entry) => (
          <li key={entry.id}>
            <strong>{entry.name}</strong>: {entry.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecureVault;
