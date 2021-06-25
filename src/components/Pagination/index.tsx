import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Container, ArrowButtonWrapper } from './styles';

export function Pagination() {
  return (
    <Container>
      <ArrowButtonWrapper>
        <button>
          <MdKeyboardArrowLeft size={16} />
          <MdKeyboardArrowLeft size={16} />
        </button>
      </ArrowButtonWrapper>

      <ArrowButtonWrapper>
        <button>
          <MdKeyboardArrowLeft size={16} />
        </button>
      </ArrowButtonWrapper>

      <button>1</button>
      <button>2</button>
      <button>3</button>

      <ArrowButtonWrapper>
        <button>
          <MdKeyboardArrowRight size={16} />
        </button>
      </ArrowButtonWrapper>

      <ArrowButtonWrapper>
        <button>
          <MdKeyboardArrowRight size={16} />
          <MdKeyboardArrowRight size={16} />
        </button>
      </ArrowButtonWrapper>
    </Container>
  );
}