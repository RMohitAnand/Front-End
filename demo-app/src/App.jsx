import Thumbnail from "./components/Thumbnail"

function App() {

  const list = [
    'My name is Mohit',
    'I am a 2019 BITS Passout',
    'I am looking to transition into Developer roles'
  ]

  const myList = list.map((item, index) => <li>{item}</li>)
  
  return (
    <>
      <div>
      <Thumbnail />
      </div>
      
      {myList}
    </>
  )
}

export default App
