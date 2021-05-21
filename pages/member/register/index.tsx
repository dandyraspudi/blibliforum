import Head from 'next/head'
import Auth from '../../../components/Layout/Auth'
import { InputGroup, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import GoogleIcon from '../../../components/Icon/Google'
import FacebookIcon from '../../../components/Icon/Facebook'

const Register = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blibli Friends - Daftar Jadi Blibli Friends</title>
      </Head>
    
    <div className="row mb-3">
      <div className="col-12 text-center mb-4">
          <strong className="h1 text-default font-weight-bolder d-block">Daftar</strong>
      </div>
      <div className="col-12">
        <Button variant="outline-primary text-dark hover-text-white mb-3 d-flex align-items-center py-2" block>
          <GoogleIcon width="16" className="flex-shrink-0"/>
          <span className="flex-grow-1">Masuk dengan Google</span>
        </Button>
        <Button variant="outline-primary text-dark hover-text-white d-flex align-items-center py-2" block>
          <FacebookIcon width="16" className="flex-shrink-0"/>
          <span className="flex-grow-1">Masuk dengan Facebook</span></Button>
      </div>
      <div className="col-12">
        <label className="divider">
          <span>Atau daftar dengan email</span>
        </label>
      </div>
    </div>
    <Form>
      <div className="row">
        <Form.Group controlId="formBasicName" className="col-12">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control type="text" placeholder="Masukkan nama lengkap kamu" />
        </Form.Group>
        <Form.Group controlId="formBasicUsename" className="col-12">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
          <Form.Text className="text-muted">
            http://blibli.com/friends/author/
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col-12">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Masukkan email kamu" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="col-12 password">
          <Form.Label>Kata Sandi</Form.Label>
          <InputGroup>
            <Form.Control type="text" placeholder="Masukkan kata sandi" />
            <InputGroup.Append>
              <Button variant="link">
                <FontAwesomeIcon icon={faEye} color="#008BD2" width="18" height="18" />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <div className="col-12 my-2">
          <Button variant="primary" type="submit" block>
            Daftar
          </Button>
          <p className="text-center mt-4">
            Sudah punya akun ? <a href="#">Masuk</a>
          </p>
        </div>
      </div>
    </Form>
    </>
  )
}

Register.getLayout = Auth

export default Register