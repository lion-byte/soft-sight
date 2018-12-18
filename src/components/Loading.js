import React from 'react'
import styled from 'styled-components'

const SKCubeGrid = styled.div`
  /* Original code from https://github.com/tobiasahlin/SpinKit */
  width: 6em;
  height: 6em;
  margin: 2em auto;
  transform: rotate(135deg);

  .sk-cube {
    width: 33%;
    height: 33%;
    background-color: plum;
    float: left;
    animation: sk-cubeGridScaleDelay 0.85s infinite ease-in-out;

    &.sk-cube1,
    &.sk-cube5,
    &.sk-cube9 {
      animation-delay: 0.2s;
    }

    &.sk-cube2,
    &.sk-cube6 {
      animation-delay: 0.3s;
    }

    &.sk-cube3 {
      animation-delay: 0.4s;
    }

    &.sk-cube4,
    &.sk-cube8 {
      animation-delay: 0.1s;
    }

    &.sk-cube7 {
      animation-delay: 0s;
    }
  }

  @keyframes sk-cubeGridScaleDelay {
    0%,
    70%,
    100% {
      -webkit-transform: scale3D(1, 1, 1);
      transform: scale3D(1, 1, 1);
    }
    35% {
      -webkit-transform: scale3D(0, 0, 1);
      transform: scale3D(0, 0, 1);
    }
  }
`

export const Loading = props => (
  <SKCubeGrid>
    <div className='sk-cube sk-cube1' />
    <div className='sk-cube sk-cube2' />
    <div className='sk-cube sk-cube3' />
    <div className='sk-cube sk-cube4' />
    <div className='sk-cube sk-cube5' />
    <div className='sk-cube sk-cube6' />
    <div className='sk-cube sk-cube7' />
    <div className='sk-cube sk-cube8' />
    <div className='sk-cube sk-cube9' />
  </SKCubeGrid>
)

export default Loading
