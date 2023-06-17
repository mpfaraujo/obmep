'use client'
import { useState } from 'react'
import { lista } from '@/assets/listaObmep2023'
import { Card } from './card'

interface StateProps {
    pesquisa:string
    result:{Nome:string, Nota:number, fase_2?:boolean}[]
}

export const Pesquisa = ()=>{
const [query, setQuery] = useState<StateProps>({pesquisa:'', result:[{Nome:'', Nota:0 }]})
const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
    const resultado=lista.filter((aluno)=>{
        if (e.target.value==="") return lista
        return aluno.Nome.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setQuery ({pesquisa:e.target.value, result:resultado})
}
    return (
        <div className='bg-white text-black m-8'>
        <form>
          <input type="search" placeholder="Digite seu Nome Aqui" value={query.pesquisa} onChange={handleChange} className='shadow appearance-none border rounded w-full h-{3em} py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-6'/>
        </form>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 w-[90%]'>
        {
  query.pesquisa === ''
    ? ''
    : query.result.map((aluno) => (
        <Card
          key={'chave' + aluno.Nome}
          Nome={aluno.Nome}
          Nota={aluno.Nota}
          fase_2={aluno.fase_2 ? true : undefined} // Pass `true` if aluno.fase_2 is truthy, otherwise pass `undefined`
        />
      ))
}

        </div>
    </div>
    )
}