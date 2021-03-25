import React, { useEffect, useState } from 'react';


import LoadGif from '../../img/giphy.gif';
import { HomeContainer } from './style';
import api from '../../service/api';

interface IJoke{
    id: string;
    icon_url: string;
    value: string;
}

const Home: React.FC = () => {
    const [ categoriesJoke, setCategoriesJoke ] = useState([]);
    
    const [ categorySelected, setCategorySelected ] = useState<IJoke>()
    const [ searchJoke, setSearchJoke ] = useState('')
    const [ isLoad, setIsLoad ] = useState(false)
    const [ resultSearch, setResultSearch ] = useState<IJoke[]>([])




    useEffect( () => {
        api.get('jokes/categories').then(
            response => {

                setCategoriesJoke(response.data)
            }
        )
    }, [])

    async function handleJokes(){
        setIsLoad(true)
        const response = await api.get(`jokes/search?query=${searchJoke}`)
        setResultSearch(response.data.result)
        if(response.status === 200 ){
            setIsLoad(false)
        } 
    }

    async function handleJokeByCategory(event: any){
        setIsLoad(true)
        const response = await api.get(`jokes/random?category=${event.target.value}`)
        setCategorySelected(response.data)
        if( response.status === 200 ){ 
            setIsLoad(false)
        } 



    }


    return (
        <HomeContainer>
            <div>
                <img src={categorySelected?.icon_url} alt={categorySelected?.value}/>
                <h3>{categorySelected?.value}</h3>
            </div>
            
            <div className="search-joke-container">
                <h2>Find Joke</h2>

                <div className="input-group">
                    <select name="" id="" onChange={handleJokeByCategory}>
                        {
                          categoriesJoke.map( (joke, index) => (
                            <option key={index} value={joke} >{joke}</option>
                        ))  
                        }
                    </select>
                    <input type="text" onChange={ e => setSearchJoke(e.target.value)} />
                    <button type="submit" onClick={handleJokes}> FIND JOKE</button>
                </div>

                <p>Find results for:</p>
                <div className="joker">
                    { isLoad ? <img src={LoadGif} alt="load"/> : resultSearch.map( result => (
                        <div className="joke-container" key={result.id}>
                            <img src={result.icon_url} alt={result.value}/>
                            <h3>{result.value}</h3>
                        </div>
                    )) }

                </div>
            </div>
            

            
            

        </HomeContainer>
    );
}

export default Home;