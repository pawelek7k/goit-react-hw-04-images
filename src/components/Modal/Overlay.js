import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Przezroczyste tło */
  display: flex;
  justify-content: center; /* Wyśrodkowanie modalu w poziomie */
  align-items: center;
`;

export default Overlay;
