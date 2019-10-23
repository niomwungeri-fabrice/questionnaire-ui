import { handleClearInputs } from '../../redux/actions/commonActions';
import {
  CLEAR_INPUT,
  ADD_TAG,
  REMOVE_TAG,
  CREATE_MEETUP_SUCCESS,
  SET_ERROR
} from '../../redux/actions/types';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import {
  handleAddTag,
  handleRemoveTag,
  handleCreateMeetUp
} from '../../redux/actions/meetUpActions';
import {
  validMeetUpPayload,
  invalidMeetUpPayload,
  testInput,
  testTags
} from '../../testData';

const { REACT_APP_API_URL } = process.env;

const mockStore = configureStore([thunk]);
let store;

describe('Non-Async Meetup Actions', () => {
  it('should clear inputs success ', () => {
    const expectedAction = {
      type: CLEAR_INPUT,
      payload: { ...testInput }
    };
    expect(handleClearInputs({ ...testInput })).toEqual(expectedAction);
  });

  it('should remove a tag', () => {
    const expectedAction = {
      type: REMOVE_TAG,
      payload: testTags
    };
    expect(handleRemoveTag(testTags)).toEqual(expectedAction);
  });
});

describe('Async MeetUp Actions', () => {
  beforeEach(() => {
    moxios.install(axios);
    store = mockStore({});
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('should create meetUp successfully', () => {
    const expectedResults = [
      {
        type: CREATE_MEETUP_SUCCESS,
        payload: 'Success'
      }
    ];
    moxios.stubRequest(`${REACT_APP_API_URL}/meetup/new/`, {
      status: 201,
      response: 'Success'
    });
    return store.dispatch(handleCreateMeetUp(validMeetUpPayload)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedResults);
    });
  });

  it('should fail to create meetUp', () => {
    const expectedResults = [
      {
        type: SET_ERROR,
        payload: 'FAILED'
      }
    ];
    moxios.stubRequest(`${REACT_APP_API_URL}/meetup/new/`, {
      status: 400,
      response: 'FAILED'
    });
    return store.dispatch(handleCreateMeetUp(invalidMeetUpPayload)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedResults);
    });
  });

  it('should add tags successfully', () => {
    const expectedResults = [
      {
        type: ADD_TAG,
        payload: 'Success'
      }
    ];
    moxios.stubRequest(`${REACT_APP_API_URL}/tags/`, {
      status: 201,
      response: 'Success'
    });
    return store.dispatch(handleAddTag('New tag')).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedResults);
    });
  });

  it('should fail to add tag', () => {
    const expectedResults = [
      {
        type: SET_ERROR,
        payload: 'exists'
      }
    ];
    moxios.stubRequest(`${REACT_APP_API_URL}/tags/`, {
      status: 403,
      response: 'exists'
    });
    return store.dispatch(handleAddTag('New tag')).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedResults);
    });
  });
});
