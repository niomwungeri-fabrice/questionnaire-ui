import accountReducers from "../../redux/reducers/accountReducers";
import { 
  testInput, 
  testUser, 
  defaultInitialState,
  fakeTokenAccess,
  fakeTokenRefresh,
  fakeErrorMessage
 } from "../../testData";
import {
   CREATE_ACCOUNT_FAILED,
   CREATE_ACCOUNT_SUCCESS,
   SET_INPUT,
   LOGIN_FAILED,
   LOGIN_SUCCESS
  } from "../../redux/actions/types";
  

  describe("Create Account Reducers", () => {
    it("should handle CREATE_ACCOUNT_SUCCESS action", () => {
      expect(
        accountReducers(defaultInitialState, {
          type: CREATE_ACCOUNT_SUCCESS,
          payload: { ...testUser}
        })
      ).toEqual({
        ...defaultInitialState,
        user: {...testUser}
      });
    });

    it("should handle CREATE_ACCOUNT_FAILED action", () => {
      expect(
        accountReducers(defaultInitialState, {
          type: CREATE_ACCOUNT_FAILED,
          payload: fakeErrorMessage
        })
      ).toEqual({
        ...defaultInitialState,
        error: fakeErrorMessage
      });
    });

    it("should handle SET_FORM_INPUT action", () => {
      expect(
        accountReducers(defaultInitialState, {
          type: SET_INPUT,
          payload: { ...testInput }
        })
      ).toEqual({
        ...defaultInitialState,
        user: { ...defaultInitialState.user, [testInput.field]: testInput.value }
      });
    })

    it('should handle the default action', () => {
      expect(
        accountReducers(defaultInitialState, {
          type: 'DEFAULT_CASE_ACTION',
          payload: {}
        })
      ).toEqual({
        ...defaultInitialState
      });
    });
})

describe('Login Reducers', () => {
  it("should handle LOGIN_SUCCESS action", () => {
    expect(
      accountReducers(defaultInitialState, {
        type: LOGIN_SUCCESS,
        payload: { 
          access: fakeTokenAccess,
          refresh: fakeTokenRefresh
        }
      })
    ).toEqual({
      ...defaultInitialState,
      token: fakeTokenAccess,
      refresh: fakeTokenRefresh
    });
  });

  it("should handle LOGIN_FAILED action", () => {
    expect(
      accountReducers(defaultInitialState, {
        type: LOGIN_FAILED,
        payload: fakeErrorMessage
      })
    ).toEqual({
      ...defaultInitialState,
      error: fakeErrorMessage,
    });
  });
})
