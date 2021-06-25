import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: separate;
    border-spacing: 0 0.5rem;

  tr {
    th {
      text-align: left;
      padding-left: 18px;
      font: 400 0.75rem "PT Sans";
      color: var(--sub-text);

      & + th {
        padding-left: 0;
      }
    }

  }
`;