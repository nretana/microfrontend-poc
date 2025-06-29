import { Title } from '@mantine/core';
import { LoadingContent } from '@nretana/microfrontend-lib';
import { Alert } from '@nretana/microfrontend-lib';
import { store } from '@nretana/microfrontend-lib';

const DashboardView = () => {

  console.log('STORE STATE', store.getState());

  return (<>
          <Title order={2}>Dashboard Host App Three</Title>
          <Alert severity='success'>Testing alert bar</Alert>
        </>);
};

export default DashboardView;