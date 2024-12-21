// url = "/companies/compliance/hr-payroll/deductions/create"

// http_method = "POST"

type ComplianceDeductionCreationPayload = {
  company_id: string
  deduction: string
  shortname?: string
  description: string
}
