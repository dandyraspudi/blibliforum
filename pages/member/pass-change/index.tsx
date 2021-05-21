import Head from 'next/head'
import Layout from '../../../components/Layout'
import Image from 'next/image'
import { InputGroup, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'

const Register = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blibli Friends - Daftar Jadi Blibli Friends</title>
      </Head>
    <div className="col-12 col-md-6 col-lg-5 mx-auto form-profil">
        <div className="row mb-3 m-auto">
            <div className="col-12 text-center mb-3 image-success-group">
                <div className="success-group rounded-circle m-auto">
                <Image src="/images/icon-pass-key.png" alt="me" width="64" height="64" />
                </div>
            </div>
            <div className="text-group col-12 text-center mb-3">
                <strong className="h1 text-default font-weight-bolder d-block">Berhasil</strong>
                <p className="text-center text-content m-auto" width="376px">Kata sandi baru Anda telah berhasil dibuat. Silahkan masuk menggunakan email dan kata sandi yang telah Anda buat.</p>
            </div>
        </div>
      <Form>
        <div className="row">
          <div className="col-12 my-2">
            <Button className="btn-save font-weight-bold m-auto" variant="primary" type="submit" block>
              Masuk Ke Akun
            </Button>
          </div>
        </div>
      </Form>
    </div>
    </>
  )
}

Register.getLayout = Layout

export default Register