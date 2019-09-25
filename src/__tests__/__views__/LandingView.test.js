import { setUp } from '../../testData'

describe('Landing Dispatcher', () => {
    it("should test redirect to login page", () => {
        const { enzymeWrapperLanding, props } = setUp()
        enzymeWrapperLanding
        .find("#landing-login")
        .simulate("click");
        expect(props.history.push.mock.instances.length).toBe(1);
      });
})
