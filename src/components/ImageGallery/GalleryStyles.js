import styled from "styled-components";

const GalleryStyles = styled.div`
  ul {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 2rem;
    li {
      width: 300px;
    }
  }
`;

export default GalleryStyles;
