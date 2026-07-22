import { NavLink } from "react-router-dom";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function ResponsiveMenu({ toggle, setToggle, handleToggleMenu }) {
    return (
        <div className={`w-[80%] absolute rounded-xl h-[80vh] bg-white/99 shadow-xl ${toggle ? `left-0 transition-all duration-300` : `-left-full`}`}>
            <nav>
                <ul className='flex p-5 flex-col text-lg font-semibold gap-6 itmes-center justify-center'>
                    <NavLink to='/'
                        onClick={handleToggleMenu}
                        className={'border-b-2 border-blue-600'}><li>Home</li></NavLink>

                    <NavLink to='/jobs'
                        onClick={handleToggleMenu}
                        className={'border-b-2 border-blue-600'}><li>Jobs</li></NavLink>

                    <NavLink to='/companies'
                        onClick={handleToggleMenu}
                        className={'border-b-2 border-blue-600'}><li>Companies</li></NavLink>

                    <NavLink to='/about'
                        onClick={handleToggleMenu}
                        className={'border-b-2 border-blue-600'}><li>About Us</li></NavLink>

                    <NavLink to='/contact'
                        onClick={handleToggleMenu}
                        className={'border-b-2 border-blue-600'}><li>Contact Us</li></NavLink>
                </ul>
            </nav>


            <div className=''>
                <Show when="signed-out" className='gap-x-5'>
                    <SignInButton className='py-2 px-5 bg-[#2563EB] mt-5 rounded-lg text-white' />
                    <SignUpButton className='py-2 px-5 bg-[#2563EB] mt-5 rounded-lg text-white' />
                </Show>
                <Show when="signed-in">
                    <UserButton />
                </Show>
            </div>
        </div>
    )
}

export default ResponsiveMenu;