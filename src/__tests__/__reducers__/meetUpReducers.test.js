import meetUpReducers from '../../redux/reducers/meetUpReducer';
import {
  validMeetUpPayload,
  defaultInitialState,
  invalidMeetUpPayload,
  fakeErrorMessage
} from '../../testData';
import {
  CLEAR_INPUT,
  ADD_TAG,
  REMOVE_TAG,
  CREATE_MEETUP_SUCCESS,
  SET_ERROR,
  SET_INPUT
} from '../../redux/actions/types';

describe('', () => {
  it('should handle CREATE_MEETUP_SUCCESS action', () => {
    expect(
      meetUpReducers(defaultInitialState, {
        type: CREATE_MEETUP_SUCCESS,
        payload: { ...validMeetUpPayload }
      })
    ).toEqual({
      ...defaultInitialState,
      meetUp: { ...validMeetUpPayload }
    });
  });

  it('should handle CLEAR_INPUT action', () => {
    expect(
      meetUpReducers(defaultInitialState, {
        type: CLEAR_INPUT,
        payload: { ...invalidMeetUpPayload }
      })
    ).toEqual({
      ...defaultInitialState,
      meetUp: { ...invalidMeetUpPayload }
    });
  });

  it('should handle SET_INPUT action', () => {
    expect(
      meetUpReducers(defaultInitialState, {
        type: SET_INPUT,
        payload: { ...invalidMeetUpPayload }
      })
    ).toEqual({
      ...defaultInitialState,
      meetUp: { ...invalidMeetUpPayload }
    });
  });

  it('should handle SET_ERROR action', () => {
    expect(
      meetUpReducers(defaultInitialState, {
        type: SET_ERROR,
        payload: fakeErrorMessage
      })
    ).toEqual({
      ...defaultInitialState,
      error: fakeErrorMessage
    });
  });

  it('should handle ADD_TAG action', () => {
    expect(
      meetUpReducers(defaultInitialState, {
        type: ADD_TAG,
        payload: 'new tag'
      })
    ).toEqual({
      ...defaultInitialState,
      tags: [...defaultInitialState.tags, 'new tag']
    });
  });

  it('should handle ADD_TAG action', () => {
    expect(
      meetUpReducers(defaultInitialState, {
        type: REMOVE_TAG,
        payload: 'new tag'
      })
    ).toEqual({
      ...defaultInitialState,
      tags: [...defaultInitialState.tags]
    });
  });
});
