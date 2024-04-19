import styled from "styled-components";

const SearchbarStyles = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #efdada;
  padding: 1rem 0rem;
  position: fixed;
  width: 100%;
  background-color: #ffffff66;
  backdrop-filter: blur(5px);
  .form {
    position: relative;
    width: 400px;
    display: flex;
    button {
      border: none;
      letter-spacing: 2px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: gray;
      border-bottom: 1px solid #000000bd;
    }
    .input,
    .input-alt {
      color: #000000bd;
      font-size: 0.9rem;
      background-color: transparent;
      width: 100%;
      box-sizing: border-box;
      padding-inline: 0.5em;
      padding-block: 0.7em;
      border: none;
      border-bottom: 1px solid #000000bd;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &:focus {
        outline: none;
      }
    }

    .input-border {
      position: absolute;
      background: #000000bd;
      width: 0%;
      height: 2px;
      bottom: 0;
      left: 0;
      transition: width 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }

    .input-alt {
      font-size: 1.2rem;
      padding-inline: 1em;
      padding-block: 0.8em;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .input-border-alt {
      height: 3px;
      background: linear-gradient(90deg, black 0%, pink 50%, purple 100%);
      transition: width 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    }

    .input:focus + .input-border,
    .input-alt:focus + .input-border-alt {
      width: 100%;
    }
  }
`;

export default SearchbarStyles;
