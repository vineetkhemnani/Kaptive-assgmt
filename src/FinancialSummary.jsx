import React, { useState } from 'react'
import data from './constants/data.js'
import './FinancialSummary.css'
import FinancialSummaryPrint from './FinancialSummaryPrint.jsx'
import { Button, Container } from '@mui/material'

const FinancialSummary = ({decimal,currency}) => {
  const [currentPage, setCurrentPage] = useState(1)
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

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h3>CashFlow Summary-1</h3>
        <Button
          variant="contained"
          color="primary"
          className="no-print"
          onClick={handlePrint}
          sx={{ height: '40px' }}
        >
          Print
        </Button>
      </Container>
      {/* normal table */}
      <Container className="no-print" style={{ width: '100%' }}>
        <div className="table-wrapper">
          <div className="table-header">
            <div className="overhead">Overhead</div>
            {monthKeys.map((month, index) => (
              <div
                key={index}
                className={`months ${index % 4 === 0 ? 'break-after' : ''}`}
              >
                {month}
              </div>
            ))}
          </div>
          <div className="table-body">
            {currentRows.map((element, index) => (
              <div className="table-row" key={index}>
                <div className="overhead elements">{element.Overhead}</div>
                {monthKeys.map((month, subIndex) => (
                  <div
                    key={subIndex}
                    className={`${subIndex % 4 === 0 ? '' : ''}`}
                  >
                    {(element[month]/currency).toFixed(decimal)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      </Container>

      {/* print table */}
      <FinancialSummaryPrint decimal={decimal} currency={currency} currentPage={currentPage}/>
    </>
  )
}

export default FinancialSummary
