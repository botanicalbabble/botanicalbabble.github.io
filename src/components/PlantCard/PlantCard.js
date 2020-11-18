import React from 'react';
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'




const PlantCard = ({ plant }) => {
    return (
        <div>
        <NavLink to={'/plant/' + plant._id}>
            <Card className='text-center card-temp'>
                <Card.Title> {plant.common_name} </Card.Title>
                <Card.Img 
                    className='card-image'
                    src={plant.image_url}
                />
                <Card.Text>
                        Family: {plant.family} <br />
                        Family Common name {plant.family_common_name} <br />
                        
                         Genus {plant.genus} <br /> 
                         Scientific Name: {plant.scientific_name} 
                </Card.Text>    
            </Card>
        </NavLink>
        </div>
    );
};

export default PlantCard;