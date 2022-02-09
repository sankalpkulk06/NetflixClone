import { ArrowBackOutlined } from '@material-ui/icons'
import './Watch.scss'
import trailer from './peaky-blinders.mp4'

export default function Watch() {
    return (
        <div className='watch'>
            <div className='back'>
                <ArrowBackOutlined />
                home
            </div>
            <video className='video' autoPlay progress controls
                src={trailer}
            />
        </div>
    )
}
