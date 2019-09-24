import accountReducers from "../../redux/reducers/accountReducers";
import { testInitialState, testInput, testUser } from "../../testData";
import {
   CREATE_ACCOUNT_FAILED,
   CREATE_ACCOUNT_SUCCESS,
   SET_INPUT
  } from "../../redux/actions/types";
  

  describe("Account Reducers", () => {
    it("should handle CREATE_ACCOUNT_SUCCESS action", () => {
      expect(
        accountReducers(testInitialState, {
          type: CREATE_ACCOUNT_SUCCESS,
          payload: { ...testUser}
        })
      ).toEqual({
        ...testInitialState,
        user: {...testUser}
      });
    });
    it("should handle CREATE_ACCOUNT_FAILED action", () => {
      expect(
        accountReducers(testInitialState, {
          type: CREATE_ACCOUNT_FAILED,
          payload: "error"
        })
      ).toEqual({
        ...testInitialState,
        error: "error"
      });
    });
    it("should handle SET_FORM_INPUT action", () => {
      expect(
        accountReducers(testInitialState, {
          type: SET_INPUT,
          payload: { ...testInput }
        })
      ).toEqual({
        ...testInitialState,
        user: { ...testInitialState.user, [testInput.field]: testInput.value }
      });
    })

    it('should handle the default action', () => {
      expect(
        accountReducers(testInitialState, {
          type: 'DEFAULT_CASE_ACTION',
          payload: {}
        })
      ).toEqual({
        ...testInitialState
      });
    });

})