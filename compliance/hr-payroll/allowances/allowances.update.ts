// url = "/companies/compliance/hr-payroll/allowances/update

// http_method = "PATCH"

type ComplianceAllowanceUpdatePayload = {
  allowance_id: string
  is_active: boolean
  company_id: string
  allowance: string
  description?: string
}
