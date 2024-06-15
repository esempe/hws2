import { loadingReducer } from "./loadingReducer";
import {
	AnyAction,
	applyMiddleware,
	combineReducers,
	legacy_createStore,
} from "redux";
import { themeReducer } from "../../hw12/bll/themeReducer";
import { useDispatch } from "react-redux";
import { ThunkDispatch, thunk } from "redux-thunk";

const reducers = combineReducers({
	loading: loadingReducer, // hw10
	theme: themeReducer, // hw12
});

const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>;

export type AppStoreType = ReturnType<typeof reducers>;

export type AppRootStateType = ReturnType<typeof reducers>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

// @ts-ignore
window.store = store; // for dev // для того чтобы автотесты видели состояние данных
