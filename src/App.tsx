
import './App.css'
import { AsideDiv } from './components/AsideDiv'
import { Contact } from './components/Contact'
import { InputsDiv } from './components/InputsDiv'

function App() {
  // const [count, setCount] = useState(0)

  return (
 <div className='container'>
<Contact/>
<div className="flex justify-between gap-x-72 mt-20">
<InputsDiv/>
<AsideDiv/>
</div>

 </div>
  )
}
export default App
