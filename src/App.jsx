import { SelectDemo } from "./Select"

function App() {
  return (
    <div>
      <div className="bg-slate-100 w-full h-16"></div>
      <div className="bg-slate-200 w-full h-16"></div>
      <div className="bg-slate-300 w-full h-16"></div>
      <div className="bg-slate-400 w-full h-32"></div>
      <div className="bg-slate-500 w-full h-64"></div>
      <div className="bg-slate-400 w-full h-32"></div>
      <div className="bg-slate-300 w-full h-16"></div>
      <div className="container mx-auto mb-12 grid max-w-screen-xl gap-4 py-10 dark:text-black sm:grid-cols-2 md:px-4 lg:grid-cols-3">
        <div className="flex h-[18rem] flex-col justify-between bg-white p-10 text-center shadow dark:bg-gray-700 dark:text-gray-100 sm:h-[19rem] sm:rounded-lg md:h-[18rem]">
          <SelectDemo></SelectDemo>
        </div>
      </div>
      <div className="bg-slate-300 w-full h-16"></div>
      <div className="bg-slate-400 w-full h-32"></div>
      <div className="bg-slate-500 w-full h-64"></div>      
      <div className="bg-slate-400 w-full h-32"></div>
      <div className="bg-slate-300 w-full h-16"></div>
      <div className="bg-slate-200 w-full h-16"></div>
      <div className="bg-slate-100 w-full h-16"></div>
    </div>
  )
}

export default App
