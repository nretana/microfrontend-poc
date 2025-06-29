import { Button, Title } from '@mantine/core';


const ModuleFallbackContent = () => {

    return(<section className='flex justify-center items-center text-center h-screen'>
        <div>
          <Title order={1}>Feature not available!</Title>
          <p className='my-4'>
            The server encountered an error and could nort complete your request.
            Please, try again later.
          </p>
          <Button>Retry</Button>
        </div>
      </section>)
}

export default ModuleFallbackContent;