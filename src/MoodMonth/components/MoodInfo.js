import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";

const Container = styled.div`
    width:auto;
    height:auto;
    border:10px solid lightblue;
    border-radius: 15px;
    margin: 5px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    
`;

const MoodInfo = props => {

    return(
        <Container>
            <SimpleCard datNumber={props.dayNumber}/>
        </Container>
    )
}
export default MoodInfo;
