import PreviewCard from "./components/PreviewCard"

function App() {
  

  return (
    <>
      <main className="font-montserrat w-full h-screen flex justify-center items-center">
        <div className="preview flex flex-col justify-between items-center gap p-5 rounded-md lg:w-[370px] md:w-3/4 w-[90%]">
        <PreviewCard numberOfPages={4}/>
        </div>
      </main>
    </>
  )
}

export default App
