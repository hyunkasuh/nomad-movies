import React from "react";
import { ActivityIndicator } from "react-native";
import { TINT_COLOR, BG_COLOR } from "../constants/Colors";
import styled from "styled-components";

const Container = styled.View`
    flex:1;
    background-color: ${BG_COLOR};
    justify-content: center;
`;

export default () => (
    <Container>
        <ActivityIndicator color={TINT_COLOR} />
    </Container>
);

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "black",
//         flex: 1,
//         justifyContent: "space-around"
//     }
// });
