import { ComponentType, useEffect, useState } from 'react';
import { injectReducer } from '@nretana/microfrontend-lib';
import { loadRemote } from '@module-federation/runtime';

export const withRemoteInjectReducer = (Component: ComponentType,
                                        reducer: { scope: string, module: string; reducerKey: string }): React.FC => {

  const componentWithInjectReducer: React.FC = () => {
    const [slice, setSlice] = useState<any>(null);

    useEffect(() => {
      const loadReducer = async () => {
        try {
            // @ts-ignore
            /* const remoteProfileSlice = await import(`${reducer.scope}/${reducer.module}`)
                                                .then((module) => module.default); */

            // @ts-ignore
            const { default: module } = await loadRemote(`${reducer.scope}/${reducer.module}`);
            setSlice(() => module);
        }
        catch(error){
            console.log('ERROR', error);
        }
      };

      loadReducer();
    }, []);

    slice !== null && injectReducer(reducer.reducerKey, slice.reducer);

    return slice !== null ? <Component /> : <>testing</>;
  };

  return componentWithInjectReducer;
};
