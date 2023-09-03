import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>

<div className="logo">
<img src="logo.svg" alt="" />
<span>fancyadmin</span>
</div>
<div className="icons">
<img src="/search.svg" alt="" className="icon" />
<img src="/app.svg" alt="" className="icon" />
<img src="/expand.svg" alt="" className="icon" />
<div className="notification">
  <img src="/notifications.svg" alt="" />
  <span>1</span>
</div>
<div className="user">
  <img src="data:image/png;base64,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" alt="" />
  <span>User</span>
</div>
<img src="settings.svg" alt="" className="icon" />
</div>
    </div>
  )
}

export default Navbar
