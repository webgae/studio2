import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Nuevo mensaje de contacto desde tu web</h1>
    <p>Has recibido un nuevo mensaje de:</p>
    <ul>
      <li><strong>Nombre:</strong> {name}</li>
      <li><strong>Correo:</strong> <a href={`mailto:${email}`}>{email}</a></li>
    </ul>
    <h2>Mensaje:</h2>
    <p>{message}</p>
  </div>
);

export default ContactEmail;
