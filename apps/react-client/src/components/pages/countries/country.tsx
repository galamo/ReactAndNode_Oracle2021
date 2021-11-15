
export interface ICountry {
    name: { official: string, common: string },
    flags: { png: string },
    region: string,
    status: string,
    unMember: boolean

}

export function Country(props: ICountry) {
    
    return (<div className="card m-3" style={{ width: "200px" }}>
        <img className="card-img-top" src={props?.flags?.png} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.name.common}</h5>
            <h5 className="card-title">{props.region}</h5>
            <p className="card-text">{props.name.official}</p>
            {props.unMember ? <a href="#" className="btn btn-primary">Click here</a> : <span> No unMember </span>}
        </div>
    </div>)

}