import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authStart } from "../store/actions/actionAuth";
import { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/UI/Spinner/Spinner";
import Layout from "../components/Layout/Layout";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";

const auth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLogin, setIsLogin] = useState(true);
  const loading = useSelector((state) => state.auth.loading);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const authRedirectPath = useSelector((state) => state.auth.authRedirectPath);

  {
    if (isLogged) router.push(authRedirectPath);
  }
  return (
    <Layout>
      <div className="login-form">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(authStart(email, password, isLogin));
          }}
        >
          <Input
            label="Email"
            changed={(e) => setEmail(e.target.value)}
            elementConfig={{ type: "email", placeholder: "Your email" }}
          />
          <Input
            label="Password"
            changed={(e) => setPassword(e.target.value)}
            elementConfig={{ type: "password", placeholder: "Your password" }}
          />
          <Button
            clicked={(e) => {
              e.preventDefault();
              dispatch(authStart(email, password, isLogin));
            }}
            btnType="Success"
          >
            Submit
          </Button>
          <Button
            btnType="Danger"
            clicked={(e) => {
              e.preventDefault();
              setIsLogin(!isLogin);
            }}
          >
            Switch to {isLogin ? "sign up" : "sign in"}
          </Button>
        </form>
        {loading ? <Spinner /> : null}
        <Link href="/">
          <a>home</a>
        </Link>
      </div>
      <style jsx>{`
        .login-form {
          margin: 20px auto;
          width: 80%;
          text-align: center;
          box-shadow: 0 2px 3px #ccc;
          border: 1px solid #eee;
          padding: 10px;
          box-sizing: border-box;
        }
        .form {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Layout>
  );
};

export default auth;
