import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();
    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    if (!hero) {
        return <Redirect to="/" />
    }

    const handleBackButton = () => {
        if (history.length <= 2) history.push('/')
        else history.goBack();
    }

    const { superhero, publisher, alter_ego, first_appearence, characters } = hero;

    return (
        <div className="row mt-5">
            <div className="col-3">
                <img className="img-thumbnail" src={`../assets/heroes/${heroId}.jpg`} alt={superhero} />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearence: </b>{first_appearence}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleBackButton}>Return</button>
            </div>
        </div>
    )
}
