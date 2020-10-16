import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100px;
    height:100px;
    border:1px solid lightblue;
    
`;

const MoodInfo = props => {

    return(
        <Container>
            {props.dayNumber}
        </Container>
    )
}
export default MoodInfo;
