// url = "/companies/compliance/company-structure/departments/update"

// http_method = "PATCH"

type DepartmentUpdatePayload = {
  department_id: string
  company_id: string
  department_name: string
  department_code: string
  description: string
}
