/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse  } from 'next';
import { generateApiConfig } from '../../services/apiConfigSSR';

export default (_request: NextApiRequest, response: NextApiResponse) => {
  const apiConfig = generateApiConfig();
  
  return response.json(apiConfig);
}