import React from 'react';
import './ProfileCard.css'; // Asegúrate de crear este archivo CSS para estilizar las tarjetas

const ProfileCard = ({ image, name, role }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`Foto de ${name}`} className="profile-image" />
      <h3 className="profile-name">{name}</h3>
      <p className="profile-role">{role}</p>
    </div>
  );
};

export default ProfileCard;
