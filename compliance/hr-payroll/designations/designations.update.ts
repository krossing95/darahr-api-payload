// url = "/companies/compliance/hr-payroll/designations/update

// http_method = "PATCH"

type ComplianceDesignationUpdatePayload = {
  designation_id: string
  is_active: boolean
  company_id: string
  designation: string
  description: string
}
