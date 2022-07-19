import './Style.css';

const Card = ({children}:any) => {
    return <>
        <div className="card">
            {children}
        </div>
    </>
}


export const CardTitle = (title:string)=>{
    return <h1 className="card-title">{title}</h1>
}



export const CardBody = ({children}:any)=>{
    return <div className="card-body">{children}</div>
}



export const CardFooter = ({children}:any)=>{
    return <div className="card-footer">{children}</div>
}




export default Card