import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import WriteToCloudFirestore from '../components/cloudFirestore/Write'
import ReadFromCloudFirestore from '../components/cloudFirestore/Read'
import { useUser } from '../firebase/useUser'

export default function Home() {
  const { user, logout } = useUser()
  return (
    <div className={styles.container}>
      {user ? (
        <main className={styles.main}>
          {user?.profilePic ? (
            <image src={user?.profilePic} height={100} width={100}></image>
          ) : (
            <p>No profile pic</p>
          )}
          <WriteToCloudFirestore />
          <ReadFromCloudFirestore />
          <button onClick={() => logout()}>Logout</button>
        </main>
      ) : (
        <Link href='/auth'>Login</Link>
      )}
    </div>
  )
}
