import React from 'react';
import { shallow } from 'enzyme';
import { CreateMeetup } from '../../views/CreateMeetup';
import { mapDispatchToProps, mapStateToProps } from '../../views/CreateMeetup';

import { testInitialState } from '../../testData';

const setUp = () => {
  const props = {
    onInputChange: jest.fn(),
    onCreateMeetUp: jest.fn(),
    onAddTag: jest.fn(),
    onRemoveTag: jest.fn().mockImplementation(() => Promise.resolve()),
    onClearInput: jest.fn().mockImplementation(() => Promise.resolve()),
    useEffect: jest.fn(),
    history: { push: jest.fn() },
    meetUp: {
      name: 'Developer Festival 2019',
      venue: 'Kigali Convention Center',
      image_url: 'https://picsum.photos/id/237/200/300',
      start_date: '2019-11-12T11:55:49.001Z',
      end_date: '2019-11-12T11:55:49.001Z',
      event_type: 'DINNER_OR_GALA',
      organizer: 'Ministry of ICT',
      newTag: 'sports'
    },
    error: '',
    tags: [{ id: 1, name: 'Music' }, { id: 2, name: 'Politics' }],
    labelWidth: 'new label'
  };
  const enzymeWrapperCreateMeetup = shallow(<CreateMeetup {...props} />);
  return {
    props,
    enzymeWrapperCreateMeetup
  };
};

describe('Create MeetUp handler', () => {
  it('should test handleInputChange()', () => {
    const { enzymeWrapperCreateMeetup, props } = setUp();
    enzymeWrapperCreateMeetup
      .find('#meetUp')
      .first()
      .simulate('change', { target: { value: 'hello' } });
    expect(props.onInputChange).toHaveBeenCalled();
  });

  it('should test handleOptionInputChange()', () => {
    const { enzymeWrapperCreateMeetup, props } = setUp();
    enzymeWrapperCreateMeetup
      .find('#event_type')
      .first()
      .simulate('change', { target: { value: 'hello' } });
    expect(props.onInputChange).toHaveBeenCalled();
  });

  it('should test handleDateInputChange()', () => {
    const { enzymeWrapperCreateMeetup, props } = setUp();
    enzymeWrapperCreateMeetup
      .find('#startDate')
      .first()
      .simulate('change', { target: { value: 'hello' } });
    expect(props.onInputChange).toHaveBeenCalled();
  });

  it('should test handleDateInputChange()', () => {
    const { enzymeWrapperCreateMeetup, props } = setUp();
    enzymeWrapperCreateMeetup
      .find('#endDate')
      .first()
      .simulate('change', { target: { value: 'hello' } });
    expect(props.onInputChange).toHaveBeenCalled();
  });

  it('should test handleRemoveTag()', () => {
    const { enzymeWrapperCreateMeetup, props } = setUp();
    enzymeWrapperCreateMeetup
      .find('#chip')
      .first()
      .simulate('delete', {
        preventDefault: () => {}
      });
    expect(props.onRemoveTag).toHaveBeenCalled();
  });

  it('should test handleAddTag()', () => {
    const { enzymeWrapperCreateMeetup, props } = setUp();
    enzymeWrapperCreateMeetup
      .find('#sign-up')
      .first()
      .simulate('click', {
        preventDefault: () => {}
      });
    expect(props.onAddTag).toHaveBeenCalled();
  });

  it('should test onCreateMeetUp()', () => {
    const { enzymeWrapperCreateMeetup, props } = setUp();
    enzymeWrapperCreateMeetup
      .find('#submit-form')
      .first()
      .simulate('submit', {
        preventDefault: () => {}
      });
    expect(props.onCreateMeetUp).toHaveBeenCalled();
  });
});

describe('create meetup dispatcher', () => {
  it('should test mapDispatchToProps onInputChange()', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onInputChange();
    expect(dispatch.mock.calls[0][0]).toBeDefined();
  });

  it('should test mapDispatchToProps onCreateMeetUp()', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onCreateMeetUp();
    expect(dispatch.mock.calls[0][0]).toBeDefined();
  });

  it('should test mapDispatchToProps onAddTag()', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onAddTag();
    expect(dispatch.mock.calls[0][0]).toBeDefined();
  });

  it('should test mapDispatchToProps onRemoveTag()', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onRemoveTag();
    expect(dispatch.mock.calls[0][0]).toBeDefined();
  });

  it('should test mapDispatchToProps onClearInput()', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onClearInput();
    expect(dispatch.mock.calls[0][0]).toBeDefined();
  });

  it('should test mapStateToProps', () => {
    const initialState = {
      event: {
        name: 'Developer Festival 2019',
        venue: 'Kigali Convention Center'
      }
    };
    
    expect(mapStateToProps({ ...testInitialState.account }).name).toEqual(
      'Developer Festival 2019'
    );

    expect(mapStateToProps({ ...testInitialState.account }).event_type).toEqual(
      'DINNER_OR_GALA'
    );
    expect(mapStateToProps({ ...testInitialState.account }).organizer).toEqual(
      'Ministry of ICT'
    );
  });
});
