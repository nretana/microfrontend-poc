import { Navigate } from 'react-router-dom';
import { Button, Title } from '@mantine/core';
import { INTERNAL_SERVER_ERROR_PATH } from '@/constants/routes.constants';
import { FallbackContent } from '@nretana/microfrontend-lib';

const InternalServerErrorView = () => {
  //return(<FallbackContent />)
  return (
    <section className='flex justify-center items-center text-center h-screen'>
      <div>
        <Title order={1}>Internal server error!</Title>
        <p className='my-4'>
          The server encountered an error and could nort complete your request.
          Please, try again later.
        </p>
        <Button>Retry</Button>
      </div>
    </section>
  );
};

export default InternalServerErrorView;
