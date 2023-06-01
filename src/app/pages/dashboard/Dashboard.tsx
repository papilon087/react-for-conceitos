import { Link } from "react-router-dom";

// Dentro dos components to=""
export const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <Link to="/entrar">Login</Link>
    </div>
  );
};
