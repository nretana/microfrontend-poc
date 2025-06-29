import type { PropsWithChildren } from 'react';
import { useAuthority } from '@/core/hooks/useAuthority';
import { AccessForbiddenContent } from '@/core/components/shared/AccessForbiddenContent';


type AuthorityGuardProps = PropsWithChildren & {
    userAuthority: string[],
    authority: string[]
}

export const AuthorityGuard: React.FC<AuthorityGuardProps> = ({ userAuthority = [], authority = [], children }) => {

    const isAuthorized = true; //useAuthority(userAuthority, authority);
    console.log("is authorized: ", isAuthorized);

    return(isAuthorized ? <>{children}</> : <AccessForbiddenContent />);
}