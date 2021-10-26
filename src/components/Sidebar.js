import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    const navLinks = [
        {
            text: 'Home',
            to : '/home',
            icon : 'none'
        },
        {
            text: 'Cryptocurrencies',
            to : '/cryptocurrencies',
            icon : 'none'
        },
        {
            text: 'News',
            to : '/news',
            icon : 'none'
        },
        {
            text: 'Exchanges',
            to : '/exchanges',
            icon : 'none'
        }
    ]
    return (
        <div className="w-1/5 bg-gray-900 h-screen text-white">
            {/* sidebar-header */}
            <div className="text-center text-4xl my-4">Cryptomania</div> 
            {/* Sidebar items and links */}
            <Navitems navLinks={navLinks}/>
        </div>
    )
}

const Navitems = ({navLinks}) =>{
    return (
        navLinks.map((navlink,index)=>{
            return (
                    <NavLink className="w-full inline-block my-4 p-4" activeClassName="bg-gray-100 text-gray-900 " to = {navlink.to}>{navlink.text}</NavLink>
            )  
        })
    )
}

export default Sidebar
