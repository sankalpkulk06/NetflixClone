import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react'
import Listitem from '../listitem/Listitem'
import './List.scss'

export default function List() {

    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);


    const listRef = useRef();

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction == 'left' && slideNumber > 0) {
            listRef.current.style.transform = `translateX(${250 + distance}px)`;
            setSlideNumber(slideNumber - 1)
            setIsMoved(true)
        }
        if (direction == 'right' && slideNumber < 5) {
            listRef.current.style.transform = `translateX(${-250 + distance}px)`;
            setSlideNumber(slideNumber + 1)
            setIsMoved(true)
        }
        console.log(distance)
    }

    return (
        <div className='list'>
            <span className='listTitle'>Continue to watch</span>
            <div className='wrapper'>
                <ArrowBackIosOutlined
                    className='sliderArrow left'
                    onClick={() => handleClick('left')}
                    style={{ display: !isMoved && "none" }}
                />
                <div className='container' ref={listRef}>
                    <Listitem index={0} />
                    <Listitem index={1} />
                    <Listitem index={2} />
                    <Listitem index={3} />
                    <Listitem index={4} />
                    <Listitem index={5} />
                    <Listitem index={6} />
                    <Listitem index={7} />
                    <Listitem index={8} />
                    <Listitem index={9} />
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick('right')} />
            </div>
        </div>
    )
}
