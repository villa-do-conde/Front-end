export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
  };
  
  export const login = (role) => {

    if (role === 'professor') {
      localStorage.setItem('authToken', 'validToken');
      window.location.href = '/professor';
    } else if (role === 'secretaria') {
      localStorage.setItem('authToken', 'validToken');
      window.location.href = '/secretaria';
    } else if (role === 'responsaveis') {
      localStorage.setItem('authToken', 'validToken');
      window.location.href = '/responsaveis';
    }
  };