import { useNavigate } from "react-router-dom";

// Dentro de uma função useNavigate
export const Login = () => {
  const history = useNavigate();

  const handleClick = () => {
    history("/pagina-inicial");
  };
  return (
    <div>
      Login
      <button onClick={handleClick}>Página inicial</button>
    </div>
  );
};
