import { IoArrowBackSharp,IoAddOutline } from "react-icons/io5";
import { Link, useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './Style.css'


const Nav = () => {

    const [searchParams] = useSearchParams();
    const iconSize = '35px'
    const iconColor = '#161d70'
    
        return (<>
        <div className='nav-controllers m-1'>

        
        {
            (searchParams.get('operation') === 'create' || searchParams.get('operation') === 'update') && 
            <Link to={`/`}>
                <IoArrowBackSharp size={iconSize} color={iconColor} />
            </Link>
        }

        { !searchParams.get('operation') && <Link to={`/products/upsert/${uuidv4()}?operation=create`}>
            <IoAddOutline size={iconSize} color={iconColor} />
        </Link>}
            

        </div>
    </>)
}

export default Nav