import {testInitialState, setUp} from '../../testData'
import {
    mapStateToProps,
    mapDispatchToProps
} from "../../views/SignUp";


describe('SignUp Dispatcher', () => {
    it("should test onInputChange()", () => {
        const { enzymeWrapperSignUp, props } = setUp()
        enzymeWrapperSignUp
          .find("#email")
          .first()
          .simulate("change", { target: { value: "hello" } });
        expect(props.onInputChange).toHaveBeenCalled();
      });

      it("should test onSignUP()", () => {
        const { enzymeWrapperSignUp, props } = setUp()
        enzymeWrapperSignUp
          .find("#register-form")
          .simulate("submit",  {
            preventDefault: () => {
            }});
        expect(props.onSignUP).toHaveBeenCalled();
      });
      
      it.skip("should test redirect to login page", () => {
        const { enzymeWrapperSignUp, props } = setUp()
        enzymeWrapperSignUp
        .find("#register-form")
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
      
      it("should test mapDispatchToProps onSignUP()", () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onSignUP();
        expect(dispatch.mock.calls[0][0]).toBeDefined()
      });

      it('should test mapStateToProps', () => {
        expect(mapStateToProps(testInitialState).firstName).toEqual("Fabrice");
        expect(mapStateToProps(testInitialState).error).toEqual(null);
        expect(mapStateToProps(testInitialState).lastName).toEqual("NIYOMWUNGERI");        
      });

})


  