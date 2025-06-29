import { ComponentType } from 'react';
import { Reducer, Action } from '@reduxjs/toolkit';
import { injectReducer } from '@nretana/microfrontend-lib';


export const withInjectReducer = <T extends Record<string, unknown>, S>(
                                        Component: ComponentType<T>,
                                        reducer: { key: string, reducerFn: Reducer<S, Action>  }): React.FC<T> => {
                                            
    const componentWithInjectReducer: React.FC<T> = (props: T) => {
        
        const result = injectReducer(reducer.key, reducer.reducerFn);
        console.log("TESTING HOC", result);
        return (<Component {...props} />)
    }

    return componentWithInjectReducer;
}