export const initialState = {
    message: "",
    error: "",
    token: "",
    refresh:"",
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    meetUp:{
      name : "",
      venue : "",
      image_url : "", 
      start_date : new Date(),
      end_date : new Date(),
      event_type : "",
      organizer : ""
    }
  };
