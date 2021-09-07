import FirebaseAuth from '../components/auth/FirebaseAuth'
import Link from 'next/link'

const AuthPage = () => {
  return (
    <>
      <FirebaseAuth />
      <p>
        <Link href='/'>Go Home</Link>
      </p>
    </>
  )
}

export default AuthPage
