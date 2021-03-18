import './Burger.scss';
import './Menu.scss'


export default function Burger({ open, setOpen }) {

  const openMenu = () => {
    if (!open) {
      document.querySelector('.style-menu').classList.add('transform-open');
    } else if(open) {
      document.querySelector('.style-menu').classList.add('transform-close');
    }
  }
  return (
    <div className="styled-burger" open={open} onClick={() => setOpen(!open), openMenu}>
      <div />
      <div />
      <div />
    </div>
  )
}

