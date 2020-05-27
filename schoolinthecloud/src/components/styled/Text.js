import React from 'react';
import Styled from 'styled-components';

const Text = (props) => {
	const Text = Styled.div`
                height:${props.height};
                width: ${props.width};
                font-size: ${props.fontSize};
                letter-spacing: ${props.letterSpacing};
                line-height: ${props.lineHeight};
                color: ${props.color};
                margin: ${props.margin};
                font-family: ${props.fontFamily};
                font-weight: ${props.fontWeight};
                text-align:${props.textAlign};
        }`;

	return <Text>{props.text}</Text>;
};
export default Text;
