import React, { useState } from "react"
import axios from "axios"
import { Country, ICountry } from "./country"
const CountriesUrl = "http://localhost:5000/countries?q=1"
export function CountriesPage() {
    console.log("CountriesPage Start")
    const [header, setheader] = useState("Countries")
    const [countriesArray, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    function changeHeader() {
        setheader("Countries From API")
    }

    async function getCountries() {

        try {
            setLoading(true)
            const result = await axios.get(CountriesUrl)
            const { data } = result;
            setCountries(data.result)
            setLoading(false)
        } catch (ex) {
            alert("No data@!")
        }
    }
    if (loading) return <div className="loader"></div>

    return <div>
        <h1 className="jumbotron" > {header} </h1>
        <button className="btn btn-primary" onClick={getCountries}> Get Countries </button>
        <div className="container">
            <div className="row">
                {countriesArray?.map((currentCountry: ICountry) => {
                    const { region, name, flags, status, unMember } = currentCountry
                    const p = { region, name, flags, status, unMember }
                    return <Country key={currentCountry.name.official}
                        unMember={unMember}
                        name={name}
                        region={region}
                        flags={flags}
                        status={status} />
                })}
            </div>
        </div>
    </div>
}