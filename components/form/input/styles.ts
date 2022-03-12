import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.32);
  padding: 2px 16px 6px;
  margin-bottom: 16px;

  label {
    opacity: 0.5;
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin-bottom: 2px;
    cursor: pointer;
}
  label:hover {
      opacity: 1;
  }

  input {
    display: flex;
    width: 100%;
    border: 0;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }

  input::placeholder {
    color: #ffffff;
  }


`;
