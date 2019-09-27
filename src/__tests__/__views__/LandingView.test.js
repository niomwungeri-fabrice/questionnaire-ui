import { setUp } from '../../testData'
import {
  mapDispatchToProps
} from "../../views/SignIn";
describe('Landing Dispatcher', () => {
  it("should test mapDispatchToProps setCurrentAccount()", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).setCurrentAccount();
    expect(dispatch.mock.calls[0][0]).toBeDefined()
  });

  it("should test redirect to login page", () => {
      const { enzymeWrapperLanding, props } = setUp()
      enzymeWrapperLanding
      .find("#landing-login")
      .simulate("click");
      expect(props.history.push.mock.instances.length).toBe(1);
  });
})
