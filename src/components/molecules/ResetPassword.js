import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, updatePassword } from "firebase/auth";
import styled from 'styled-components';
import Input from '../atoms/Input'
import Button from '../atoms/Button'


const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 1rem;
    margin: 0 1rem;
    max-width: 50vw;
    width: 40vw;
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

const ResetPassword = () => {

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;


  const handleSumit = async (event) => {
    event.preventDefault()
    try {
      // await updatePassword(user, confirmPassword);
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
        <Form onSubmit={handleSumit}>
          <Title>Reset Password</Title>
          <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input type="confirmPassword" label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          <Button>Submit</Button>

        </Form>
      </Box>
    </Section>
  )
}

export default ResetPassword