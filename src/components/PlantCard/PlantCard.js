import React from 'react';
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'
import './PlantCard.css'

const PlantCard = ({ plant }) => {
    // Removed the <div>. too redundant
    return (
        <NavLink to={'/plant/' + plant._id}>
            <Card className='text-center card-temp plant-card'>
                <Card.Title> <h3>{plant.common_name}</h3> </Card.Title>
                <Card.Img 
                    className='card-image'
                    src={plant.image_url}
                />
                <Card.Text>
                        Family: {plant.family} <br />
                        Family Common name: {plant.family_common_name} <br />
                        Genus: {plant.genus} <br /> 
                        Scientific Name: {plant.scientific_name}
                </Card.Text>    
            </Card>
        </NavLink>
    );
};

export default PlantCard;
