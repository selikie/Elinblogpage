import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES =['btn--primary', 'btn--outline']
const SIZES =[ 'btn--medium', 'btn--large']

export const Button = ({
    Children,
     type, 
     onclick,
      buttonStyle,
       buttonSize
    })=>{
        const  checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize)? buttonSize : SIZES[0];

        return (
            <Link to='/sing-up' className='btn-mobile'>
                <Button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onclick ={onclick}
                type={type}>
                    {Children}
                </Button>
                
            </Link>
        )

    };