import React, { useState } from 'react'
import data from './constants/data.js'
import './FinancialSummary.css'

const FinancialSummaryPrint = ({decimal,currency,currentPage}) => {
  const rowsPerPage = 10

  const monthKeys = Object.keys(data.Sheet1[0]).filter(
    (key) => key !== 'Overhead'
  )

  // Calculate total pages
  const totalPages = Math.ceil(data.Sheet1.length / rowsPerPage)

  // Get the rows to display for the current page
  const currentRows = data.Sheet1.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  )



  // Splitting monthKeys into groups of 4
  const monthGroups = []
  for (let i = 0; i < monthKeys.length; i += 4) {
    monthGroups.push(monthKeys.slice(i, i + 4))
  }

  return (
    <div className='print'>
      {monthGroups.map((monthGroup, groupIndex) => (
        <div className="table-wrapper" key={groupIndex}>
          <div className="table-header">
            <div className="overhead">Overhead</div>
            {monthGroup.map((month, index) => (
              <div key={index} className="months">
                {month}
              </div>
            ))}
          </div>
          <div className="table-body">
            {currentRows.map((element, index) => (
              <div className="table-row" key={index}>
                <div className="overhead elements">{element.Overhead}</div>
                {monthGroup.map((month, subIndex) => (
                  <div key={subIndex}>{(element[month]/currency).toFixed(decimal)}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="pagination">
       
        <span>
          Page {currentPage} of {totalPages}
        </span>
      
      </div>
    </div>
  )
}

export default FinancialSummaryPrint
