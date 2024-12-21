// url = "/companies/compliance/hr-payroll/deductions/update

// http_method = "PATCH"

type ComplianceDeductionUpdationPayload = {
  deduction_id: string
  company_id: string
  is_active: boolean
  deduction: string
  shortname?: string
  description?: string
}
