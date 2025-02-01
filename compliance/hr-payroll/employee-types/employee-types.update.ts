// url = "/companies/compliance/hr-payroll/employee-types/update

// http_method = "PATCH"

type ComplianceEmployeeTypesUpdatePayload = {
  employee_type_id: string
  is_active: boolean
  company_id: string
  name: string
  description: string
}
