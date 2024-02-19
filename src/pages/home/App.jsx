import { useRef, useState } from "react"; //FERRAMENTAS HOOKS
import { v4 } from "uuid"; //FERRAMENTA PARA GERAR ID
import { AddButton, InputProducts, Container } from "./styles";

function App() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function adicionarProduto() {
    // console.log(v4());
    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos]);
    inputRef.current.value = "";
  }
  function deletarProduto(id) {
    setProdutos(produtos.filter((produtos) => produtos.id !== id));
  }

  return (
    <>
      <Container>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
        <h1>Lista de Compras</h1>
        <InputProducts
          type="text"
          placeholder="Digite o produto aqui.."
          ref={inputRef}
        />
        &nbsp;
        <AddButton onClick={adicionarProduto}>Adicionar</AddButton>
        &nbsp;
        {produtos.map((produtos) => (
          <div key={produtos.id}>
            <p>{produtos.nome}</p>
            <AddButton onClick={() => deletarProduto(produtos.id)}>
              🗑️
            </AddButton>
          </div>
        ))}
      </Container>
    </>
  );
} //Componente JSX

export default App;
