import './Navbar.scss'
import { ArrowDropDown, Search, Notifications } from '@material-ui/icons'
import { useState } from 'react';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    // console.log(window.pageYOffset);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset == 0 ? false : true);
        return () => {
            window.onscroll = null;
        }
    }

    // console.log(isScrolled);

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className='container'>
                <div className='left'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png' alt='' />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className='right'>
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png' alt='./sankalppic.png' />

                    <div className='profile'>
                        <ArrowDropDown className='icon' />
                        <div className='options'>
                            <span>Setting</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
