import React from "react";
import { shallow } from "enzyme";
import {
    SignUp,
    mapStateToProps,
    mapDispatchToProps
  } from "../../views/SignUp";

  const initialState = {
    account: {  error: null, token:"", message:"",
    user: {
        firstName: "Fabrice",
        lastName: "NIYOMWUNGERI",
        email: "test@test.com",
        username: "test",
        password: "test",
    }},
};
const testInput = { field: "email", value: "test@test.com" };
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
describe('Dispatcher', () => {
    it("should test onInputChange()", () => {
        const { enzymeWrapper, props } = setUp()
        enzymeWrapper
          .find("#email")
          .first()
          .simulate("change", { target: { value: "hello" } });
        expect(props.onInputChange).toHaveBeenCalled();
      });

      it("should test onSignUP()", () => {
        const { enzymeWrapper, props } = setUp()
        enzymeWrapper
          .find("#register-form")
          .simulate("submit",  {
            preventDefault: () => {
            }});
        expect(props.onSignUP).toHaveBeenCalled();
      });
      
      it.skip("should test redirect to login page", () => {
        const { enzymeWrapper, props } = setUp()
        enzymeWrapper
        .find("#register-form")
        .simulate("submit",  {
          preventDefault: () => {
          }});
        expect(props.history.push.mock.instances.length).toBe(1);
      });
      
      it("should test mapDispatchToProps(onInputChange)", () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onInputChange();
        expect(dispatch.mock.calls[0][0]).toBeDefined()

      });
      
      it("should test mapDispatchToProps(onSignUP)", () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onSignUP({
            email: "test@test.com",
            password: "test"
        });
        expect(dispatch.mock.calls[0][0]).toBeDefined()
      });

      it('should test mapStateToProps', () => {
        expect(mapStateToProps(initialState).firstName).toEqual("Fabrice");
        expect(mapStateToProps(initialState).error).toEqual(null);
        expect(mapStateToProps(initialState).lastName).toEqual("NIYOMWUNGERI");        
      });

})


  