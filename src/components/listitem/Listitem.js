import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import './Listitem.scss'
import trailer from './peaky-blinders.mp4'

export default function Listitem({ index }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='listItem'
            style={{ left: isHovered && index * 225 - 50 + index * 5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img
                src='https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe1BG2UPFboUCtdFm1bZkdN1k8eyAeEK5tVKLXXSSBeLLlUFiWWTUUZGxXHZZjaB6hs9xZU18mq7JNOr0cGao5oqKhARxA0sGdR07xQxgyItY4JFWB7ryw7DsqhDZQ.jpg?r=c25'
            />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className='itemInfo'>
                        <div className='icons'>
                            <PlayArrow className='icon' />
                            <Add className='icon' />
                            <ThumbUpAltOutlined className='icon' />
                            <ThumbDownAltOutlined className='icon' />
                        </div>
                        <div className='itemInfoTop'>
                            <span>1 hour 14 mins</span>
                            <span className='limit'>+16</span>
                            <span>2017</span>
                        </div>
                        <div className='desc'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, modi eveniet. Quod optio explicabo rerum quo.
                        </div>
                        <div className='genre'>
                            Action
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
