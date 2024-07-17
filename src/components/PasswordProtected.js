import React, { useState } from 'react';
import Photos from './Photos';

const PasswordProtected = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const correctPassword = 'your_password_here';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="password-protected">
      {authenticated ? (
        <Photos />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Enter Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default PasswordProtected;
