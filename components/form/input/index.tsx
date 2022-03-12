import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    id: string 
    name: string 
    label: string
}

export function Input({ id, name, label, ...rest}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <S.InputContainer>
        {label && <label htmlFor={id}>{label}</label>}

        <input
          id={id}
          className="paragrafo2-regular filson"
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {error && <span className=" error-message">{error}</span>}
    </S.InputContainer>
  );
}
