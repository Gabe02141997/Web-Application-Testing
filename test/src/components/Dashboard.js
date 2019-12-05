import React,{ useState } from 'react'
import Display from './Display'


const Dashboard = () => {

    const [balls, setBalls] = useState(0)
    const [strikes, setStrikes] = useState(0)
  

    const handleBalls = () => {
        if(balls === 3 ){
           setBalls(0)
           setStrikes(0)
        } else {
            setBalls(balls + 1)
        }
    }


    const hit = () => {
        setStrikes(0)
        setBalls(0)
    }

    const foul = () => {
        if(strikes === 0){
            setStrikes(1)
        } else if(strikes === 1){
            setStrikes(2)
          }
          if(strikes === 2 ){
              setStrikes(2)
          }
        }
     const handleStrikes = () => {
         if(strikes === 2 ){
             setStrikes(0)
             setBalls(0)
         } else {
             setStrikes(strikes + 1)
         }
     }

    return (
        <div>
            <Display balls ={balls} strikes ={strikes}/> 
            <button onClick={handleBalls}>Balls</button>
            <button onClick={handleStrikes}>Strikes</button>
            <button onClick={hit}>Hit</button>
            <button onClick ={foul}>Foul</button>

        </div>
    )

}

export default Dashboard