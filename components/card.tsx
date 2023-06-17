import Image from 'next/image'

export const Card = (props:{Nome:string, Nota:number, fase_2:boolean|undefined})=>{
    return (
        <div className="flex flex-col items-center bg-green-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
           {(props.Nota>11?
           <img className="object-cover" src='/enviado.svg' alt='Logo OBMEP' width={130} height="auto"/>:
           <img className="object-cover" src='/nenviado.svg' alt='Logo OBMEP'width={130} height="auto"/>)}
          <div className="flex flex-col justify-between p-4 leading-normal bg-white w-full">
          <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-center">{props.Nome}</h1><br/>
            <p className="mb-3 font-normal text-gray-700 ">Você acertou {props.Nota} questões.</p>
          </div>
        </div>
    )
}