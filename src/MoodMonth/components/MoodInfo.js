import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";

const Container = styled.div`
    width:auto;
    height:auto;
    border:10px solid lightblue;
    border-radius: 15px;
    margin: 5px;
`;

const MoodInfo = props => {

    return(
        <Container>
            <SimpleCard datNumber={props.dayNumber}/>
        </Container>
    )
}
export default MoodInfo;
