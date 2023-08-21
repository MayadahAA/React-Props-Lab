
interface Serv{
    srvType: string;
    prices: number;
}
function Programers(props: Serv) {
  return ( <> 
    <div>{props.srvType}</div>
    <div>{props.prices} SAR</div>
 </> )
}

export default Programers