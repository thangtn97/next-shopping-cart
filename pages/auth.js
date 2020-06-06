import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authStart } from "../store/actions/actionAuth";
import { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/UI/Spinner/Spinner";

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
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(authStart(email, password, isLogin));
        }}
      >
        <label>email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="submit" />
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLogin(!isLogin);
          }}
        >
          switch to {isLogin ? "sign up" : "sign in"}
        </button>
      </form>
      {loading ? <Spinner /> : null}
      <Link href="/">
        <a>home</a>
      </Link>
    </>
  );
};

export default auth;
