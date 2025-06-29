import { LoadingContent } from '@nretana/microfrontend-lib';
import { Suspense } from 'react';
import { RouteTree, ViewRoute } from '@nretana/microfrontend-lib';

type AppLayoutProps = {
    route: RouteTree
  };

const AppLayout: React.FC<AppLayoutProps> = ({ route }) => {

    return(
    <Suspense fallback={<LoadingContent />}>
        <ViewRoute routeKey={route.key} 
                   component={route.component} />
    </Suspense>)
}

export default AppLayout;