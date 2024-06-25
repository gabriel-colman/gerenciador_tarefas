import { useState, useEffect } from 'react';
import axios from 'axios';

// Aqui vamos fazer uma requisição para a rota /api/user/profile, que retorna os dados do usuário autenticado.
export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get('/api/user/profile');
        setUser(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
