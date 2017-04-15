export default class Action{
    static SIGN_UP_DATA = "SIGN_UP_DATA";
    static SIGN_IN_DATA = "SIGN_IN_DATA";
    static SIGN_OUT = "SIGN_OUT";

    static signUpData(obj){
        console.log(obj)
        return { 
            type: Action.SIGN_UP_DATA,
            payload: obj
        }
    }

    static signIn(obj){
        console.log(obj)
        return { 
            type: Action.SIGN_IN_DATA,
            payload: obj
        }
    }

     static signOut(){
        return { 
            type: Action.SIGN_OUT
        }
    }
}