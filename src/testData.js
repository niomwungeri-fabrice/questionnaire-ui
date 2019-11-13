import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from './views/SignUp';
import { SignIn } from './views/SignIn';
import { Landing } from './views/Landing';

const setUp = () => {
  const props = {
    onInputChange: jest.fn(),
    onSignUP: jest.fn().mockImplementation(() =>
      Promise.resolve({
        email: 'test@test.com',
        password: 'test'
      })
    ),
    onSignIn: jest.fn().mockImplementation(() =>
      Promise.resolve({
        email: 'test@test.com',
        password: 'test'
      })
    ),
    setCurrentAccount: jest.fn().mockImplementation(() => Promise.resolve()),
    history: { push: jest.fn() },
    user: {
      firstName: 'Fabrice',
      lastName: 'NIYOMWUNGERI',
      email: 'test@test.com',
      username: 'test',
      password: 'test'
    },
    error: ''
  };
  const enzymeWrapperSignUp = shallow(<SignUp {...props} />);
  const enzymeWrapperSignIn = shallow(<SignIn {...props} />);
  const enzymeWrapperLanding = shallow(<Landing {...props} />);
  return {
    props,
    enzymeWrapperSignUp,
    enzymeWrapperSignIn,
    enzymeWrapperLanding
  };
};

const testInput = { field: 'email', value: 'test@test.com' };
const testTags = ['Sports', 'politics', 'Musics'];
const validUserPayload = { email: 'admin@email.com', password: 'password123!' };
const invalidUserPayload = { email: 'email.com', password: '123' };
const validMeetUpPayload = {
  name: 'Developer Festival 2019',
  venue: 'Kigali Convention Center',
  image_url: 'https://picsum.photos/id/237/200/300',
  start_date: '2019-11-12T13:09:56.766Z',
  end_date: '2019-11-12T13:09:56.766Z',
  event_type: 'DINNER_OR_GALA',
  organizer: 'Ministry of ICT',
  newTag: 'sports'
};
const invalidMeetUpPayload = {
  name: '',
  venue: '',
  image_url: '',
  start_date: '2019-11-12T13:09:56.766Z',
  end_date: '2019-11-12T13:09:56.766Z',
  event_type: '',
  organizer: '',
  newTag: ''
};

const fakeTokenAccess = '89329rhdfsihdfksdh89838uf9w';
const fakeTokenRefresh = 'kdhjdhgfd939fjsoidh';
const fakeErrorMessage = 'fake error message';

const testInitialState = {
  account: {
    error: null,
    token: '',
    message: '',
    user: {
      firstName: 'Fabrice',
      lastName: 'NIYOMWUNGERI',
      email: 'test@test.com',
      username: 'test',
      password: 'test'
    },
    event: {
      name: 'Developer Festival 2019',
      venue: 'Kigali Convention Center',
      image_url: 'https://picsum.photos/id/237/200/300',
      start_date: '2019-11-12T13:09:56.766Z',
      end_date: '2019-11-12T13:09:56.766Z',
      event_type: 'DINNER_OR_GALA',
      organizer: 'Ministry of ICT',
      newTag: 'sports'
    }
  }
};
const defaultInitialState = {
  message: '',
  error: '',
  token: '',
  refresh: '',
  tags: [],
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  },
  meetUp: {
    name: '',
    venue: '',
    image_url: '',
    start_date: '2019-11-12T13:09:56.766Z',
    end_date: '2019-11-12T13:09:56.766Z',
    event_type: '',
    organizer: '',
    newTag: ''
  }
};

export {
  testInitialState,
  testInput,
  validUserPayload,
  invalidUserPayload,
  setUp,
  defaultInitialState,
  fakeTokenRefresh,
  fakeTokenAccess,
  fakeErrorMessage,
  testTags,
  validMeetUpPayload,
  invalidMeetUpPayload
};
