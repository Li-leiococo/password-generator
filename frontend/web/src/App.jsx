import React from 'react';
import GeneratorForm from './components/GeneratorForm';
import PasswordDisplay from './components/PasswordDisplay';
import SecureVault from './components/SecureVault';
import Settings from './components/Settings';

function App() {
  return (
    <div>
      <h1>Password Generator</h1>
      <GeneratorForm />
      <PasswordDisplay />
      <SecureVault />
    </div>
  );
}

export default App;
