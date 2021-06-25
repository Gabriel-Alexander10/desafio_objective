import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useHeroes } from '../../hooks/HeroesContext';

import { Container, ArrowButtonWrapper, Button } from './styles';

export function Pagination() {
  const { currentPage, handleUpdateCurrentPage, totalHeroes } = useHeroes();
  const [firstButton, setFirstButton] = useState(currentPage);

  console.log(firstButton, currentPage);
  const buttons = new Array(5).fill(0);

  function handlePreviewPage(pageNumber: number) {
    handleUpdateCurrentPage(pageNumber);

    if (pageNumber < firstButton) {
      setFirstButton(pageNumber);
    }
  }

  function handleNextPage(pageNumber: number) {
    handleUpdateCurrentPage(pageNumber);

    if (pageNumber > firstButton + 4) {
      setFirstButton(pageNumber);
    }
  }

  return (
    <Container>
      {currentPage >= 2 && (
        <ArrowButtonWrapper>
          <button onClick={() => handlePreviewPage(0)}>
            <MdKeyboardArrowLeft size={16} />
            <MdKeyboardArrowLeft size={16} />
          </button>
        </ArrowButtonWrapper>
      )}

      {currentPage >= 1 && (
        <ArrowButtonWrapper onClick={() => handlePreviewPage(currentPage - 1)}>
          <button>
            <MdKeyboardArrowLeft size={16} />
          </button>
        </ArrowButtonWrapper>
      )}

      {buttons.map((_, idx) => {
        if (Math.ceil(totalHeroes / 10) < firstButton + idx) {
          return;
        }

        return (
          <Button 
            key={idx}
            active={firstButton + idx == currentPage}
            onClick={() => handleUpdateCurrentPage(firstButton + idx)}
          >{firstButton + 1 +idx}</Button>
        )
      })}


      {currentPage <= Math.ceil(totalHeroes / 10) - 1 && (
        <ArrowButtonWrapper>
          <button onClick={() => handleNextPage(currentPage + 1)}>
            <MdKeyboardArrowRight size={16} />
          </button>
        </ArrowButtonWrapper>
      )}

      {currentPage <= Math.ceil(totalHeroes / 10) - 2 && (
        <ArrowButtonWrapper>
          <button onClick={() => handleNextPage(Math.ceil(totalHeroes / 10))}>
            <MdKeyboardArrowRight size={16} />
            <MdKeyboardArrowRight size={16} />
          </button>
        </ArrowButtonWrapper>
      )}

    </Container>
  );
}