import './App.css'
import Programers from './component/Programers'
import Companies from './component/Companies';

function App() {

  return (
    <>
    <div className='card-group'>
      <div className='card'>
    <Companies  compName='ERT' emploNum={2000} founYear={1999} srvType='Data Analyst' prices={15000}></Companies>
    <Programers name={'Mohammed'} proLang={'JavaScript, Python, Java'} exYear={10} compName={'ERT'} ></Programers>     
    </div>
    <div className='card'>
    <Companies  compName='WER' emploNum={70} founYear={2019} srvType='Games prodution' prices={2000}></Companies>
    <Programers name={'Norah'} proLang={'C, Java'} exYear={3} compName={'WER'} ></Programers>     
    </div>    
    <div className='card'>
    <Companies  compName='QWE' emploNum={500} founYear={2007} srvType='App production' prices={2000}></Companies>
    <Programers name={'Sarah'} proLang={'Swift, C#'} exYear={8} compName={'QWE'} ></Programers> 

    </div>
    </div>
    
        
    </>
  )
}

export default App
