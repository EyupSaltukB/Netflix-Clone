import { Link } from "react-router-dom"
import {AiOutlineSearch, AiOutlineBell} from "react-icons/ai"
import {RiChatSmileFill} from "react-icons/ri"

const Header = () => {
  return (
    <>
    <header className="p-4 d-flex gap-5 justify-content-between">
        <Link to={'/'}>
        <img
          style={{ maxWidth: '150px' }}
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        />
        </Link>
        <nav className="nav d-flex gap-4 align-items-center">
        <a href="">Anasayfa</a>
        <a href="">Filmler</a>
        <a href="">Diziler</a>
        <a href="">Yeni ve Popüler</a>
        <a href="">Listem</a>
        <a href="">Diller</a>
        </nav>
        <div className="d-flex align-items-center fs-4 gap-3 align-items-end">
          <AiOutlineSearch/>
          <AiOutlineBell/>
          <RiChatSmileFill/>
        </div>
    </header>   
    </>
  )
}

export default Header
