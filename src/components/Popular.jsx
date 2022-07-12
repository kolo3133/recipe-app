import { useEffect, useState } from "react"
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css'
import {Link} from 'react-router-dom';


const Popular = () => {

    const [popular, setPopular] = useState([]);

    // getting data when app loads
    useEffect(() => {
        getPopular()
    },[])

    //Fetching popular recipes from api
    const getPopular = async () => {
        //checking if popular list of recipes are in local storage
        const check = localStorage.getItem('popular')

        if(check){
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json()

            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes)
        }

        
    }
  return (
    <div>
        <Wrapper>
            <h3>Popular Picks</h3>

            <Splide options={{
                direction: 'ltr',
                wheel       : true,
                releaseWheel: true,
            }}>
            {popular.map((recipe) => {
            return (
                <SplideSlide key={recipe.id}>
                <Card to={'/recipe/' + recipe.id}>
                    
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                    
                </Card>
                </SplideSlide>
            );                
        })}
            </Splide>
        </Wrapper>
        
    </div>
    
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;
const Card = styled(Link)`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    p {
       position: absolute;
       z-index: 10;
       color: white;
       bottom: 20%
       
    }

`

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Popular