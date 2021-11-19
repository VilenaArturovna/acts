import { Addresses } from '../Addresses';
import { FormToFillOut } from '../FormToFillOut';
import { Act } from '../Act';
import { useState } from 'react';

type Page = 'addresses' | 'form' | 'act'

export const Main = () => {
  const [currentPage, setCurrentPage] = useState<Page>('form')
  return (
    <div>
      {currentPage === 'addresses' && <Addresses />}
      {currentPage === 'form' && <FormToFillOut />}
      {currentPage === 'act' && <Act />}
    </div>
  )
}
