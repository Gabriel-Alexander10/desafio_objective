import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;

  tr {
    th {
      padding-bottom: 9px;

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