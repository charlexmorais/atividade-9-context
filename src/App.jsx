import React, { useContext } from 'react';
import Produto from './components/Produto';
import { profileContext } from './components/context';





function App() {
  const { produto, setProduto } = useContext(profileContext);

  // Function to handle the button click and update the produto state
  const handleButtonClick = () => {
    const updatedProduto = {
      name: 'Updated Name',
      preco: 'Updated Price',
      descricao: 'Updated Description',
    };

    setProduto(updatedProduto);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Update Produto</button>
      <Produto />
    </div>
  );
}
export default App;
