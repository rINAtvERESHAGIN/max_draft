import React from "react";
import styled from "styled-components";
import MoodLayout from "./layout/MoodLayout";

const Container = styled.div`
    width: 100%;
    min-height: 100%;
`;
const MoodMonth = props => {
    return (
        <Container>
            <MoodLayout/>
        </Container>
    )
};

export default MoodMonth;
