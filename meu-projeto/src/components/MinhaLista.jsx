import { useState } from 'react'


const minhaLista = [
    {id: 1, nome: 'Ana', nota: 9.2},
    {id: 2, nome: 'Bia', nota: 8.2},
    {id: 3, nome: 'Carlos', nota: 7.2},
    {id: 4, nome: 'Daniel', nota: 6.2},
]

const [produtos, setProdutos] = useState(MinhaLista)

export default function MinhaLista() {
    
    
    return produtos.map( (item) => { 
        return (
            <div key={item.id}> 
            <input placeholder='pesquise aqui'></input>
             <h4>{item.nome} </h4>

            </div>    
    
        ) 
   }  )

}