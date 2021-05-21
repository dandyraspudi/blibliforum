import {useState} from 'react'
import Head from 'next/head'
import Layout from '../../../components/Layout'
import { Alert, Form, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import GoogleIcon from '../../../components/Icon/Google'
import FacebookIcon from '../../../components/Icon/Facebook'

const Register = (): JSX.Element => {
  const [show, setShow] = useState(false) 
  const [stats, setStats] = useState('danger')
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {

    }

    setValidated(true);
    setShow(true)
  };

  return (
    <>
      <Head>
        <title>Blibli Friends - Daftar Jadi Blibli Friends</title>
      </Head>
    <div className="col-12 col-md-6 col-lg-5 mx-auto verify-group">
      <div className="row mb-3 m-auto">
        <div className="col-12 text-center mb-3 head-label">
            <strong className="h1 text-default font-weight-bolder d-block">Verifikasi Email</strong>
        </div>
        { show && (<Col>
          <Alert variant={stats}>
            <Alert.Heading className="d-flex align-items-center justify-content-between">
              <strong>Error</strong>
              <Button onClick={() => setShow(false)} variant="danger-outline" size="sm" className="p-0 text-danger">
                X
              </Button>
            </Alert.Heading>
              <p className="mb-0">Code tidak ada atau sudah tidak berlaku</p>
          </Alert>
        </Col>)}
        <div className="col-12 text-center">
          <p>Masukkan kode verifikasi yang sudah kami kirimkan ke email <span className="text-primary">email@email.com</span></p>
        </div>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="row row-bottom-group m-auto">
          <Form.Group controlId="formVerifyCode" className="col-12 txt-input-group">
            <Form.Label className="label-kode">Kode Verifikasi</Form.Label>
            <Form.Control type="text" required className="txt-input"/>
            <Form.Control.Feedback type="invalid">
              Harap mengisi kode.
            </Form.Control.Feedback>
          </Form.Group>
          <div className="col-12 my-2 btn-verify-group">
            <Button variant="primary" type="submit" className="btn-verify font-weight-bold" block>
              Verifikasi
            </Button>
            <p className="text-center mt-4">
              Belum menerima kode ? <a href="#">Kirim Ulang</a>
            </p>
          </div>
        </div>
      </Form>
    </div>
    </>
  )
}

Register.getLayout = Layout

export default Register