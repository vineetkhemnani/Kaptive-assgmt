import { useState } from "react"
import BasicSelect from "./BasicSelect"
import FinancialSummaryTable from "./FinancialSummaryTable"

const App = () => {
  const [currency,setCurrency]=useState(1)
  const [decimal,setDecimal]=useState(0)
  return (
    <div>
      <BasicSelect currency={currency} setCurrency={setCurrency} decimal={decimal} setDecimal={setDecimal}/>
      <FinancialSummaryTable currency={currency} decimal={decimal} />
    </div>
  )
}
export default App