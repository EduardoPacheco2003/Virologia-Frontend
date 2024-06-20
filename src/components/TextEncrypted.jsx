import React from "react";

const TextEncrypted = ({ encrypted }) => {
  return (
    <div className="text-encrypted">
      {encrypted && <p>{encrypted}</p>}
      {!encrypted && <p>Ingresa una contraseña a encriptar</p>}
    </div>
  );
};

export default TextEncrypted;
