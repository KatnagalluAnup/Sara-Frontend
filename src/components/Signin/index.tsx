import React, { useState } from "react";
// import { authenticate } from "../../redux/actions/authActions";
import styled from "styled-components";

interface Props {
  authenticate?: any;
}

const Title = styled.h2`
  justify-content: center;
  margin: 50px 0px 20px 0px;
  font-size: 42px;
`;

const Block = styled.div`
  border: 1px solid black;
  display: grid;
  place-items: center;
  width: 20%;
  font-family: "HP Simplified Light";
`;

const Button = styled.button`
  background-color: #0096d5;
  width: 90px;
  height: 30px;
  border-style: none;
  font-family: "HP Simplified Light";
  color: white;
  margin: -1px 0px 40px 0px;
  font-size: 14px;
`;

const MainWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 90vh;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const LabelWrapper = styled.label`
  padding: 0px 0px 5px 0px;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  > * {
    margin-bottom: 5px;
  }
`;

const InputWrapper = styled.input`
  padding: 5px 10px 5px 0px;
  width: 90%;
  font-size: 14px;
`;

const SignIn: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Submit Handler for login.
   * @param {React.FormEvent} event
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // const form = { email, password };
    // authenticate(form);
  }

  return (
    <MainWrapper>
      <Block>
        <Title>Sign In</Title>
        <FormWrapper onSubmit={handleSubmit}>
          <LabelWrapper>
            <label htmlFor="email">User email:</label>
            <InputWrapper
              data-testid="email"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="aicc@hp.com"
              required
            />
          </LabelWrapper>
          <LabelWrapper>
            <label htmlFor="password">Password:</label>
            <InputWrapper
              data-testid="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="true"
              required
            />
          </LabelWrapper>
          <Button type="submit">Sign In</Button>
        </FormWrapper>
      </Block>
    </MainWrapper>
  );
};

export default SignIn;
