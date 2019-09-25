import React from "react";
import { shallow } from "enzyme";
import { SignUp } from "./views/SignUp";
import { SignIn }from "./views/SignIn"
import { Landing } from './views/Landing'

const setUp = () => {
  const props = {
      onInputChange :jest.fn(),
      onSignUP:jest.fn().mockImplementation(() => Promise.resolve({
          email: "test@test.com",
          password: "test"
      })),
      onSignIn:jest.fn().mockImplementation(() => Promise.resolve({
        email: "test@test.com",
        password: "test"
      })),
      history : { push: jest.fn()},
      account: {
          firstName: "Fabrice",
          lastName: "NIYOMWUNGERI",
          email: "test@test.com",
          username: "test",
          password: "test",
      },
      error:""
  };
  const enzymeWrapperSignUp = shallow(<SignUp {...props} />)
  const enzymeWrapperSignIn = shallow(<SignIn {...props} />)
  const enzymeWrapperLanding = shallow(<Landing {...props}/>)
  return {
    props,
    enzymeWrapperSignUp,
    enzymeWrapperSignIn,
    enzymeWrapperLanding
  }
}

const testInput = { field: "email", value: "test@test.com" };
const validUserPayload = { email : "admin@email.com", password: "password123!" }
const invalidUserPayload = { email:"email.com", password: "123" }
const fakeTokenAccess = "89329rhdfsihdfksdh89838uf9w"
const fakeTokenRefresh = 'kdhjdhgfd939fjsoidh'
const fakeErrorMessage = 'fake error message'
const testInitialState = {
  account: {
    error: null, 
    token:"", 
    message:"",
  user: {
    firstName: "Fabrice",
    lastName: "NIYOMWUNGERI",
    email: "test@test.com",
    username: "test",
    password: "test",
  }},
};
const defaultInitialState = {
    message: "",
    error: "",
    token: "",
    refresh:"",
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
};

export {
  testInitialState,
  testInput,
  validUserPayload,
  invalidUserPayload,
  setUp,
  defaultInitialState,
  fakeTokenRefresh,
  fakeTokenAccess,
  fakeErrorMessage
}