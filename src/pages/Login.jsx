import { LoginForm } from "@components/LoginForm";
import { useEffect, useState } from "react";
import { useAuth } from "@hooks/useAuth";

export const Login = () => {
  const [authData, setAuthData] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [auth] = useAuth(authData);

  useEffect(() => {
    submit && auth();
    setSubmit(false);
  }, [submit]);

  return (
    <div className="row">
      <div className="col-md-6 col-12 offset-md-3 d-flex flex-column align-items-center">
        <h1 className="mb-5">Login To CRM</h1>
        <LoginForm
          setAuthData={setAuthData}
          submit={submit}
          setSubmit={setSubmit}
        />
      </div>
    </div>
  );
};
