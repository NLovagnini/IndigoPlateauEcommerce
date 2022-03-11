import React from 'react'


const CountInput = ({initial, setInitial, stock}) => {

    const checkValue = (e) =>{
      setInitial(parseInt(e.target.value))
      if (initial > stock) {
        setInitial(stock)
      } else if (initial < 1){
        setInitial(1)
      }
    }
  
    return (
      <div>         
          <input type="number" className="countInput" value={initial}
          onInput={(e) => checkValue(e) }
          onBlur={(e) => checkValue(e)}>
          </input>
      </div> 
        
    )
}

export default CountInput
