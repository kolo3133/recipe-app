import { useEffect, useState } from "react"
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import breakpoint from "../components/breakpoints";


const Recipe = () => {

    const params = useParams();

    const [recipeDetails, setRecipeDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    useEffect(() => {
      fetchRecipeDetails(params.idName)
    },[params.idName])

    const fetchRecipeDetails = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.idName}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      const detailsData = await data.json()
      setRecipeDetails(detailsData);
    }

  return (
    <DetailWrapper>
      <div>
        <h2>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.title} />
      </div>
      <Info>
        <div className="info-btns">
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        </div>
        {activeTab === 'instructions' && (
          <div>
          <h3 dangerouslySetInnerHTML={{__html: recipeDetails.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: recipeDetails.instructions}}></h3>
        </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
          {recipeDetails.extendedIngredients.map((item) => 
            <li key={item.id}>{item.original}</li>
          )}  
          </ul>
        )}
        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .active {
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
  }
  h2 {
    margin-bottom: 2rem;
    margin-left: 4rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    border-radius: 1rem;
    width: 80%;
    height: 80%;
    margin-left: 3rem;
    margin-bottom: 3rem;
  }

  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
    align-items: start;
    justify-content: start;

    img {
      
    }
  }

`

const Button = styled.button`
  display: flex;
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  width: 100%;
  height: 2rem;
  align-items: center;
`

const Info = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  width: 50%;
  @media only screen and ${breakpoint.device.sm} {
    width: 100%;
    margin-left: 1rem;
  }
`

export default Recipe
