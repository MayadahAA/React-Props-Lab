
interface Programers{
    name: string;
    proLang: string;
    exYear: number;
    compName: string;
}
function Programers(props: Programers) {
  return ( <> 
    <div>{props.name}</div>
    <div>{props.proLang}</div>
    <div>{props.exYear} Years of experiance</div>
    <div>{props.compName}</div>
 </> )
}

export default Programers