import { useState, useEffect } from 'react';
import type { User } from '../types/User';

export function useUserUpdate() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
      .then(res => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const updateUser = async (id: number, datosNuevos: { name: string; email: string }) => {
    try {
      setError(null);

      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...datosNuevos }),
      });

      if (!response.ok) throw new Error(`Error al actualizar el usuario ${id}`);

      const usuarioModificado: User = await response.json();

      setUsers(prevUsers =>
        prevUsers.map(user => (user.id === id ? usuarioModificado : user))
      );

      alert(`¡Usuario actualizado con éxito!`);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    }
  };

  return { users, loading, error, updateUser };
}