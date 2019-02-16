import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/resume">
      <a>Resume</a>
    </Link>
    <Link href="/portfolio">
      <a>Portfolio</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)

export default Header
