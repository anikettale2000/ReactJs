import React from 'react'

function Header() {
  return (
    <>  
    <div className='p-2 justify-between'>
        <div className >
            <ul className='flex'>
                <li>
                    <h1>logo</h1>
                </li>
                <li>
                    <input type="text" className='bg-gray-600' />
                </li>
                <li>
                    <h1>login Profile</h1>
                </li>
                <li>
                    <h1>cart</h1>
                </li>
                <li>
                    <h1>seller login</h1>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header