import { setUp } from '../../testData'
import { mapDispatchToProps } from "../../views/SignIn";


describe('SignIn Dispatcher', () => {
    it("should test onSignIn()", () => {
        const { enzymeWrapperSignIn, props } = setUp()
        enzymeWrapperSignIn
          .find("#login-form")
          .simulate("submit",  {
            preventDefault: () => {
            }});
        expect(props.onSignIn).toHaveBeenCalled();
    });
    
    it("should test onInputChange()", () => {
        const { enzymeWrapperSignIn, props } = setUp()
        enzymeWrapperSignIn
          .find("#email")
          .first()
          .simulate("change", { target: { value: "hello" } });
        expect(props.onInputChange).toHaveBeenCalled();
    });

    it.skip("should test redirect to landing page", () => {
        const { enzymeWrapperSignIn, props } = setUp()
        enzymeWrapperSignIn
        .find("#login-form")
        .simulate("submit",  {
          preventDefault: () => {
          }});
        expect(props.history.push.mock.instances.length).toBe(1);
      });
    
    it("should test mapDispatchToProps onInputChange()", () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onInputChange();
        expect(dispatch.mock.calls[0][0]).toBeDefined()

    });
      
    it("should test mapDispatchToProps onSignIn()", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onSignIn();
    expect(dispatch.mock.calls[0][0]).toBeDefined()
    });
})