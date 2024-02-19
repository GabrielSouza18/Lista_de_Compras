import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  width: 100vw;

  font-family: "JetBrains Mono", monospace;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  img {
    width: 8%;
    animation: spin 5s linear infinite; /* Ajuste a duração e o tipo de animação conforme necessário */
  }
`;

export const AddButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid #3498db;
  color: #3498db;
  background-color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #3498db;
    color: #fff;
  }
`;

export const InputProducts = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #3498db;
  border-radius: 5px;
  transition: border-color 0.3s;
  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;
