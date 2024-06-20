import axios from "axios";

const FormDecrypt = ({ encryptedText, setEncryptedText, setDecrypted }) => {
  const handleChangeEncrypted = (e) => {
    setEncryptedText(e.target.value);
  };

  const onDecrypt = async (e) => {
    e.preventDefault();

    if (!encryptedText) {
      console.log("Ingresa un texto encriptado");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/decrypt", {
        encryptedMessage: encryptedText,
      });

      const { data } = res;

      setDecrypted(data.dataDecrypted);
    } catch (error) {
      console.table(error);
    }
  };

  return (
    <form className="form-decrypt">
      <input
        type="text"
        placeholder="Ingresa Texto a desencriptar"
        onChange={handleChangeEncrypted}
      />
      <button className="form-button" type="submit" onClick={onDecrypt}>
        Desencriptar
      </button>
    </form>
  );
};

export default FormDecrypt;
