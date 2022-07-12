import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    let params = useParams()

    useEffect(() => {
        getCategoryRecipies(params.type)
    },[params.type])

    const getCategoryRecipies = async (categoryName) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${categoryName}&number=9`)
        const recipies = await data.json();
        setCategories(recipies.results);
        
    }

  return (
    <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration : 0.5}}
    >
        {categories.map((item) => {
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

const Grid = styled(motion.div)`
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

export default Categories