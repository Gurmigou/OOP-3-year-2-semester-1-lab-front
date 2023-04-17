import React, {useState} from "react";
import Navbar from "../../components/nav/Navbar";
import TourList from "../../components/main/TourList";

const UserMain = () => {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div style={{maxWidth: '1160px', margin: '0 auto'}}>
            <Navbar cartCount={cartCount}/>
            <TourList onAddToCart={handleAddToCart}/>
        </div>
    );
}

export default UserMain