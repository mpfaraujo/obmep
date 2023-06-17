import { lista } from '@/assets/listaObmep2023'
import { Pesquisa } from '@/components/pesquisa'
export default async function Home() {
  return (
    <><div className='flex justify-center w-full'>
    <img src="/horiz_azul"  width="300px"/><br/>
    </div>
    <Pesquisa />
    </>
  )
}
