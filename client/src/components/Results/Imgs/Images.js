import React from 'react';
import './images.scss';

const Img = props => (
  <li className="img-wrap">
    <img src={props.url} alt="" />
    <div className="img-wrap__footer">
      <img src={props.userPhoto} alt="" className="img-profile" />
      <a href={props.user} target="_blank">Photo by {props.name}</a>
    </div>
  </li>
);

export default Img;
