import { useState } from "react"
import BasicSelect from "./BasicSelect"
import FinancialSummaryTable from "./FinancialSummaryTable"
import Footer from "./Footer"

const App = () => {
  const [currency,setCurrency]=useState(1)
  const [decimal,setDecimal]=useState(0)
  return (
    <>
      <BasicSelect currency={currency} setCurrency={setCurrency} decimal={decimal} setDecimal={setDecimal}/>
      <FinancialSummaryTable currency={currency} decimal={decimal} />

      <Footer/>
    </>
  )
}
export default App