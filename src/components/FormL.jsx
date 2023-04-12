import { login } from "../api/Auth";
import { useRef, useState } from "react";

export const FormL = () => {
  const [error, setError ] = useState("")
  const formLogin = useRef(null);
  const preventF = async (e) => {
    e.preventDefault();
    try {
      const arrayForm = new FormData(formLogin.current);
      const { email, password } = Object.fromEntries([...arrayForm.entries()]);
      await login(email, password);
    } catch (error) {
      if (error.message === "Request failed with status code 400") {
        setError("Contraseña incorrecta")
      }
    }
  };

  return (
    <>
    <h2>{error}</h2>
    <form onSubmit = {preventF} ref={formLogin}>
      <label htmlFor="Login">Email</label>
      <input type="email" name="email" placeholder="Email" />
      <label htmlFor="Login">Password</label>
      <input type="password" name="password" placeholder="*********" />
      <input type="submit" value="Login" />
    </form>
    </>
  );
};
