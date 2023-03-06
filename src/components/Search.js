import { useState} from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import {CITIES_URL, citiesApi} from './Api' 


const Search = ({onSearchChange}) => {
    
    const [search, setSearch] = useState (null);

    const handleChange = (searchData) =>{
        setSearch(searchData);
        onSearchChange(searchData);
    }
    const loadOptions = (inputValue) => {
        return fetch(`${CITIES_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, citiesApi)
		.then(response => response.json())
		.then(response => {
            return {
                options:response.data.map((city)=>{
                    return{
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                }),
            };
        })
		.catch(err => console.error(err));
    };
    return (
        <AsyncPaginate
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
    )
}
export default Search;