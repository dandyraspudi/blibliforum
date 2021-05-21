import Head from 'next/head'
import Layout from '../components/Layout'
import { InputGroup, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import GoogleIcon from '../../../components/Icon/Google'
import FacebookIcon from '../../../components/Icon/Facebook'

const Register = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blibli Friends - Halaman tidak ditemukan</title>
      </Head>
    <div className="row my-3">
        <div className="col-12 text-center my-4">
            <div className="d-flex align-items-center justify-content-center my-5">
                <strong className="h1 text-default font-weight-bolder d-block p-3 mr-3 mb-0 border-right">404</strong>
                <span>Mohon maaf friends, halaman tidak ditemukan, kembali ke <a href="/">depan</a>.</span>
            </div>
        </div>
    </div>
    </>
  )
}

Register.getLayout = Layout

export default Register