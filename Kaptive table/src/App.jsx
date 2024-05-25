import { useState } from "react"
import BasicSelect from "./BasicSelect"
import FinancialSummaryTable from "./FinancialSummaryTable"

const App = () => {
  const [currency,setCurrency]=useState('')
  return (
    <div>
      <BasicSelect currency={currency} setCurrency={setCurrency} />
      <FinancialSummaryTable currency={currency} />
    </div>
  )
}
export default App