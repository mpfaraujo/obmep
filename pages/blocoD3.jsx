import Image from 'next/image';
import {useState} from 'react'
import styled from 'styled-components'
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text}
  function pegaFig (palavra){
  
    if (['1AED','2AED','3AED','4AED','1BED','2BED','3BED','4BED '].includes(palavra)){ return "/ED.svg"}else
    if (['1AEST','2AEST','3AEST','4AEST'].includes(palavra)) {return "/EST.svg"} else
    if (['1AEL','2AEL','3AEL','4AEL','1BEL','2BEL','3BEL','4BEL'].includes(palavra)) {return "/EL.svg"} else
    if (['1AELT','2AELT','3AELT','4AELT','1BELT','2BELT','3BELT','4BELT'].includes(palavra)) {return "/ELT.svg"} else
    if (['1AMEC','2AMEC','3AMEC','4AMEC','1BMEC','2BMEC','3BMEC','4BMEC'].includes(palavra)) {return "/MEC.svg"} else
    if (['1AEVE','2AEVE','3AEVE','4AEVE', '4ATUR'].includes(palavra)) {return "/EVE.svg"} else
    if (['1BSEG','2BSEG','3BSEG','4BSEG'].includes(palavra)) {return "/SEG.svg"} else
    if (['1BTEL','2BTEL','3BTEL','4BTEL'].includes(palavra)) {return "/TEL.svg"} else
    if (['1BADM','2BADM','3BADM','4BADM'].includes(palavra)) {return "/ADM.svg"} else
    if (['1AMET','2AMET','3AMET','4AMET'].includes(palavra)) {return "/MET.svg"} else
    if (['1AINFO','2AINFO','3AINFO','4AINFO','1BINFO','2BINFO','3BINFO','4BINFO'].includes(palavra)) {return "/INFO.svg"}else return "/cefet.svg"
  

}

  const Home = (props) => {
   

    const [turno, setTurno] =useState("manhã")
  
    function handleClick(){
      (turno!="tarde" ? setTurno("tarde") : setTurno('manhã'))
      return turno
    }
  
  
  const bloco = props.data
       
    return (
  <div> <button onClick={handleClick}>{turno}</button>
{bloco.map(
    (bl)=>{
        return <Container key={makeid()}>{(bl.bloco =="D"&&bl.andar=="3"?
        bl.disposicao.map((sl)=>{
          return <Card key={makeid()}>
            <div>
              {(turno!=="tarde"?<Image src={pegaFig(sl.turma.manhã)} alt='FIG'width="70" height="70" />:
               <Image src={pegaFig(sl.turma.tarde)} alt='FIG'width="70" height="70" />)}
            
            </div>
            <div><p>Sala: D3{sl.sala}</p>  <p>Turma:{(turno!="tarde"?sl.turma.manhã:sl.turma.tarde)}</p> <p>Aula1:{(turno!="tarde"?sl.discM12.disciplina:sl.discT12.disciplina)}</p> <p>Aula 2:{(turno!="tarde"?sl.discM34.disciplina:sl.discT34.disciplina)}</p></div>
          </Card>
        }
        )
        :null)}</Container>
    }
)}

</div> 
  
    )
  }
  
  export async function getServerSideProps(){
    const res = await fetch('http://localhost:3000/api/hello')
    const data =await res.json()
    return {props:{data}}
  }
  
  export default Home

  const Card=styled.div`
  display:flex;
  border-left:3px solid blue;
  width:220px;
  height:140px;
  border-radius:5px;
  padding:6px;
  gap:5px;
  font-size:12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  
  
  `

  

  const Container =styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  width:100%;
  height:100%;
  border-radius:5px;
  padding:10px;`