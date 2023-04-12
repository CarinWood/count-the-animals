import './dot.css'
import { useDrag } from 'react-dnd'

export const Dot = ({num, id}) => {

     
    const [{isDragging}, drag] = useDrag(() => ({
        type: "div",
        item: {num: num, id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))



  return (
    <div className={isDragging? 'dot hidden': 'dot'} ref={drag}>{num}</div>
  )
}
