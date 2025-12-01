import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineDotsVertical, HiMenuAlt3 } from "react-icons/hi";
// import '../App.css'

export const Header = () => {
  const [categories, setCategories] = useState([])
  const [showCategories, setShowCategories] = useState(false)
  return (
    <nav>
      <div className='relative flex gap-4 justify-between items-center mb-2'>
        {/* instead of Anchor-Tag<a> we will use <Link></Link> */}
        <Link to='/' className='flex gap-2'>
          <img src='/logo.svg' className='w-8' alt='Logo' />
          <h1 className='text-5xl tracking-tight font-bold cursor-pointer'>
            GIPHY
          </h1>
        </Link>
        {/* gradient created a custom class in app.css */}
        {/* in mobile it will hidden and largeScreen block will display */}
        <div className='flex font-bold text-md gap-2 items-center'>
          <Link className='px-4 py-1 hover:gradient border-b-4 hidden lg:block'>
            Reactions
          </Link>
          <button onClick={() => { setShowCategories(!showCategories) }}>
            <HiOutlineDotsVertical className={`hover:gradient border-b-4 p-1 cursor-pointer ${showCategories ? "gradient" : ""}`} size={30} />
          </button>
          <div className='h-9 pt-1.5 px-6 hover:gradient bg-gray-700 rounded hidden lg:block'>
            <Link to='/favorites'>Favorites</Link>
          </div>
          <button>
            <HiMenuAlt3 className='text-sky-400 block lg:hidden' size={30} />
          </button>
        </div>
        {showCategories && (
          <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20'>
            <span>Categories</span>
            <hr />
            <div>
              <Link className='font-bold'>
                Reactions
              </Link>
            </div>
          </div>)}
      </div>
    </nav>
  )
}
