export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "ONLINE_USERS":
      return {
        // ...state,
        users: action.users,
      };
    default:
      return state;
  }
};
