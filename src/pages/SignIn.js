import {Button, Form} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import api from "../api";
import useAuth from "../hooks/useAuth";


function SignIn() {

    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');

    const {token, setTokenData} = useAuth();
    console.log(token)

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setMsg('');

        const data = {
            "email": formEmail,
            "password": formPassword
        };
        api.auth.login(data)
            .then(r => {
                const {auth_token} = r.data;
                if (auth_token) {
                    setTokenData(auth_token);
                    localStorage.setItem('auth_token', auth_token);
                    setMsg('Successfully logged in');

                    console.log(token)

                }
            })
            .catch(error => {
                if (error.response.data) setMsg(error.response.data.non_field_errors);
                else setMsg(error.message);
            })
            .finally(() => setIsLoading(false));

    }

  return (

      <Form onSubmit={handleSubmit}>

          <p>{msg && msg }</p>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"
                            placeholder="Enter email"
                            value={formEmail}
                            onChange={e => setFormEmail(e.target.value)}
                            required
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                            placeholder="Password"
                            value={formPassword}
                            onChange={e => setFormPassword(e.target.value)}
                            required
              />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isLoading}>Signin</Button>

      </Form>
  )
}

export default SignIn;