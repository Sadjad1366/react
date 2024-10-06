
import './App.css'
import { AsideDiv } from './components/AsideDiv'
import { Contact } from './components/Contact'
import { InputsDiv } from './components/InputsDiv'

function App() {

  return (
 <div className='container mx-auto px-20'>
<Contact/>
<div className="flex justify-between gap-x-72 mt-20">
<InputsDiv/>
<AsideDiv/>
</div>

 </div>
  )
}
export default App
