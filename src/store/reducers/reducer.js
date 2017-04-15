import Action from '../actions/action';

function reducer(value,action){
  switch(action.type){
    case Action.SIGN_UP_DATA:
    return  action.payload

    case Action.SIGN_IN_DATA:
    return action.payload
  }
}

export default reducer;