import {Link} from 'react-router-dom'

const Sidebar = () => {
    const navLinks = [
        {
            text: 'Home',
            to : '/',
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
        <div className="w-1/5 bg-gray-400 h-screen">
            {/* sidebar-header */}
            <div className="text-center">SiteName</div> 
            {/* Sidebar items and links */}
            <Navitems navLinks={navLinks}/>
        </div>
    )
}

const Navitems = ({navLinks}) =>{
    return (
        navLinks.map((navlink,index)=>{
            return (
                <div key={index}>
                    <Link to = {navlink.to}>{navlink.text}</Link>
                </div>
            )  
        })
    )
}

export default Sidebar
