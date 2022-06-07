import type { NextPage } from 'next'
import {useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text}


const Container = styled.div`
display:flex;
flex-wrap:wrap;
gap:10px;
width:100%;
height:100%;
border-radius:5px;
`

const Card = styled.div`
display:flex;
border-left:3px solid palegreen;
width:200px;
height:100px;
border-radius:5px;
padding:6px;
gap:5px;

`
const Home: NextPage = (props) => {

  const [turno, setTurno] =useState("manhã")

  function handleClick(){
    (turno!="tarde" ? setTurno("tarde") : setTurno('manhã'))
    return turno
  }


  const {data}:any = props

  console.log(data)
  return (
    <>
    <nav>
      <MeuBotao><Link href='/blocoD2'><A>Bloco D 2º andar</A></Link></MeuBotao>
      <MeuBotao><Link href='/blocoD3'><A>Bloco D 3º andar</A></Link></MeuBotao>
      <MeuBotao><Link href='/blocoA3'><A>Bloco A 3º andar</A></Link></MeuBotao>
      <MeuBotao><Link href='/blocoB2'><A>Bloco B 2º andar</A></Link></MeuBotao>
      <MeuBotao><Link href='/blocoI1'><A>Bloco I 1º andar</A></Link></MeuBotao>
      <MeuBotao><Link href='/pavilhao1'><A>Pavilhao 1</A></Link></MeuBotao>
      <MeuBotao><Link href='/pavilhao2'><A>Pavilhao 2</A></Link></MeuBotao>
      <MeuBotao><Link href='/pavilhao5'><A>Pavilhao 5</A></Link></MeuBotao>
      <MeuBotao><Link href='/pavilhao6'><A>Pavilhao 6</A></Link></MeuBotao>
      <MeuBotao><Link href='/torre'><A>Torre</A></Link></MeuBotao>
  
    </nav>
    </>

  )
}

export async function getServerSideProps(){
  const res = await fetch('http://localhost:3000/api/hello')
  const data =await res.json()
  return {props:{data}}
}

export default Home

const MeuBotao = styled.button`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
    cursor:pointer;
`;

const A=styled.a`
font-color:white;
text-decoration:none;
`


