import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import styled from 'styled-components';
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import styles from './Login.module.css'

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

const ForgotPassword = () => {

  const [email, setEmail] = React.useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSumit = async (event) => {
    event.preventDefault()
    try {
      // await sendPasswordResetEmail(auth, email);
      navigate('/login/reset', { replace: true });
    }
    catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  return (
    <Section>
      <Box>
        <div className={styles.forgotImg} />
        <Form onSubmit={handleSumit}>
          <Title>Forgot your password?</Title>
          <Input type="text" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button>Submit</Button>
        </Form>
      </Box>
    </Section>
  )
}

export default ForgotPassword