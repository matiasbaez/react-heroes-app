import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard'

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)

    const [form, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = form;
    const filteredHeroes = useMemo(() => getHeroesByName(q), [q])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search</h1>
            <form className="form-inline" onSubmit={handleSubmit}>

                <div className="form-group">
                    <input
                        type="text"
                        name="searchText"
                        className="form-control"
                        placeholder="Search hero"
                        value={searchText}
                        autoComplete="off"
                        onChange={handleInputChange} />
                </div>

                <button className="btn btn-outline-primary">Search</button>
                
            </form>
            <hr />

            { q !== '' && filteredHeroes.length === 0 && (
                <div className="alert alert-info">There is not a hero with name {q}</div>
            )}

            { filteredHeroes.length > 0 && (
                <div className="row">
                    <div className="col-12">
                        <h4>Results</h4>
                        <hr />

                        <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
                            {
                                filteredHeroes.map(hero => (
                                    <HeroCard key={hero.id} hero={hero} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
