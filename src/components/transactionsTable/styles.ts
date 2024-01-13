import { styled } from "styled-components";

export const Container = styled.div `
  table {
    width: 1120px;
    margin: 0 auto;

    th {
      color: var(--text-body);
      text-align: left;
      padding: 1rem;
    }

    tbody {
        background: var(--shape);
         border-radius: 0.25rem;
         
        td {
          padding: 1rem;
        }
      }

      .deposit {
        color: var(--green);
      }

      .withdraw {
        color: var(--red);
      }
    }
`