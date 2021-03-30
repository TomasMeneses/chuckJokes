import React, { useEffect, useState } from 'react';


import LoadGif from '../../img/giphy.gif';
import { HomeContainer } from './style';
import api from '../../service/api';

import Header from '../../components/Header';
import { IProps, IJoke } from '../../types/interfaces'
import { FaSearch } from 'react-icons/fa';


const Home: React.FC<IProps> = ({handleSetTheme}) => {
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
        setCategorySelected(undefined)
        if(response.status === 200 ){
            setIsLoad(false)
        } 
    }

    async function handleJokeByCategory(event: any){
        setIsLoad(true)
        const response = await api.get(`jokes/random?category=${event.target.value}`)
        setCategorySelected(response.data)
        setResultSearch([])
        if( response.status === 200 ){ 
            setIsLoad(false)
        } 



    }


    return (
        <HomeContainer>
            
            <Header handleSetTheme={handleSetTheme}/>

            
            
            <div className="search-joke-container">
                <h2>Are you looking for a joke? 😂🤣🤣</h2>

                <div className="input-group">
                    <select name="" id="" onChange={handleJokeByCategory}>
                        {
                          categoriesJoke.map( (joke, index) => (
                            <option key={index} value={joke} >{joke}</option>
                        ))  
                        }
                    </select>
                    
                    <input type="text" onChange={ e => setSearchJoke(e.target.value)} />
                    <button type="submit" onClick={handleJokes}> Search <FaSearch/> </button>
                </div>

                <div className="joke-container">
                    <div className="joker">
                        { isLoad ? <img src={LoadGif} alt="load"/> : resultSearch.map( result => (
                            <div className="joke-list-container" key={result.id}>
                                <ul>
                                    <li>{result.value}</li>
                                </ul>
                            </div>
                        )) }

                        {!isLoad && <div className="joke-list-container">
                                
                                <li>{categorySelected?.value}</li>
                            </div> 
                            }

                    </div>
                    
                </div>
            </div>
            

            
            

        </HomeContainer>
    );
}

export default Home;