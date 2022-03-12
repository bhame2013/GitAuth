import styled from "styled-components";

export const Login = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;

  * {
    transition: 0.3s;
    outline: transparent;
  }

  .background {
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    
    img {
      object-fit: cover;
      object-position: right;
    }
  }

  .logo {
    max-width: 198px;
    width: 100%;
    height: 41px;
    position: relative;
  }

  form {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;

    .logo {
      margin-bottom: 50px;
    }

    .form-area-container {
      max-width: 368px;
      width: 100%;
    }

    .container-button {
      text-align: right;
      width: 100%;
      height: 0;

      button {
        position: relative;
        top: -63px;
        right: 14px;
        height: 36px;
        padding: 0 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        background-color: #ffffff;
        border: 0;
        color: #b22e6f;
        font-size: 16px;
        font-weight: 500;
        min-width: 85px;
        cursor: pointer;
      }
      button:hover {
          background-color: #b22e6f;
          color: #fff;
      }
    }
  }
`;
