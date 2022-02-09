import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './Featured.scss'

export default function Featured({ type }) {
    return (
        <div className='featured'>

            {type && (
                <div className='category'>
                    <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
                    <select name='genre' id='genre'>
                        <option>Genre</option>
                        <option value='adventure'>Adventure</option>
                        <option value='comedy'>Comedy</option>
                        <option value='crime'>Crime</option>
                        <option value='fantasy'>Fantasy</option>
                        <option value='horror'>Horror</option>
                        <option value='romance'>Romance</option>
                        <option value='sci-fi'>Sci-fi</option>
                        <option value='thriler'>Thriler</option>
                        <option value='drama'>Drama</option>
                        <option value='documentary'>Documentary</option>

                    </select>
                </div>
            )}

            <img
                src='https://image.tmdb.org/t/p/w780//9mmkq59uRuJWDFz9UHeX5ATNJYf.jpg'
            />

            <div className='info'>
                <img
                    src='https://www.joblo.com/wp-content/uploads/2014/10/interstellar-quad-nolan-1.jpg'
                />
                <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci suscipit laborum eaque. Tempore ad eos labore voluptatem voluptas nobis totam vel quia, cum placeat molestiae repellat, officia magni eius. Modi. </span>
                <div className='buttons'>
                    <button className='play'>
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
