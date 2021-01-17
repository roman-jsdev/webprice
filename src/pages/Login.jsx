import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <div className="row">
      <div className="col-md-6 offset-3 d-flex flex-column align-items-center">
        <h1 className="mb-5">Login To CRM</h1>
        <LoginForm />
      </div>
    </div>
  );
};
