import React, { useState } from 'react';
import { login } from '../services/authService';

function LoginPage() {
  const [role, setRole] = useState('');

  const handleLogin = () => {
    login(role);
  };

  return (
    <div>
      <h1>Login</h1>
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="">Selecione sua função</option>
        <option value="professor">Professor</option>
        <option value="secretaria">Secretaria</option>
        <option value="responsaveis">Responsáveis</option>
      </select>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default LoginPage;