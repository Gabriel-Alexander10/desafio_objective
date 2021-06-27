import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useHeroes } from '../../contexts/HeroesContext';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import { Container, ArrowButtonWrapper, Button } from './styles';

export function Pagination() {
  const { currentPage, handleUpdateCurrentPage, totalHeroes } = useHeroes();
  const [firstButton, setFirstButton] = useState(currentPage);

  const size = useWindowDimensions();

  const buttonsNumber = size.width >= 700 ? 5 : 3;
  const buttons = new Array(buttonsNumber).fill(0);

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
        if (
          Math.floor(totalHeroes / 10) === firstButton &&
          Math.floor(totalHeroes / 10) > buttonsNumber
        ) {
          return (
            <Button 
              key={idx}
              active={firstButton + idx + 1 - buttonsNumber == currentPage}
              id={String(firstButton + 1 + idx - buttonsNumber)}
              onClick={() => {
                if (currentPage != firstButton + 1 + idx - buttonsNumber) {
                  handleUpdateCurrentPage(firstButton + 1 + idx - buttonsNumber)
                }
              }}
            >{firstButton + 2 - buttonsNumber + idx}</Button>
          )
        }

        if (Math.floor(totalHeroes / 10) < firstButton + idx) {
          return;
        }

        return (
          <Button 
            key={idx}
            active={firstButton + idx == currentPage}
            id={String(firstButton + idx)}
            onClick={() => {
              if (currentPage != firstButton + idx) {
                handleUpdateCurrentPage(firstButton + idx)
              }
            }}
          >{firstButton + 1 +idx}</Button>
        )
      })}


      {currentPage < Math.floor(totalHeroes / 10) - 1 && (
        <ArrowButtonWrapper>
          <button onClick={() => handleNextPage(currentPage + 1)}>
            <MdKeyboardArrowRight size={16} />
          </button>
        </ArrowButtonWrapper>
      )}

      {currentPage < Math.floor(totalHeroes / 10) - 2 && (
        <ArrowButtonWrapper>
          <button onClick={() => handleNextPage(Math.floor(totalHeroes / 10))}>
            <MdKeyboardArrowRight size={16} />
            <MdKeyboardArrowRight size={16} />
          </button>
        </ArrowButtonWrapper>
      )}

    </Container>
  );
}