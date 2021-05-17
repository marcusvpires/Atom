import styled from "styled-components"

export const Wrapper = styled.section`
  position: relative;
  width: 450px;
  height: 450px;
  background-color: black;
  `

export const Center = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #96bcff;
`

export const Circuit = styled.div`
  position: absolute;
  border-radius: 50%;
  width: ${props => props.size + '0px'};
  height: ${props => props.size + '0px'};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px dashed #5c97ff;
`
