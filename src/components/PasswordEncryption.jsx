import { useState } from "react";
import FormEncrypt from "./FormEncrypt";
import TextEncrypted from "./TextEncrypted";
import FormDecrypt from "./FormDecrypt";
import TextDecrypted from "./TextDecrypted";

const PasswordEncryption = () => {
  const [encrypted, setEncrypted] = useState(null);
  const [encryptedText, setEncryptedText] = useState("");
  const [decrypted, setDecrypted] = useState("");

  return (
    <section>
      <h1>Encriptador de contraseñas</h1>

      <FormEncrypt encrypted={encrypted} setEncrypted={setEncrypted} />

      <TextEncrypted encrypted={encrypted} />

      <FormDecrypt
        encryptedText={encryptedText}
        setEncryptedText={setEncryptedText}
        setDecrypted={setDecrypted}
      />

      <TextDecrypted decrypted={decrypted} />
    </section>
  );
};

export default PasswordEncryption;
