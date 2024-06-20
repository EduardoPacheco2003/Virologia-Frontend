import React, { useState } from "react";
import axios from "axios";

const FormFileEncryption = () => {
  const [encryptedData, setEncryptedData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await axios.post(
        "http://localhost:3000/encrypt-file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(formData);
      setEncryptedData(response.data);
      setError(null);
    } catch (err) {
      setError("Error encrypting the file.");
      setEncryptedData(null);
      console.error(err);
    }
  };

  return (
    <article>
      <form className="form-file-encryption" onSubmit={handleSubmit}>
        <label htmlFor="file">
          Elija una imagen, un .txt o un archivo de audio .mp3
        </label>
        <input type="file" name="file" id="file" required />
        <button type="submit" className="form-button">
          Encriptar
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {encryptedData && (
        <div className="encrypted-file-data">
          <h3>File Encrypted Successfully</h3>
          <p>
            <b>Encrypted File Path:</b> {encryptedData.encryptedFilePath}
          </p>
          <p>Symmetric Key: {encryptedData.symmetricKey}</p>
          <p>IV: {encryptedData.iv}</p>
        </div>
      )}
    </article>
  );
};

export default FormFileEncryption;
