import firebase from 'firebase/app'
import 'firebase/firestore'

const ReadFromCloudFirestore = () => {
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection('myCollection')
        .doc('my_document')
        .onSnapshot(function (doc) {
          console.log(doc.data())
        })
      alert(
        'Data was successfully fetched from cloud firestore! Close this alert and check console for output.',
      )
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  return (
    <div>
      <button onClick={readData}>Read Data from Firestore</button>
    </div>
  )
}

export default ReadFromCloudFirestore
