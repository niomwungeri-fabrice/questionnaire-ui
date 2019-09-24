import React from "react";
import { shallow } from "enzyme";
import { SignUp } from "./views/SignUp";

const setUp = () => {
  const props = {
      onInputChange :jest.fn(),
      onSignUP:jest.fn().mockImplementation(() => Promise.resolve({
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
  const enzymeWrapper = shallow(<SignUp {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

const testInput = { field: "email", value: "test@test.com" };
const validUserPayload = { email : "admin@email.com", password: "password123!" }
const invalidUserPayload = { email:"email.com", password: "123" }
const testInitialState = {
  account: {  error: null, token:"", message:"",
  user: {
      firstName: "Fabrice",
      lastName: "NIYOMWUNGERI",
      email: "test@test.com",
      username: "test",
      password: "test",
  }},
};
// const testInitialState = {
//   message: "",
//   error: "",
//   token: "",
//   user: {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: ""
//   }
// };
export {
  testInitialState,
  testInput,
  validUserPayload,
  invalidUserPayload,
  setUp
}