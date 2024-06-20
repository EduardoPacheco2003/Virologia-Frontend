import axios from "axios";
import { useForm } from "react-hook-form";

const FormEncrypt = ({ encrypted, setEncrypted }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const { password } = data;

    try {
      const res = await axios.post("http://localhost:3000/encrypt", {
        password,
      });
      const { data } = res;
      setEncrypted(data.dataEncrypted);
    } catch (error) {
      console.table(error);
    }
  });

  return (
    <form className="form-encrypt" onSubmit={onSubmit}>
      <label htmlFor="passwordToEncrypt">Contraseña a encriptar:</label>
      <input
        type="text"
        placeholder="Ingresa Texto a encriptar"
        name="password"
        id="passwordToEncrypt"
        {...register("password", {
          required: {
            value: true,
            message: "Campo requerido",
          },
          minLength: {
            value: 8,
            message: "Mínimo 8 caracteres",
          },
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
            message:
              "Mínimo 1 mayúscula, 1 minúscula, 1 número y 1 caracter especial",
          },
        })}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}
      <button className="form-button" type="submit">
        Encriptar
      </button>
    </form>
  );
};

export default FormEncrypt;
