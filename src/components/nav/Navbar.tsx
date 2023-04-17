import React from 'react';

const Navbar = ({cartCount}: { cartCount: number }) => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 3rem',
            margin: '1rem 0',
            alignItems: 'center',
            background: '#219c58',
            borderRadius: '10px',
            color: 'white'
        }}>
            <h1 style={{cursor: 'pointer'}}>Travel</h1>
            <div style={{display: 'flex', gap: '3rem', fontWeight: 'bold'}}>
                <div style={{cursor: 'pointer'}}>Card [{cartCount}]</div>
                <div style={{cursor: 'pointer'}}>User</div>
            </div>
        </nav>
    );
};

export default Navbar;
