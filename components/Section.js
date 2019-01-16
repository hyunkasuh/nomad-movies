import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const Container = styled.View`
    margin-vertical: 20px;
`;

const Title = styled.Text`
    color: white;
    font-weight: 600;
    padding-left: 20px;
    margin-bottom: 15px;
    font-size: 14px;
`;

const ScrollView = styled.ScrollView`
    padding-left: 20px;
`;

const Section = ({ title, children, horizontal = true }) => (
    <Container>
        <Title>{title}</Title>
        <ScrollView horizontal={horizontal}>
            {children}
        </ScrollView>
    </Container>
);

Section.propTypes = {
    // movies: PropTypes.array.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    horizontal: PropTypes.bool,
    title: PropTypes.string.isRequired
};

export default Section;