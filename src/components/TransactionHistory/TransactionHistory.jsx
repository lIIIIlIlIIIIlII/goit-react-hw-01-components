import {
  TransactionHistoryTable, CollumnNames, CollumnValues, ColoredColors

} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return <TransactionHistoryTable class="transaction-history">
  <thead>
    <ColoredColors>
      <CollumnNames>Type</CollumnNames>
      <CollumnNames>Amount</CollumnNames>
      <CollumnNames>Currency</CollumnNames>
    </ColoredColors>
  </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                 <ColoredColors key={id}>
      <CollumnValues>{type}</CollumnValues>
      <CollumnValues>{amount}</CollumnValues>
      <CollumnValues>{currency}</CollumnValues>
    </ColoredColors>
            ))}
     </tbody>
</TransactionHistoryTable>
}


