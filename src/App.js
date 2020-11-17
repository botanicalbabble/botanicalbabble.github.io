import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';

const App = () => {
	
	const [plants, setPlants] = useState([
    {
    "id": 678281,
    "common_name": "Evergreen oak",
    "slug": "quercus-rotundifolia",
    "scientific_name": "Quercus rotundifolia",
    "year": 1785,
    "bibliography": "Encycl. 1: 723 (1785)",
    "author": "Lam.",
    "status": "accepted",
    "rank": "species",
    "family_common_name": "Beech family",
    "genus_id": 5778,
    "image_url": "https://bs.floristic.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30",
    "genus": "Quercus",
    "family": "Fagaceae",
    "links": {
        "self": "/api/v1/species/quercus-rotundifolia",
        "plant": "/api/v1/plants/quercus-rotundifolia",
        "genus": "/api/v1/genus/quercus"
            }
    
    },
    {
    "id": 190500,
    "common_name": "Stinging nettle",
    "slug": "urtica-dioica",
    "scientific_name": "Urtica dioica",
    "year": 1753,
    "bibliography": "Sp. Pl.: 984 (1753)",
    "author": "L.",
    "status": "accepted",
    "rank": "species",
    "family_common_name": "Nettle family",
    "genus_id": 1028,
    "image_url": "https://bs.floristic.org/image/o/85256a1c2c098e254fefe05040626a4df49ce248",
    "genus": "Urtica",
    "family": "Urticaceae",
    "links": {
        "self": "/api/v1/species/urtica-dioica",
        "plant": "/api/v1/plants/urtica-dioica",
        "genus": "/api/v1/genus/urtica"
        }
    },
    {
    "id": 126957,
    "common_name": "Orchardgrass",
    "slug": "dactylis-glomerata",
    "scientific_name": "Dactylis glomerata",
    "year": 1753,
    "bibliography": "Sp. Pl.: 71 (1753)",
    "author": "L.",
    "status": "accepted",
    "rank": "species",
    "family_common_name": "Grass family",
    "genus_id": 2284,
    "image_url": "https://bs.floristic.org/image/o/05c2f3cf28a921235daece7b31806741c7251784",
    "genus": "Dactylis",
    "family": "Poaceae",
    "links": {
        "self": "/api/v1/species/dactylis-glomerata",
        "plant": "/api/v1/plants/dactylis-glomerata",
        "genus": "/api/v1/genus/dactylis"
    }
    },
    {
        "id": 101913,
        "common_name": "Common yarrow",
        "slug": "achillea-millefolium",
        "scientific_name": "Achillea millefolium",
        "year": 1753,
        "bibliography": "Sp. Pl.: 899 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 44,
        "image_url": "https://bs.floristic.org/image/o/d8bdcc8a8328551e6e6ce50129e8e7a871b6b3a5",
        "genus": "Achillea",
        "family": "Asteraceae",
        "links": {
            "self": "/api/v1/species/achillea-millefolium",
            "plant": "/api/v1/plants/achillea-millefolium",
            "genus": "/api/v1/genus/achillea"
        }
    },
    {
        "id": 167888,
        "common_name": "Narrowleaf plantain",
        "slug": "plantago-lanceolata",
        "scientific_name": "Plantago lanceolata",
        "year": 1753,
        "bibliography": "Sp. Pl.: 113 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Plantain family",
        "genus_id": 5418,
        "image_url": "https://bs.floristic.org/image/o/78a8374f009e6ed2dc71ca17d18e4271ea0a2a7b",
        "synonyms": [],
        "genus": "Plantago",
        "family": "Plantaginaceae",
        "links": {
            "self": "/api/v1/species/plantago-lanceolata",
            "plant": "/api/v1/plants/plantago-lanceolata",
            "genus": "/api/v1/genus/plantago"
        }
    }
])




	return (
		<div>
			<Home />
		</div>
	);
};

export default App;
