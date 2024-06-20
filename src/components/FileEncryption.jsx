import React from "react";
import FormFileEncryption from "./FormFileEncryption";
import FormFileDecryption from "./FormFileDecryption";

const FileEncryption = () => {
  return (
    <section>
      <h1>Encriptador de Archivos</h1>
      <FormFileEncryption />
      <FormFileDecryption />
    </section>
  );
};

export default FileEncryption;
