import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../../firebase/useUser'
const WriteToCloudFirestore = () => {
  const { user } = useUser()
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection('myCollection')
        .doc(user.id)
        .set({
          stringExample: 'Deepanki Jain',
          booleanExample: true,
          numberExample: 3.14159265,
          dateExample: firebase.firestore.Timestamp.fromDate(
            new Date('December 10, 1815'),
          ),
          arrayExample: [5, true, 'hello'],
          nullExample: null,
          objectExample: {
            a: 5,
            b: {
              nested: 'foo',
            },
          },

          geopointExample: new firebase.firestore.GeoPoint(
            34.714322,
            -131.468435,
          ),
        })
        .then(alert('Data was sent to cloud firestore successfully!'))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button onClick={sendData}>Send data to Firestore</button>
    </>
  )
}

export default WriteToCloudFirestore
