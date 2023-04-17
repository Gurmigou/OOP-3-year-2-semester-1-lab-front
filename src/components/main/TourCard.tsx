import React, {useEffect} from 'react';
import {Tour} from "../../model/Tour";
import "../../assets/style/common.css";

const TourCard = ({tour, onAddToCart}: {tour: Tour, onAddToCart: any}) => {
    useEffect(() => {
        console.log(tour)
    }, [])

    return (
        <div
            style={{background: '#f1f1f1', border: '1px solid gray', borderRadius: '8px', padding: '1rem', margin: '1rem', maxWidth: '600px'}}>
            <img src={tour.image} alt={tour.title}
                 style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px'}}/>
            <h3>{tour.title}</h3>
            <p>Type: {tour.type}</p>
            <p>Company: {tour.company}</p>
            {tour.discount && <p>Discount: {tour.discount}%</p>}
            {tour.isHot && <p style={{color: 'red'}}>Hot!</p>}
            <button onClick={onAddToCart}>Add to Cart</button>
        </div>
    );
};

export default TourCard;
