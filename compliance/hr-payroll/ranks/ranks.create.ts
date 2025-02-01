// url = "/companies/compliance/hr-payroll/ranks/create"

// http_method = "POST"

type RankCreationPayload = {
  company_id: string
  rank: string
  allowances: string[] // existing allowances ids
  deductions: string[] // existing deductions ids
  description: string
}
