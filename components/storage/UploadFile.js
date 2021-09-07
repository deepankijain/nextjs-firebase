import firebase from 'firebase/app'
import 'firebase/storage'
import { useRef, useState } from 'react'

const UploadFile = () => {
  const inputEl = useRef(null)
  const [value, setValue] = useState(0)

  function uploadFile() {
    const file = inputEl.current.files[0]
    const storageRef = firebase.storage().ref('user_uploads/' + file.name)
    const task = storageRef.put(file)
    task.on(
      'state_change',

      function progress(snapshot) {
        setValue((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      },

      function error(err) {
        alert(error)
      },

      function compleete() {
        alert('Uploaded to firebase storage successfully!')
      },
    )
  }

  return (
    <div>
      <progress value={value}></progress>
      <br />
      <input type='file' onChange={uploadFile} ref={inputEl} />
    </div>
  )
}
export default UploadFile
