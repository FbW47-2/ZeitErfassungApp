import React from 'react'

function Time({clickedPerson,employees,setClickedPerson,showPayment, handleMoney,geld, setGeld}) {


  // employees.map((man,i) => {
  //   if(man.name===clickedPerson.name){
  //     setClickedPerson(man)
  //   }
  // })




  return (
    <div>
      Name= {clickedPerson.name}
     <br />
      Surname= {clickedPerson.surname}
      <br />
      Start Time= {clickedPerson.baslaSaat<10 ? `0${clickedPerson.baslaSaat}`:clickedPerson.baslaSaat  } : {clickedPerson.baslaDakika<10 ? `0${clickedPerson.baslaDakika}`:clickedPerson.baslaDakika  }
     <br/>
     Finish Time= {clickedPerson.bitisSaat<10 ? `0${clickedPerson.bitisSaat}`:clickedPerson.bitisSaat  } : {clickedPerson.bitisDakika<10 ? `0${clickedPerson.bitisDakika}`:clickedPerson.bitisDakika  }
     <br/>
     <br/>
     <button className={showPayment} onClick={handleMoney} >Payment</button>
    <p className={showPayment} > {geld} </p>



    </div>
  )
}

export default Time