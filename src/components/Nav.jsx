
import searchlogo from '../assets/search.png'
import logo from '../assets/file-removebg-preview.png'
import '../index.css'

function Nav() {
    return (
        <div className='sticky top-0 h-14 w-full bg-blue-500 flex flex-row justify-around items-center '>

            <div className='w-[120px] h-[120px] mt-18 ml-20'> <img src={logo} alt="" /></div>

            <div className='nav-1 flex flex-row h-9 w-[564px] mr-20 bg-white items-center justify-between px-4 shadow rounded-sm'>

                <input type="text" className='bg-white w-80 h-9 focus:outline-0 font size-3.5 ' name='serch' placeholder='Serch for products, brands and more' />
                <img className='w-5 h-5 ' src={searchlogo} alt="serch" />
            </div>

            <div>
                <button className='nav text-blue-500 bg-white w-[122px] h-7 px-5 font-bold'>login</button>
            </div>

         
             <div className='nav text-white font-bold'> Become a seller</div>
            <div className='nav text-white font-bold'> More</div>
            <div className='nav text-white font-bold'> Cart</div>

        </div>
    )
}

export default Nav