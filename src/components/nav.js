import { Link } from "gatsby"
import { default as React, useState } from "react"

function MenuIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#6287AC"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-menu"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 12L21 12"></path>
      <path d="M3 6L21 6"></path>
      <path d="M3 18L21 18"></path>
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#6287AC"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-x"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M18 6L6 18"></path>
      <path d="M6 6L18 18"></path>
    </svg>
  )
}

const Nav = props => {
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false)
  const [shopMenuIsVisible, setShopMenuIsVisible] = useState(false)

  return (
    <div className="Nav">
      <MenuIcon
        className="menu"
        onClick={() => {
          setMobileMenuIsVisible(true)
        }}
      />
      <Link to="/portfolio">
        <img className="logo" src="/logo.png" />
      </Link>
      <ul className={mobileMenuIsVisible ? "isVisible" : ``}>
        <XIcon
          className="x"
          onClick={() => {
            setMobileMenuIsVisible(false)
            setShopMenuIsVisible(false)
          }}
        />
        <div className="top">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/press">
            <li>Press</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/portfolio">
            <li>Portfolio</li>
          </Link>
        </div>
        <div className="side">
          <a
            onMouseEnter={() => {
              setShopMenuIsVisible(true)
            }}
            onClick={() => {
              setShopMenuIsVisible(!shopMenuIsVisible)
            }}
          >
            <li>Shop</li>
          </a>
          <div
            className={`shop-detail ${shopMenuIsVisible ? "isVisible" : ``}`}
            onMouseLeave={() => {
              setShopMenuIsVisible(false)
            }}
          >
            <a href="https://www.thestonecoldfox.com" target="_blank">
              <li>Stone Cold Fox</li>
            </a>
            <a
              href="https://cyds-closet-clean-out.myshopify.com"
              target="_blank"
            >
              <li>Cyd's Closet</li>
            </a>
            <Link to="/shop">
              <li>The Foxalow</li>
            </Link>
          </div>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </div>
      </ul>
    </div>
  )
}

export default Nav
