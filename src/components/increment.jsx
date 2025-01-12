export default function Increase({count,increce,decrece}){
return(
    <>
    <div>
        <h1>Incremento/Decremento</h1>
        <div className="card">
        <button onClick={()=>increce()} >
          Press to increment
        </button>
        <button onClick={()=>decrece()} >
          Press to decrement
        </button>
        <h1>Contador {count}</h1>

      </div>
    </div>
    </>

)
}