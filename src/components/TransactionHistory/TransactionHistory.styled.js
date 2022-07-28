import styled from 'styled-components';

const TableStyled = styled.table`
  border-spacing: 0 10px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  margin: 0 auto;
  border: 2px solid black;
`;

const Theader = styled.th`
  padding: 10px 20px;
  background: #56433d;
  color: #f9c941;
  border-right: 2px solid;
  font-size: 0.9em;
`;
const Tdstyle = styled.td`
  vertical-align: middle;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  border-top: 2px solid #56433d;
  border-bottom: 2px solid #56433d;
  border-right: 2px solid #56433d;
`;
export { Theader, Tdstyle, TableStyled };
