// Login Reducer

const loginReducerDefaultState = {
  role: ''
};

export default (state = loginReducerDefaultState, action) => {
  switch (action.type) {
    case 'Login_Student':
      return{
        role: 'Student'
      };
    case 'Login_Teacher':
      return {
        role: 'Teacher'
      }
    case 'Login_Admin':
      return {
        role: 'Admin'
      }
    case 'Login_SuperAdmin': 
      return {
        role: 'SuperAdmin'
      }
    default:
      return state;
  }
};
