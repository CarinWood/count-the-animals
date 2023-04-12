import './level2.css'
import '../level1/level1.css'
import cat from '../../assets/animals/cat.png'
import zebra from '../../assets/animals/zebra.png'
import mouse from '../../assets/animals/mouse.png'
import { useEffect, useState } from 'react'
import { Dot } from '../../components/dot/Dot'
import { useDrop } from 'react-dnd'
import pop from '../../assets/audio/pop.wav'


export const Level2 = () => {

    const [dotArray, setDotArray] = useState([{id: 1, num: 1},{id: 2, num: 2,},{id: 3, num: 3}, {id: 5, num: 5}]);
    const [firstArray, setFirstArray] = useState([]);
    const [secondArray, setSecondArray] = useState([]);
    const [thirdArray, setThirdArray] = useState([]);

    const popsound = new Audio(pop);

    

    useEffect(() => {


    }, [firstArray, dotArray, secondArray, thirdArray])

    const checkIfWon = () => {
        
        alert('hello')
    }

    const [{isOver}, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => dropInFirstArray(item.id, item.num),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
     
    })) 

    const [{isOverSecond}, dropSecond] = useDrop(() => ({
        accept: "div",
        drop: (item) => dropInSecondArray(item.id, item.num),
        collect: (monitor) => ({
            isOverSecond: !!monitor.isOver(),
        })
     
    })) 

    const [{isOverThird}, dropThird] = useDrop(() => ({
        accept: "div",
        drop: (item) => dropInThirdArray(item.id, item.num),
        collect: (monitor) => ({
            isOverThird: !!monitor.isOver(),
        })
     
    })) 




    const dropInFirstArray = (id, num) => {
        popsound.play();
        setFirstArray(firstArray => {
                return [{id: id, num: num}]
            })
      
    }

    const dropInSecondArray = (id, num) => {
        popsound.play();
        setSecondArray(secondArray => {
                return [{id: id, num: num}]
        })
    }

    const dropInThirdArray = (id, num) => {
        popsound.play();
        setThirdArray(thirdArray => {
                return [{id: id, num: num}]
        })
    }


 

  return (
    <div className='level2-container'>
        <div className='outer-box-level2'>
            <div className='inner-box'>
                <div className='instructions'>Hur många är det? Dra svaren rätt.</div>
                <div className='image-box-2'>
                    <div className='left-box'>
                        <img src={cat} className='small-img' />
                        <img src={cat} className='small-img' />
                        <img src={cat} className='small-img' />
                        <div className='round-dot-1' ref={drop}>{firstArray.map((dot) => {
                            return <span key={dot.id}><Dot num={dot.num} id={dot.id}/></span>
                        })}</div>
                    </div>
                    <div className='middle-box'>
                        <img src={zebra} className='small-img' />
                        <img src={zebra} className='small-img' />
                        <div className='round-dot-2' ref={dropSecond}>
                            {secondArray.map(dot => {
                                return <span key={dot.id}><Dot num={dot.num} id={dot.id}/></span>
                            })}
                        </div>
                    </div>
                    <div className='right-box'>
                        <img src={mouse} className='small-img' />
                        <img src={mouse} className='small-img' />
                        <img src={mouse} className='small-img' />
                        <img src={mouse} className='small-img' />
                        <img src={mouse} className='small-img' />
                        <div className='round-dot-3' ref={dropThird}>{thirdArray.map(dot => {
                            return <span key={dot.id}><Dot num={dot.num} id={dot.id}/></span>
                        })}</div>
                    </div>
                </div>
            </div>
            <div className='dot-area'>
                {dotArray.map(dot => {
                    return <span key={dot.id}><Dot num={dot.num} id={dot.id}/></span>
                })}      
            </div>
            <button className='ok-btn' onClick={() => checkIfWon()}>OK</button>
        </div>
    </div>
  )
}
