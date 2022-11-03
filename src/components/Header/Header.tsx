import s from './Header.module.css'


const Header = () => {
    return <>
        <div className={s.header}>
            <img alt='logo'
                 src='https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn'/>
        </div>
        <div className={s.text_title}>
                <link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet"></link>

                <svg viewBox="0 0 100 100">
                    <text x="100%" y="80%" dy=".10%" text-anchor="middle">
                        Web story network
                    </text>
                </svg>

        </div>
    </>
}

export default Header;