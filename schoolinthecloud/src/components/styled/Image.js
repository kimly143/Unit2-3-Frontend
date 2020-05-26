import React from 'react';
import Styled from 'styled-components';

const Image = (props) => {
	const Image = Styled.div`
        background-image: url(${props.url});
        height: 40px;
        width: 50px;
        background-repeat: no-repeat;
        background-size: contain;
        background-fit: center center;
        margin-right: 10px;
        margin-top: 5px;
        height: ${props.height};
        width: ${props.width};
        margin: ${props.margin};
        `;

	return <Image />;
};
export default Image;
