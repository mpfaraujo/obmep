// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from './data.json'

type Data = {
  nome: string
  sobrenome: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const dados=JSON.parse(JSON.stringify(data))
  res.status(200).json(dados)
}
