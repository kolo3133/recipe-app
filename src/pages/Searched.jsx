import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Searched = () => {

    const params = useParams();

   const [searchedRecipes, setSearchedRecipes] = useState([]);
   useEffect(() => {
    getSearched(params.search)
   },[params.search])

   const getSearched = async (searchName) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchName}&number=9`)
    const recipies = await data.json();
    setSearchedRecipes(recipies.results);
    
}
    

  return (
    <Grid>
        {searchedRecipes.length === 0 && (
            <Info>
            <h1>No results found</h1>
            <p>Please type your search request again...</p>
            </Info>
        )}

    {searchedRecipes.map((item) => {
            return(
                <Card to={'/recipe/'+ item.id} key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>    
                </Card>
            )
        })}
        
    </Grid>
  )

  
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled(Link)`

    text-decoration: none;
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    p {
        margin-top: 1.5rem;
    }
`



export default Searched