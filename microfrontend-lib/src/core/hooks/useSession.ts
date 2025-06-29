import { useAppSelector } from '../store';

export const useSession = () => {
    const token = useAppSelector(state => state.auth.session.token);
    const isSignedIn = useAppSelector(state => state.auth.session.signedIn);
    const isSignInSSO = useAppSelector(state => state.auth.session.signedInSSO);

    return { authenticated: token && isSignedIn,
             isSignedInSSO: isSignInSSO }
}
