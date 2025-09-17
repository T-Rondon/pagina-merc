import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">Mi Perfil</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default Profile;