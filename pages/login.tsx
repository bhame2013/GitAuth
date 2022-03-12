import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { Input } from "components/form/input";
import { useRef } from "react";
import * as S from "styles/login";
import { useAuth } from "src/contexts/authContext";
import NextImage from "next/image";
import logo from "../public/images/logo.png";
import Background from "../public/images/background-login.jpg";

interface SignInProps {
  email: string;
  password: string;
}

export default function Login() {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  async function handleSignIn(data: SignInProps) {
    try {
      await signIn(data);
    }catch(e) {
      console.log(e)
    }
  }

  return (
    <S.Login>
      <div className="background">
        <NextImage layout="fill" src={Background} />
      </div>

      <Form ref={formRef} onSubmit={handleSignIn}>
        <div className="logo">
          <NextImage layout="fill" src={logo} />
        </div>

        <div className="form-area-container">
          <Input
            id="email"
            type="email"
            name="email"
            label="Email"
            placeholder="Email*"
          />

          <Input
            id="password"
            type="password"
            name="password"
            label="Senha"
            placeholder="Senha*"
          />

          <div className="container-button">
            <button type="submit">Entrar</button>
          </div>
        </div>
      </Form>
    </S.Login>
  );
}
