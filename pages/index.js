import Link from 'next/link'
import styles from '../styles/Home.module.css'
import WriteToCloudFirestore from '../components/cloudFirestore/Write'
import ReadFromCloudFirestore from '../components/cloudFirestore/Read'
import { useUser } from '../firebase/useUser'
import Counter from '../components/realtimeDatabase/Counter'
import UploadFile from '../components/storage/UploadFile'

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
          <Counter id={user.id} />
          <UploadFile />
          <button onClick={() => logout()}>Logout</button>
        </main>
      ) : (
        <Link href='/auth'>Login</Link>
      )}
    </div>
  )
}
