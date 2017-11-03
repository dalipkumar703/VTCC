const login=(state=[],action)=>{
  switch(action.type)
  {
    case "LOGIN_SUCCESSFULLY":
    console.log("login successfully reducer is running",action);
    return [
      ...state,
      {
        id: action.object.id,
        name: action.object.name
      }
    ]
    default :
    return state
  }
}
export default login
