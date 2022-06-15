import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styled from 'styled-components';
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import styles from './Login.module.css'

import { ReactComponent as Google } from '../../assets/google.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Github } from '../../assets/github.svg';

import { useNavigate, Link } from 'react-router-dom';

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 1rem;
    margin: 0 1rem;
`
const Section = styled.section`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: rgb(97,205,192);
    background: linear-gradient(90deg, rgba(97,205,192,1) 0%, rgba(120,207,199,1) 50%, rgba(57,105,99,1) 100%); 
    `

const Box = styled.div`
    display: grid;
    justify-content: center;
    border-radius: 1.5rem;
    align-items: center;
    height: 75vh;
    background-color: white;
`

const Title = styled.h1`
    font-size: 36px;
    line-height: 64px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    margin-bottom: 1rem;
    text-align: center;

`

const Line = styled.div`
  border-top: 1px solid #222;
  width: 15rem;
`

const SignUp = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const navigate = useNavigate();
  const auth = getAuth();


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home', { replace: true });
    }
    catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  return (
    <main className={styles.main}>
      <Section>
        <Box>

          <Form onSubmit={handleSubmit}>
            <Title>Sign Up</Title>
            <Input type="text" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input type="confirmPassword" label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <Button>Submit</Button>
            <div style={{ display: 'flex', marginTop: '1rem', justifyContent: 'center', alignItems: 'center' }}>
              <Line /> <span style={{ margin: '15px' }}> OR </ span> <Line />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem' }}>
              <Link to="/" aria-label="Login with Github" className={styles.logo}>
                <Github />
              </Link>
              <Link to="/" aria-label="Login with Facebook" className={styles.logo}>
                <Facebook />
              </Link>
              <Link to="/" aria-label="Login with Google" className={styles.logo}>
                <Google />
              </Link>
              <Link to="/" aria-label="Login with Twitter" className={styles.logo}>
                <Twitter />
              </Link>
            </div>
          </Form >
        </Box>
      </Section>
    </main>
  )
}

export default SignUp