import Link from 'next/link';
import React from 'react'

const Header = () => {
    return (
        <header>
            <nav>
                <div className='navbar justify-between bg-base-300'>
                    <Link href="" className='btn btn-ghost text-lg'>Next Genz</Link>

                    <ul>
                        <li>
                            <Link href="/cart" className='btn btn-ghost text-lg'>Cart</Link>
                            <Link href="/signin" className='btn btn-ghost text-lg'>SignIn</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
