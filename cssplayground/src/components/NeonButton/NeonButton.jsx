import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: hsl(323 21% 16%);
  color: hsl(317 100% 54%);
`;

const NeonAhref = styled.a`
  & {
    font-size: 3rem;

    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: hsl(317 100% 54%);
    border: hsl(317 100% 54%) 0.125em solid;
    padding: 0.25em 1em;
    border-radius: 0.25em;
    text-shadow: 0 0 0.5em hsl(317 100% 54%);
    box-shadow: 0 0 0.5em 0 hsl(317 100% 54%),
      inset 0 0 0.5em 0 hsl(317 100% 54%);
    position: relative;

    transition: background-color 300ms linear;
  }
  &::before {
    pointer-events: none;
    content: '';
    position: absolute;
    background: hsl(317 100% 54%);
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.5;
    transition: opacity 300ms linear;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 2em 0.5em hsl(317 100% 54%);
    opacity: 0;
    transition: opacity 300ms linear;
  }
  &:focus,
  &:hover {
    background: hsl(317 100% 54%);
    color: hsl(323 21% 16%);
    text-shadow: none;
  }
  &:focus::before,
  &:hover::before {
    opacity: 1;
  }
  &:focus::after,
  &:hover::after {
    opacity: 1;
  }
`;

function NeonButton() {
  return (
    <ContainerDiv>
      <NeonAhref href="#">Neon</NeonAhref>
    </ContainerDiv>
  );
}

export default NeonButton;
