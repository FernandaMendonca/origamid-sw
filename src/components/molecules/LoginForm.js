import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import firebase from "../../firebase";
import styled from 'styled-components';
import { UserContext } from '../../helpers/UserContext';
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import styles from './Login.module.css'

import { ReactComponent as Google } from '../../assets/google.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Github } from '../../assets/github.svg';

const Form = styled.form`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
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
    grid-template-columns: 1fr 1fr;
`

const Title = styled.h1`
    font-size: 36px;
    line-height: 64px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    margin-bottom: 1rem;
`

const P = styled.span`
    font-size: 14px;
    line-height: 28px;
    font-family: 'Poppins', sans-serif;
`

const Line = styled.div`
  border-top: 1px solid #222;
  width: 15rem;
`


const LoginForm = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const context = React.useContext(UserContext);
  const auth = getAuth();

  console.log(provider, context, auth)

  const signInGoogle = () => {
    // auth().signInWithRedirect(auth, provider);
  }

  const handleSumit = async (event) => {
    event.preventDefault()
    try {
      // await auth().signInWithEmailAndPassword(auth, email, password);
      navigate('/home', { replace: true });
    }
    catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  return (
    <Section>
      <Box>
        <div className={styles.loginImg} />
        <Form onSubmit={handleSumit}>
          <Title>Login</Title>
          <div>
            <Input type="text" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <P style={{ marginTop: 10, marginBottom: 10 }}>
            <Link to="/login/forgot">
              Forgot your password?
            </Link>
          </P>
          <Button>Submit</Button>
          <P style={{ marginTop: 10, marginBottom: 10 }}>
            New user?
            <Link to="/login/signup" style={{ marginLeft: 5 }}>
              Sign Up
            </Link>
          </P>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
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
              <div onClick={signInGoogle()} aria-label="Login with Google" className={styles.logo}>
                <Google />
              </div>
              <Link to="/" aria-label="Login with Twitter" className={styles.logo}>
                <Twitter />
              </Link>
            </div>
          </div>
        </Form>
      </Box>
    </Section>
  )
}

export default LoginForm