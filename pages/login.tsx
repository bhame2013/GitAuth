//next
import { Login } from "components/sections";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

//utils
import { setCookie } from "src/utils/cookies";

//css
import styled from "styled-components";

export default function LoginPage() {
  const { push } = useRouter();

  function handleSubmit() {
    setCookie("auth", "true", 1);
    push("/");
  }

  return (
    <>
      <Login />
    </>
  );
}
