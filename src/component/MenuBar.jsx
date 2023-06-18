import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

const MenuBarInner = () => {
  return <div className='MenuBar'>

    <Link to={'players/'}>
      <div className='MenuItem'>
        <button>Players</button>
      </div>
    </Link>
    <Link to={'houses/'}>
      <div className='MenuItem'>
        <button>Houses</button>
      </div>
    </Link>
  </div>
}

MenuBarInner.propTypes = {

}

export const MenuBar = observer(MenuBarInner)
