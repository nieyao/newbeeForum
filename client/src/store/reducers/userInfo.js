const defaultValue = {
  avatarUrl: '',
  username: null,
  account: '',
  sex: 0,
  email: '',
  userId: '',
  isSignIn: false
}

const userInfo = (state = defaultValue, action) => {
  switch(action.type){
    case 'ADD_USERINFO':
      return Object.assign({}, state, action.info);
    default:
    return state;
  }
}

export default userInfo;