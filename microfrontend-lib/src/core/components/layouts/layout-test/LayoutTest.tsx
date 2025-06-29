import React from 'react';
//import ThemeToggle from '../theme-toggle/ThemeToggle';
//import './Layout.scss';


type CommonProps = {
    children: React.ReactNode;
}

const Layout: React.FC<CommonProps> = ({ children }) => {

    return(<div>
            <nav>
                <div className='flex justify-end'>
                   {/*  <ThemeToggle/> */}
                </div>
            </nav>
            <main>
                {children}
            </main>
        </div>)
}

export default Layout;