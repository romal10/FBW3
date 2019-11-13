const initialState = {
    userArray : [
        {
            id: 1,
            age: 34,
            password: 'peter1234'
            
        },
        {
            id: 2,
            username: 'balala',
            age: '27',
            password: 'dci'
        }
    ],
    logedIn:false,
    logedUser: {}
}

const usersReducer =(state=initialState, action) => {
    switch (action.type){
        case 'LOGIN_ACTION':
            let success = false;
            let logedUser = {};
            state.usersArray.forEach ((user)=>{
                if(user.username === action.username && user.password ===action.password){
                    success =true;
                    logedUser=user;
                }
        })
        return {
            ...state,
            logedIn:success,
            logedUser:logedUser
        }
    case 'REGISTER_ACTION':
    let newUserArray = [...state.userArray];
    let newID  = newUserArray.length+1;
    let newUser = {
        id:newID, 
        ...action.userinfo
    }
    newUserArray.push(newUser) 
    return ({
        usersArray:newUserArray,
        logedIn: true,
        logedUser:newUser
    })
    case 'LOGOUT_ACTION':
    return ({
        ...state,
        logedIn:false,
        logedUser:{}
    })
    default:
    return state
}
}
export default usersReducer;