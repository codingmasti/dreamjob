import { NavLink } from "react-router-dom";
import { Show, useUser, SignOutButton, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { LuLogOut } from "react-icons/lu";

function ResponsiveMenu({ toggle, setToggle, handleToggleMenu }) {

    const { user, isSignedIn } = useUser()
    return (
        <div className={`w-[250px] absolute rounded-xl h-[80vh] bg-white/99 shadow-xl ${toggle ? `left-0 transition-all duration-300` : `-left-full`}`}>
            {
                isSignedIn && (
                    <div className="m-5 bg-gray-100 border border-gray-200 h-10 rounded-xl flex items-center justify-start gap-3">
                        <div className="flex ml-2">
                            <Show when="signed-in">
                                <UserButton />
                            </Show>
                        </div>
                        {<h3 className="font-medium text-gray-500 line-clamp-1 ">Welcome, {user.firstName} 👋</h3>}
                    </div>
                )
            }



            <nav>
                <ul className='flex p-5 flex-col text-lg font-semibold gap-3 itmes-center justify-center'>
                    <NavLink to='/'
                        onClick={handleToggleMenu}
                    ><li className="hover:bg-gray-100 hover:border border-gray-200 transition-all duration-300 p-1 rounded-md">Home</li></NavLink>

                    <NavLink to='/jobs'
                        onClick={handleToggleMenu}
                    ><li className="hover:bg-gray-100 hover:border border-gray-200 transition-all duration-300 p-1 rounded-md">Jobs</li></NavLink>

                    <NavLink to='/companies'
                        onClick={handleToggleMenu}
                    ><li className="hover:bg-gray-100 hover:border border-gray-200 transition-all duration-300 p-1 rounded-md">Companies</li></NavLink>

                    <NavLink to='/about'
                        onClick={handleToggleMenu}
                    ><li className="hover:bg-gray-100 hover:border border-gray-200 transition-all duration-300 p-1 rounded-md">About Us</li></NavLink>

                    <NavLink to='/contact'
                        onClick={handleToggleMenu}
                    ><li className="hover:bg-gray-100 hover:border border-gray-200 transition-all duration-300 p-1 rounded-md">Contact Us</li></NavLink>
                </ul>
            </nav>


            <div className='flex flex-col p-5'>
                {
                    isSignedIn && (
                        <SignOutButton>
                            <button className="flex items-center gap-2 border border-gray-200 w-fit px-4 py-2 rounded-lg bg-gray-50">
                                <LuLogOut />Logout
                            </button>
                        </SignOutButton>
                    )
                }
                <Show when="signed-out" className='gap-x-5'>
                    <SignInButton className='py-2 w-fit px-5 bg-[#2563EB] mt-5 rounded-lg text-white' />
                    <SignUpButton className='py-2 w-fit px-5 bg-[#2563EB] mt-5 rounded-lg text-white' />
                </Show>
            </div>
        </div>
    )
}

export default ResponsiveMenu;