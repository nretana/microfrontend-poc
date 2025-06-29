import { Title } from '@mantine/core';
import { useSelector } from 'react-redux';

const PaymentMethodList = () => {

    const profile = useSelector<any>(state => state['profile']) || null;

    console.log('CURRENT PROFILE: ', profile);

    return(<>
        <Title order={2}>Payment Methods</Title>

    </>)
}

export default PaymentMethodList;