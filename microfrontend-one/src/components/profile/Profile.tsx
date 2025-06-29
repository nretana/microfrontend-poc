import { useAppSelector, useAppDispatch } from '@nretana/microfrontend-lib';
import { Button, Title, TextInput } from '@mantine/core';
import { setUser } from '@nretana/microfrontend-lib';
import { setProfile } from '@/store/slices/profileSlice';
import cx from 'clsx';
import classes from './Profile.module.css';
import { useState } from 'react';

const Profile = () => {

  const dispatch = useAppDispatch();
  const profile = useAppSelector<any>(state => state['profile']) as any || null;
  const [inputName, setInputName] = useState<string>('');
  const [inputLastName, setInputLastName] = useState<string>('');

  const onclickSubmitButton = () => {
    dispatch(setProfile({ name: inputName, lastName: inputLastName }));
  }

  return (
    <section>
      <Title order={2}>Profile</Title>
      <div className={cx(classes['card-test'], 'my-4')}>
        <span className='fw-bold me-2'>Full Name:</span>
        <span>{profile !== null ? `${profile?.name} ${profile?.lastName}` : 'There is no profile data stored in the current state'}</span>
      </div>
      <div className='mb-2 max-w-[1024px]'>
        <TextInput key='InputName' label='Name' onChange={(e) => setInputName(e.currentTarget.value)} value={inputName}/>
       <br />
        <TextInput key='InputLastName' label='Last Name' onChange={(e) => setInputLastName(e.currentTarget.value)} value={inputLastName}/>
      </div>
      <div className='my-2'>
        <Button className='me-2' onClick={onclickSubmitButton}>Submit</Button>
        <Button variant='outline' className='me-2' onClick={onclickSubmitButton}>Outline</Button>
        <Button variant='secondary' className='me-2' onClick={onclickSubmitButton}>Secondary</Button>
        <Button variant='default' className='me-2' onClick={onclickSubmitButton}>Default</Button>
      </div>
    </section>
  );
};

export default Profile;