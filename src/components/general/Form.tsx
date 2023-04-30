import { ChangeEvent, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import styled from "styled-components";

type DataProp = {
  data: {
    inputEmail: string;
    isEmailValid: { valid: boolean; errorText: string };
  };
};

const Form = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState({
    valid: true,
    errorText: "",
  });

  function inputEmailOnchange(e: ChangeEvent<HTMLInputElement>) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const value = e.target.value.trim();
    setInputEmail(value);

    if (value.length > 3) {
      regex.test(value)
        ? setIsEmailValid({ valid: true, errorText: "" })
        : setIsEmailValid({
            valid: false,
            errorText: "Please enter a valid email address",
          });
      return;
    }

    return setIsEmailValid({ valid: false, errorText: "Email is required!" });
  }

  return (
    <FormWrapper data={{ inputEmail, isEmailValid }}>
      {/* <div className="formInput"> */}
      <div className="input">
        <p>Email address</p>
        <input
          onChange={inputEmailOnchange}
          value={inputEmail}
          type="email"
          name="email"
        />

        <small>
          <MdOutlineCancel /> &nbsp; {isEmailValid.errorText}
        </small>
      </div>

      <button className="f items-center justify-center" type="submit">
        Get Started
        <MdArrowForwardIos className="icon" />
      </button>
      {/* </div> */}
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.form<DataProp>`
  width: clamp(280px, 70vw, 600px);
  margin: 0 auto;
  margin-top: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;

  .input {
    position: relative;
    width: 100%;

    p {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 15px;
      color: rgba(255, 255, 255, 0.8);
      transition: all 0.3s linear;
      visibility: ${({ data }: DataProp) =>
        data.inputEmail ? "hidden" : "visible"};
    }

    input {
      width: 100%;
      height: 50px;
      background-color: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 5px;
      font-size: 16px;
      padding: 0px 15px;
      position: relative;
    }

    small {
      position: absolute;
      bottom: -23px;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: ${({ theme }: { theme: ThemeType }) => theme.primaryRed};
      visibility: ${({ data }: DataProp) =>
        data.isEmailValid.valid ? "hidden" : "visible"};
    }
  }

  &:has(input:focus) p {
    font-size: 11px;
    top: 20%;
    font-size: 11px;
    visibility: visible;
  }

  button {
    background-color: ${({ theme }: { theme: ThemeType }) => theme.primaryRed};
    color: inherit;
    width: 160px;
    margin: 0 auto;
    margin-top: 10px;
    height: 40px;
    border-radius: 5px;
    font-size: clamp(1.4rem, 2.5vw, 2rem);
  }

  .icon {
    font-size: clamp(1.4rem, 2.5vw, 2rem);
  }

  @media screen and (min-width: 640px) {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;

    .input {
      input {
        height: 60px;
      }
    }

    button {
      margin-top: 0px;
      height: 60px;
      width: 300px;
      font-weight: 900;
    }
  }
`;
