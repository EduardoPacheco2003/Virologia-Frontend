import React from "react";

const TextDecrypted = ({ decrypted }) => {
  return (
    <div className="text-encrypted">
      {decrypted && <p>{decrypted}</p>}
      {!decrypted && <p>Ingresa un texto a desencriptar</p>}
    </div>
  );
};

export default TextDecrypted;
