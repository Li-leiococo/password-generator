import React from 'react';

function GeneratorForm() {
  return (
    <div>
      <h2>Generate Password</h2>
      <form>
        <label>
          Length:
          <input type="number" min="8" max="64" defaultValue="16" />
        </label>
        <button type="submit">Generate</button>
      </form>
    </div>
  );
}

export default GeneratorForm;
