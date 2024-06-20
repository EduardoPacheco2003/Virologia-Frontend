import { useState } from "react";
import axios from "axios";

const FormFileDecryption = () => {
  const [decryptedData, setDecryptedData] = useState(null);
  const [error, setError] = useState(null);
  const [symmetricKey, setSymmetricKey] = useState("");
  const [iv, setIv] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("symmetricKey", symmetricKey);
    formData.append("iv", iv);

    try {
      const response = await axios.post(
        "http://localhost:3000/decrypt-file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setDecryptedData(response.data);
      setError(null);
    } catch (err) {
      setError("Error decrypting the file.");
      setDecryptedData(null);
      console.error(err);
    }
  };

  return (
    <article>
      <form className="form-file-decryption" onSubmit={handleSubmit}>
        <label htmlFor="file">Elija un archivo cifrado</label>
        <input type="file" name="file" id="file" required />

        <label htmlFor="symmetricKey">Clave simétrica</label>
        <input
          type="text"
          name="symmetricKey"
          id="symmetricKey"
          value={symmetricKey}
          onChange={(e) => setSymmetricKey(e.target.value)}
          required
        />

        <label htmlFor="iv">IV</label>
        <input
          type="text"
          name="iv"
          id="iv"
          value={iv}
          onChange={(e) => setIv(e.target.value)}
          required
        />

        <button type="submit" className="form-button">
          Desencriptar
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {decryptedData && (
        <div className="decrypted-file-data">
          <h3>File Decrypted Successfully</h3>
          <p>
            <b>Decrypted File Path:</b> {decryptedData.decryptedFilePath}
          </p>
        </div>
      )}
    </article>
  );
};

export default FormFileDecryption;
