import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './styles.css';
import { Link } from 'react-scroll';
import { BrowserRouter } from 'react-router-dom';



export function Footer() {
    return(
<footer className="bg-dbm-db-100">
  <div className='mx-auto flex flex-row items-center h-14 w-full'>
    <div className='flex flex-row items-center justify-center w-full'>
        <div className="flex items-center drop-shadow-2xl">
          <img src="/dbm-logo.png" alt="logo" className="h-10 w-10"/>
        </div>
        
        </div>
      </div>
</footer>

    )
}
