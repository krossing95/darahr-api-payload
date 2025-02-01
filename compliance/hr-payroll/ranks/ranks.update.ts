// url = "/companies/compliance/hr-payroll/ranks/update

// http_method = "PATCH"

type ComplianceRankUpdatePayload = {
  rank_id: string
  is_active: boolean
  company_id: string
  rank: string
  allowances: string[]
  deductions: string[]
  description: string
}
