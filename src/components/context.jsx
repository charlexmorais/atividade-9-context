import { createContext, useState } from "react";

export const profileContext = createContext();

export function ProfileProvider(props) {
  const [produto, setProduto] = useState({
    name: "",
    preco: "",
    descricao:'sem descricao'
  });

  return (
    <profileContext.Provider value={{ produto, setProduto}}>
      {props.children}
    </profileContext.Provider>
  );
}
export default ProfileProvider;