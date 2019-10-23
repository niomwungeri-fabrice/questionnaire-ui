import { setUp } from '../../testData';
import { mapDispatchToProps } from '../../views/SignIn';
describe('Landing Dispatcher', () => {
  it('should test mapDispatchToProps setCurrentAccount()', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).setCurrentAccount();
    expect(dispatch.mock.calls[0][0]).toBeDefined();
  });
});
