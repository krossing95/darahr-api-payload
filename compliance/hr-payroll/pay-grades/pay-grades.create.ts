// url = "/companies/compliance/hr-payroll/pay-grades/create"

// http_method = "POST"

type CompliancePayGradeCreationPayload = {
  company_id: string
  rank_id: string
  pay_grade: string
  basic_pay: number // annual basic pay
}
