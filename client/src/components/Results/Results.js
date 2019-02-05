import React from 'react';
import Images from './Imgs/Images.js';
import NoImages from './Imgs/NoImages.js';
import './results.scss';

const Results = ({ data }) => {

    let imgs;
    if (data.length > 0) {
        imgs = data.map(img => 
        <Images 
            url={img.urls.small}
            user={img.user.links.html}
            name={img.user.name}
            link={img.links.html}
            key={img.id}
        />
        );
    } else {
        imgs = <NoImages />;
    }
	return (
		<ul className="img-list">
			{imgs}
		</ul>
	);
};

export default Results;