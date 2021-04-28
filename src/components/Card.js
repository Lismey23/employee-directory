import React from 'react';

function Card (props) {
    return (
        <div className='row'>
            <div className='col-sm-7 px-3'>
                <div className='card-block px-6'>
                    {props.children}
                </div>
           </div>
        </div>
    );
}
      
    


export default Card;