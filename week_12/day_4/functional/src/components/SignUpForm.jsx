import React, { useState } from "react";
import {
  SignUpButton,
  SignUpFormInput,
  SignUpFormDiv,
} from "./StyledComponents/StyleForm";



const SignUpForm = (props) => {

  return (
    <div className="sign-up-form-container">
      <h1>Create Account</h1>
      <SignUpFormDiv action="" >
        <SignUpFormInput
          onChange={(e) => props.setFirstName(e.target.value)}
          type="text"
          value={props.firstName}
          placeholder="First Name"
          name="firstName"
        />
        <SignUpFormInput onChange={(e) => props.setLastName(e.target.value)} value={props.lastName} type="text" placeholder="Last Name" />
        <SignUpFormInput onChange={(e) => props.setEmail(e.target.value)} value={props.email} type="email" placeholder="Email" />
        <SignUpFormInput onChange={(e) => props.setPassword(e.target.value)} value={props.password} type="password" placeholder="Password"/>
        <SignUpFormInput onChange={(e) => props.setRetype(e.target.value)} value={props.retypePass}type="password" placeholder="Re-Type Password" />
      </SignUpFormDiv>
         <SignUpButton onClick={(e) => props.handleSubmit(e)}>Sign Up</SignUpButton>
    </div>

  );
};
export default SignUpForm;


