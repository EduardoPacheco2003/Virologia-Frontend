import { useState } from "react";
import PasswordEncryption from "./components/PasswordEncryption";
import FileEncryption from "./components/FileEncryption";

const pageOptions = {
  passwordEncryption: "passwordEncryption",
  fileEncryption: "fileEncryption",
};

function App() {
  const [pageSelection, setPageSelection] = useState(
    pageOptions.passwordEncryption
  );

  return (
    <>
      <header className="u-container">
        <nav className="header">
          <button
            className="header-button"
            onClick={() => setPageSelection(pageOptions.passwordEncryption)}>
            Encriptación Contraseñas
          </button>
          <button
            className="header-button"
            onClick={() => setPageSelection(pageOptions.fileEncryption)}>
            Encriptación de Archivos
          </button>
        </nav>
      </header>
      <main className="u-container">
        {pageSelection === pageOptions.passwordEncryption && (
          <PasswordEncryption />
        )}
        {pageSelection === pageOptions.fileEncryption && <FileEncryption />}
      </main>
    </>
  );
}

export default App;
