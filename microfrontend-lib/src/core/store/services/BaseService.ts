import axios, { AxiosError } from 'axios';
import appConfig from '@/core/configs/app.config';
import { TOKEN_TYPE, REQUEST_HEADER_AUTH_KEY } from '@/core/constants/api.constant';
import { PERSIST_STORE_NAME } from '@/core/constants/app.constants';
import { deepParseJson } from '@/core/utils/deepParseJson';
import { signOutSuccess } from '@/core/store/slices/auth';
import { store } from '@/core/store'

const unauthorizedCode = [401]

const BaseService = axios.create({
    timeout: 60000,
    baseURL: appConfig.apiPrefix,
});

const BackgroundService = axios.create({
    timeout: 60000,
    baseURL: appConfig.apiPrefix,
});

BaseService.interceptors.request.use(
    (config) => {
        const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME)
        const persistData = deepParseJson(rawPersistData)

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let accessToken = (persistData as any).auth.session.token

        if (!accessToken) {
            const { auth } = store.getState()
            accessToken = auth.session.token
        }

        if (accessToken) {
            config.headers[
                REQUEST_HEADER_AUTH_KEY
            ] = `${TOKEN_TYPE}${accessToken}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)

BaseService.interceptors.request.use((config) => {

    //validate token expiration
    //get a new access token with the refresh token
    //use BackgroundService instance

    return config;
}, (error) => {
    return Promise.reject(error);
})

BaseService.interceptors.response.use(
    (response) => response,
    (error) => {
        const { response } = error as AxiosError;

        if (response && unauthorizedCode.includes(response.status)) {
            store.dispatch(signOutSuccess())
        }

        return Promise.reject(error);
    }
)

export default BaseService;
