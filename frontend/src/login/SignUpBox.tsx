import { useState } from 'react';
import { Image, Button, Card, CardBody, Heading, Stack, FormControl, FormLabel, Input, CardFooter, Text, Link } from '@chakra-ui/react'
import SignUpHandler from './SignUpHandler';
import UsernameInput from '../components/UsernameInput'
import PasswordInput from '../components/PasswordInput'

const SignUpBox = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = () => {
    if (password !== repeatPassword) {
      alert('Passwords do not match');
      return;
    }

    SignUpHandler({ username, password });
  };

  return <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'>

    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src='https://loremflickr.com/1280/720'
    />

    <Stack>
      <CardBody>
        <Heading size='md'>Sign up</Heading>
      </CardBody>
      <CardBody>
        <UsernameInput value={username} onChange={(e) => setUsername(e.target.value)} />
        <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
        <FormControl>
          <FormLabel>Repeat password</FormLabel>
          <Input
            type="password"
            placeholder="Repeat password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </FormControl>
        <Button variant='solid' colorScheme='blue' mt={3} onClick={handleSubmit}>
          Sign up
        </Button>
      </CardBody>
      <CardFooter>
        <Text>Or sign in <Link href='/'>here</Link></Text>
      </CardFooter>
    </Stack>
  </Card>
}

export default SignUpBox