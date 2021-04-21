// import { AUTH_LOGIN, AUTH_LOGIN_ERROR, AUTH_LOGOUT, AUTH_POPUP, AUTH_UPDATEINFO } from '../type'
import createSlice from "../../core/createSlice";



let initialState = JSON.parse(localStorage.getItem('auth')) || {
    login: false,
    user: null,
    popupOpen: false,
    loginError: null,
    loading: true,
}

// export default function authReducer(state = initialState, action) {
//     switch (action.type) {
//         case AUTH_POPUP:
//             return {
//                 ...state,
//                 popupOpen: action.payload
//             }

//         case AUTH_LOGIN:


//             // localStorage.setItem('auth', JSON.stringify({
//             //     user: action.payload,
//             //     login: true
//             // }))
//             // if (action.payload.token) {
//             //     localStorage.setItem('token', JSON.stringify(action.payload.token))
//             // }
//             return {
//                 ...state,
//                 login: true,
//                 user: action.payload
//             }


//         case AUTH_LOGOUT:

//             return {
//                 ...state,
//                 login: false,
//                 user: null
//             }
//         case AUTH_UPDATEINFO:
//             return {
//                 ...state,
//                 user: action.payload
//             }

//         case AUTH_LOGIN_ERROR:
//             return {
//                 ...state,
//                 loginError: action.payload
//             }
//         default:
//             return state;
//     }

// }


let { action, type, reducer } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        popupLogin(state, action) {
            return {
                ...state,
                popupOpen: action.payload
            }
        },
        login(state, action) {
            return {
                ...state,
                login: true,
                user: action.payload
            }
        },
        logout(state, action) {
            return {
                ...state,
                login: false,
                user: null
            }
        },
        updateInfo(state, action) {
            return {
                ...state,
                user: action.payload
            }
        },
        loginError(state, action) {
            return {
                ...state,
                loginError: action.payload
            }
        },
        fetchLogin(state, action) {
            return state;
        },
    }


})



export default reducer;

export const AUTH = type;

export const { popupLogin, login, logout, updateInfo, loginError, fetchLogin } = action;
