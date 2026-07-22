import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ResponsiveMenu from '../responsive-menu/ResponsiveMenu'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Menu, X } from 'lucide-react'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const handleToggleMenu = () => {
        setToggle(!toggle)
    }
    return (
        <header className='shadow-lg'>
            <div className='max-w-[1600px] flex mx-auto itmes-center justify-between h-[10vh] p-5'>
                <NavLink to='/'>
                    <div className='text-3xl font-bold  '>Dream<span className=' text-[#2563EB]'>Job</span></div>
                </NavLink>
                <nav className='lg:flex h-8 mt-2.5 list-none hidden text-lg font-semibold gap-6 itmes-center justify-center'>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-700 hover:text-blue-500"}><li>Home</li></NavLink>
                    <NavLink to='/jobs' className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-700 hover:text-blue-500"}><li>Jobs</li></NavLink>
                    <NavLink to='/companies' className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-700 hover:text-blue-500"}><li>Companies</li></NavLink>
                    <NavLink to='/about' className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-700 hover:text-blue-500"}><li>About Us</li></NavLink>
                    <NavLink to='/contact' className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-700 hover:text-blue-500"}><li>Contact Us</li></NavLink>
                </nav>
                <div className='flex lg:hidden'>
                    {toggle ? <X onClick={handleToggleMenu} /> : <Menu onClick={handleToggleMenu} />}
                </div>
                <div className='lg:flex hidden items-center -mt-7 gap-4'>
                    <Show when="signed-out" className=''>
                        <SignInButton className='py-2 px-5 bg-[#2563EB] mt-5 rounded-lg text-white' />
                        <SignUpButton className='py-2 px-5 bg-[#f7f9fd] mt-5 rounded-lg text-gray-800 border border-gray-500' />
                    </Show>
                    <Show when="signed-in">
                        <UserButton />
                    </Show>
                </div>
            </div>
            <ResponsiveMenu toggle={toggle} setToggle={setToggle} handleToggleMenu={handleToggleMenu} />
        </header>
    )
}

export default Navbar
