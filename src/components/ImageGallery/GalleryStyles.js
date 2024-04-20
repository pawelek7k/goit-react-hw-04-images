import styled from "styled-components";

const GalleryStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1650px;
  margin: 0 auto;
  ul {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;

    align-items: start;
    list-style: none;
    gap: 2rem;
    li {
      width: 300px;

      img {
        border-radius: 1rem;
      }
    }
  }
`;

export default GalleryStyles;
