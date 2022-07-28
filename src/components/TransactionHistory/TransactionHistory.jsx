import { Theader, Tdstyle, TableStyled } from './TransactionHistory.styled';
import propTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <TableStyled className="transaction-history">
      <thead>
        <tr>
          <Theader>Type</Theader>
          <Theader>Amount</Theader>
          <Theader>Currency</Theader>
        </tr>
      </thead>
      <tbody>
        {items.map(el => {
          return (
            <tr key={el.id}>
              <Tdstyle>{el.type}</Tdstyle>
              <Tdstyle>{el.amount}</Tdstyle>
              <Tdstyle>{el.currency}</Tdstyle>
            </tr>
          );
        })}
      </tbody>
    </TableStyled>
  );
};
TransactionHistory.propTypes = {
  items: propTypes.array.isRequired,
};

export default TransactionHistory;
