// url = "/companies/compliance/hr-payroll/pay-grades/update

// http_method = "PATCH"

type CompliancePayGradeUpdatePayload = {
  pay_grade_id: string
  rank_id: string
  basic_pay: number
  is_active: boolean
  company_id: string
  pay_grade: string
}
