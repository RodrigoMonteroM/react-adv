import React from 'react'
import Sidebar from './Sidebar'

interface Props{
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className='min-h-screen w-full flex flex-row gap-3'>
        <div className='w-3/12'>
            <Sidebar />
        </div>
        <div className='w-9/12'>
            {children}
        </div>
    </div>
  )
}

export default Layout