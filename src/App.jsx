import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'

function App() {
  return (
    <>
      <section className='w-full h-screen flex justify-around items-center'>
        <Card1 />
        <Card2 />
        <Card3 />
      </section>
    </>
  )
}

export default App
