import './level2.css'
import '../level1/level1.css'
import cat from '../../assets/animals/cat.png'
import zebra from '../../assets/animals/zebra.png'
import mouse from '../../assets/animals/mouse.png'
import { useDrag } from 'react-dnd'
import { useEffect, useState } from 'react'
import { Dot } from '../../components/dot/Dot'
import { useDrop } from 'react-dnd'


export const Level2 = () => {

    const [dotArray, setDotArray] = useState([{id: 1, num: 2},{id: 2, num: 3,},{id: 3, num: 4}, {id: 5, num: 5}]);
    const [firstArray, setFirstArray] = useState([]);
    const [secondArray, setSecondArray] = useState([]);
    const [thirdArray, setThirdArray] = useState([]);


    useEffect(() => {

    }, [firstArray, dotArray])

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


    
    const spliceFromDotArray = (id) => {
        for (let i = 0; i < dotArray.length; i++) {
            if(dotArray[i].id === id) {
                dotArray.splice(i, 1);
            }
            
        }
    }

    const dropInFirstArray = (id, num) => {
        setFirstArray(firstArray => {
            spliceFromDotArray(id);
            return [...firstArray, {id: id, num: num}]
        })
    }

    const dropInSecondArray = (id, num) => {
        setSecondArray(secondArray => {
            spliceFromDotArray(id);
            return [...secondArray, {id: id, num: num}]
        })
    }
 
    const dropInThirdArray = (id, num) => {
        setThirdArray(thirdArray => {
            spliceFromDotArray(id);
            return [...thirdArray, {id: id, num: num}]
        })
    }


 

  return (
    <div className='level2-container'>
        <div className='outer-box'>
            <div className='inner-box'>
                <div className='instructions'>Hur många är det? Dra svaren rätt.</div>
                <div className='image-box-2'>
                    <div className='left-box'>
                        <img src={cat} className='small-img' />
                        <img src={cat} className='small-img' />
                        <img src={cat} className='small-img' />
                        <div className='round-dot-1' ref={drop}>{firstArray.map((dot) => {
                            return <div className='dot' key={dot.id}>{dot.num}</div>
                        })}</div>
                    </div>
                    <div className='middle-box'>
                        <img src={zebra} className='small-img' />
                        <img src={zebra} className='small-img' />
                        <div className='round-dot-2' ref={dropSecond}>
                            {secondArray.map(dot => {
                                return <div className='dot' key={dot.id}>{dot.num}</div>
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
                            return <div key={dot.id} className='dot'>{dot.num}</div>
                        })}</div>
                    </div>
                </div>
            </div>
            <div className='dot-area'>
                {dotArray.map(dot => {
                    return <span key={dot.id}><Dot num={dot.num} id={dot.id}/></span>
                })}      
            </div>
        </div>
    </div>
  )
}
