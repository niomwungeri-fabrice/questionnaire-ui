import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from 'axios'
import moxios from "moxios";
import { testInitialState } from "../../testData";
import {
    CREATE_ACCOUNT_FAILED,
    CREATE_ACCOUNT_SUCCESS,
    SET_INPUT
   } from "../../redux/actions/types";
import { 
    handleSignUp
} from '../../redux/actions/accountActions'
import { handleInputs } from '../../redux/actions/commonActions'

const mockStore = configureStore([thunk]);
let store;

describe("Non-Async Account Actions", () => {
    it("should create an action setError ", () => {
      const expectedAction = {
        type: SET_INPUT,
        payload: { field: "password", value: "123" }
      };
      expect(handleInputs({ field: "password", value: "123" })).toEqual(
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
      const successPayload = {
        email : "admin@email.com",
        password: "passowrd123!"
      }
      const failPayload ={
          email:"email.com",
          password: "123"
      }
      it("should create account successfully", () => {
        const expectedResults = [ { 
            type: CREATE_ACCOUNT_SUCCESS, 
            payload: { message: 'Success' } 
        }];
        moxios.stubRequest('http://127.0.0.1:8000/api/v1/register', {
          status: 201,
          response: {
            message: "Success"
          }
        });
        return store.dispatch(handleSignUp(successPayload)).then(() => {
          const actions = store.getActions();
          expect(actions).toEqual(expectedResults);
        });
      });
      it('should fail to create an account', () => {
        const expectedResults = [ { 
            type: CREATE_ACCOUNT_FAILED, 
            payload: { message: 'failed' } 
        }];
        moxios.stubRequest('http://127.0.0.1:8000/api/v1/register', {
            status: 400,
            response : {
                message : "failed"
            }
        });
        return store.dispatch(handleSignUp(failPayload)).then(() => {
            const actions = store.getActions();
            expect(actions).toEqual(expectedResults);
          });
      });

  })
  