import Services from './Services'

interface Companies{
    compName: string;
    emploNum: number;
    founYear: number;
    srvType: string;
    prices: number;

}
export default function Companies(props: Companies) {
  return (<>
  
    <div>{props.compName}</div>
    <div>{props.emploNum} Emploee</div>
    <div>Fouding Year {props.founYear}</div>
    <Services srvType={props.srvType} prices={props.prices}></Services>
 </> )
}
