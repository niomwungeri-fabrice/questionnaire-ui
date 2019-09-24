import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from 'axios'
import moxios from "moxios";
import { handleSignUp } from '../../redux/actions/accountActions'
import { handleInputs } from '../../redux/actions/commonActions'
import {validUserPayload, invalidUserPayload ,testInput } from '../../testData'
import {
  CREATE_ACCOUNT_FAILED,
  CREATE_ACCOUNT_SUCCESS,
  SET_INPUT
 } from "../../redux/actions/types";
 const { REACT_APP_API_URL} = process.env

const mockStore = configureStore([thunk]);
let store;

describe("Non-Async Account Actions", () => {
    it("should create an action setError ", () => {
      const expectedAction = {
        type: SET_INPUT,
        payload: {...testInput}
      };
      expect(handleInputs({...testInput})).toEqual(
        expectedAction
      );
    });
  });

  describe('Async Account Actions', () => {
    beforeEach(() => {
        moxios.install(axios);
        store = mockStore({});
      });
      afterEach(() => {
        moxios.uninstall(axios);
      });
      it("should create account successfully", () => {
        const expectedResults = [ { 
            type: CREATE_ACCOUNT_SUCCESS, 
            payload: { message: 'Success' } 
        }];
        moxios.stubRequest(`${REACT_APP_API_URL}/register/`, {
          status: 201,
          response: {
            message: "Success"
          }
        });
        return store.dispatch(handleSignUp(validUserPayload)).then(() => {
          const actions = store.getActions();
          expect(actions).toEqual(expectedResults);
        });
      });
      it('should fail to create an account', () => {
        const expectedResults = [ { 
            type: CREATE_ACCOUNT_FAILED, 
            payload: { message: 'failed' } 
        }];
        moxios.stubRequest(`${REACT_APP_API_URL}/register/`, {
            status: 400,
            response : {
                message : "failed"
            }
        });
        return store.dispatch(handleSignUp(invalidUserPayload)).then(() => {
            const actions = store.getActions();
            expect(actions).toEqual(expectedResults);
          });
      });

  })
  