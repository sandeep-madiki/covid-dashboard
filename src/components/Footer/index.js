import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

import './index.css'

export default function Footer() {
  return (
    <footer className="footer-con">
      <h1 className="website-logo">
        COVID19<span className="logo-span">INDIA</span>
      </h1>
      <p className="footer-des">
        we stand with everyone fighting on the front lines
      </p>
      <ul className="footer-icons-con">
        <li>
          <VscGithubAlt size={40} />
        </li>
        <li>
          <FiInstagram size={40} />
        </li>
        <li>
          <FaTwitter size={40} />
        </li>
      </ul>
    </footer>
  )
}
