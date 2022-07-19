import Nav from "../Ui/Nav"
import './Style.css'

const DashboardTemplate = ({children}:any) => {

    return <>
        <div className="page-container">
            <div className="nav-container">
                <Nav />
            </div>
            <div className="content-container p-1">
                {children}
            </div>


        </div>
    </>
}

export default DashboardTemplate