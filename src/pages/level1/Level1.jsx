import { Button } from '../../components/button/Button'
import './level1.css'
import cow from '../../assets/animals/cow.png'
import { useEffect, useState } from 'react'
import { AiOutlineStar,  AiFillStar} from "react-icons/ai";
import { GiTwirlyFlower } from "react-icons/gi";
import win from '../../assets/audio/win.wav'
import wrong from '../../assets/audio/wrong.mp3'

export const Level1 = () => {
    const [rightAnswers, setRighAnswers] = useState(0);
    const [shakefirst, setShakefirst] = useState(false)
    const [shakeSecond, setShakeSecond] = useState(false)
    const [shakeThird, setShakeThird] = useState(false)

    const audio = new Audio(win);
    const wrongSound = new Audio(wrong);


    useEffect(() => {
        console.log(rightAnswers)

    }, [rightAnswers])


    const wrongButton = (num) => {
            wrongSound.play()
            if(num === 1) {
                setShakefirst(true);

                setTimeout(() => {
                setShakefirst(false)
                }, 700)
            }
            else if (num === 2) {
                setShakeSecond(true)

                setTimeout(() => {
                    setShakeSecond(false)
                    }, 700)
            }
            else if (num === 3) {
                setShakeThird(true)

                setTimeout(() => {
                    setShakeThird(false)
                }, 700)
            }
           
          
    }


    const checkAnswer = () => {
            audio.play()
            setRighAnswers(rightAnswers + 1)
           
    }

  return (
    <div className='level1-container'>
        <ul className='flower-box'>
            <li><GiTwirlyFlower className='flower'/></li>
            <li><GiTwirlyFlower className='flower'/></li>
            <li><GiTwirlyFlower className='flower'/></li>
            <li><GiTwirlyFlower className='flower'/></li>
            <li><GiTwirlyFlower className='flower'/></li>
            <li><GiTwirlyFlower className='flower'/></li>
        </ul>

           <div className='stars'>
              {rightAnswers >= 5 ? <AiFillStar className='filled-star'/> : <AiOutlineStar className='outline-star'/>}
              {rightAnswers >= 4 ? <AiFillStar className='filled-star'/> : <AiOutlineStar className='outline-star'/>}
              {rightAnswers >= 3 ? <AiFillStar className='filled-star'/> : <AiOutlineStar className='outline-star'/>}
              {rightAnswers >= 2 ? <AiFillStar className='filled-star'/> : <AiOutlineStar className='outline-star'/>}
              {rightAnswers >= 1 ? <AiFillStar className='filled-star'/> : <AiOutlineStar className='outline-star'/>}
            </div>

        <div className='outer-box'>
         
            <div className='inner-box'>
                <p className='instructions'>Hur många är det? Tryck på rätt svar.</p>
                <div className='image-box'>
                    <img src={cow} className='img' />
                    <img src={cow} className='img' />
                    <img src={cow} className='img' />
                    <img src={cow} className='img' />
                </div>
            </div>
            <div className='buttons'>
                <span onClick={() => wrongButton(1)} className={shakefirst ? 'shake': ''}>
                <Button digit={1} />
                </span>
                <span onClick={() => wrongButton(2)} className={shakeSecond ? 'shake': ''}>
                <Button digit={2} />
                </span>
                <span onClick={() => wrongButton(3)} className={shakeThird ? 'shake': ''}> 
                <Button digit={3} />
                </span>
                <span onClick={() => checkAnswer()}>
                <Button digit={4}/>
                </span>
         
            </div>
        </div>

    </div>
  )
}
