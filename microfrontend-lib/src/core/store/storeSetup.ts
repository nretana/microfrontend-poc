import {
    configureStore,
    Action,
    Reducer,
    AnyAction,
    Store,
} from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PERSIST_STORE_NAME } from '@/core/constants/app.constants'
import rootReducer, { RootState, AsyncReducers } from './rootReducer'
import RtkQueryService from './services/RtkQueryService'

/* eslint-disable @typescript-eslint/no-explicit-any */
const middlewares: any[] = [RtkQueryService.middleware]

const persistConfig = {
    key: PERSIST_STORE_NAME,
    keyPrefix: '',
    storage,
    whitelist: ['auth', 'locale'],
}

export interface CustomStore extends Store<RootState, AnyAction> {
    asyncReducers?: AsyncReducers
}

const store: CustomStore = configureStore({
    reducer: persistReducer(persistConfig, rootReducer() as Reducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(middlewares),
    devTools: process.env.NODE_ENV === 'development',
})

store.asyncReducers = {}
const reducersRegistry: AsyncReducers = store.asyncReducers;
function getStateType<Key extends string>(key: Key): any {
    const reducer = reducersRegistry[key];
    if (!reducer) {
      throw new Error(`Reducer for ${key} not found`);
    }
    return reducer(undefined, { type: '@@INIT' }); // Calling the reducer with undefined to get its initial state
}

function getRootState() {
    const rootState: Partial<Record<string, any>> = {};
  
    for (const key in reducersRegistry) {
      rootState[key] = getStateType(key);
    }
  
    return rootState;
}


export function injectReducer<S>(key: string, reducer: Reducer<S, Action>) {
    console.log('async reducers obj', store.asyncReducers);
    if (store.asyncReducers) {
        if (store.asyncReducers[key]) {
            return false
        }
        console.log('reducer key: ', key);
        store.asyncReducers[key] = reducer
        store.replaceReducer(
            persistReducer(
                persistConfig,
                rootReducer(store.asyncReducers) as Reducer
            )
        )
        console.log('reducers injected the store: ', store);
    }
    persistor.persist()
    return store
}

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch
export type StoreState = RootState & ReturnType<typeof getRootState>;
export default store
