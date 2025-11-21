import "./Result.css";
import {
  TABLE_HEADERS,
  calculateInvestmentResults,
  formatter,
} from "../../util/investment";

export default function Result({ userInput }) {
  const result = calculateInvestmentResults(userInput);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>{TABLE_HEADERS.year}</th>
          <th>{TABLE_HEADERS.investmentValue}</th>
          <th>{TABLE_HEADERS.interestYear}</th>
          <th>{TABLE_HEADERS.totalInterest}</th>
          <th>{TABLE_HEADERS.investedCapital}</th>
        </tr>
      </thead>

      <tbody>
        {result.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;

          const totalAmountInvestement = item.valueEndOfYear - totalInterest;

          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvestement)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
