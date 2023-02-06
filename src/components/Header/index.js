import './index.css'

export default function Header() {
  return (
    <div className="nav-con">
      <h1 className="website-logo">
        COVID19<span className="logo-span">INDIA</span>
      </h1>
      <ul className="nav-ul">
        <li className="nav-home">Home</li>
        <li className="nav-about">About</li>
      </ul>
    </div>
  )
}
