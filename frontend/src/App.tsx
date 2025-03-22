import ShortUrlForm from "./components/shortenPage/shortenForm"
import ShortenResult from "./components/shortenPage/shortenResult"

const App = () => {

  return (
    <>
      <main className='flex flex-col justify-center items-center'>
        <ShortUrlForm />
        <ShortenResult />
      </main>
    </>
  )
}

export default App
