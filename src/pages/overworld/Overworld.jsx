import './overworld.css'
import greentree from '../../assets/plants/greentree.png'
import stubbe from '../../assets/plants/stubbe.png'
import pinktree1 from '../../assets/plants/pinktree1.png'
import pinktree2 from '../../assets/plants/pinktree2.png'
import { useNavigate } from 'react-router-dom'

const Overworld = () => {
    const navigate = useNavigate();

    const jumpToWorld = (num) => {
            if(num === 1) {
                    navigate("/level1")
            }
            else if (num === 2) {
                   navigate("/level2")
            }
    }


  return (
    <div className='overworld'>
        <img src={greentree} className='tree-1'/>
        <img src={stubbe} className='stubbe' />
        <img src={pinktree1} className='pinktree1'/>
        <img src={pinktree2} className='pinktree2' />

        <div className='road'>
            <div className='level-1-dot' onClick={() => jumpToWorld(1)}>1</div>
            <div className='level-2-dot' onClick={() => jumpToWorld(2)}>2</div>
            <div className='pink-road-1'></div>
         
        </div>

    </div>
  )
}

export default Overworld