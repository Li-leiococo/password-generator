import React, { useState } from 'react';

function Settings() {
  const [easyTypingMode, setEasyTypingMode] = useState(false);

  const handleToggle = () => {
    setEasyTypingMode(!easyTypingMode);
  };

  return (
    <div>
      <h2>Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={easyTypingMode}
          onChange={handleToggle}
        />
        Enable Easy Typing Mode
      </label>
    </div>
  );
}

export default Settings;
