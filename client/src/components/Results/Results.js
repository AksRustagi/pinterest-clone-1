import React from 'react';
import Images from './Imgs/Images.js';
import './results.scss';

const Results = ({ data }) => {

    let imgs = data.map(img => 
        <Images 
        url={img.urls.small} 
        key={img.id}/>
    );

	return (
		<ul className="img-list">
			{imgs}
		</ul>
	);
};

export default Results;