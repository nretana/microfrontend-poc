import type { PropsWithChildren } from 'react';
import { useAuthority } from '@nretana/microfrontend-lib';
import AccessForbiddenContent from '@/components/shared/AccessForbiddenContent';


type AuthorityGuardProps = PropsWithChildren & {
    userAuthority: string[],
    authority: string[]
}

const AuthorityGuard: React.FC<AuthorityGuardProps> = ({ userAuthority = [], authority = [], children }) => {

    const isAuthorized = useAuthority(userAuthority, authority);

    return(isAuthorized ? <>{children}</> : <AccessForbiddenContent />);
}

export default AuthorityGuard;