export const commonReducer = (
  state = { socket: null, isJoined: false },
  action
) => {
  switch (action.type) {
    case "CHAT_JOINED":
      return {
        ...state,
        socket: action.socket,
      };
    case "JOINED":
      return {
        ...state,
        isJoined: true,
      };
    default:
      return state;
  }
};
