import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { api } from "src/services/api";
import { setCookie } from "src/utils/cookies";
import { LoginContainer } from "./styles";
// import Image from "next/image";

export function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const { data, headers } = await api.post('auth/sign-in', {
        email,
        password
      })

      const { authorization } = headers;

      setCookie('user-data', JSON.stringify(data), 1);
      setCookie('token', authorization, 1);

      router.push('/')
    } catch (err: any) {
      console.error(err.response.data)
    }
  }

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button>Entrar</button>
      </form>
    </LoginContainer>
  );
}
