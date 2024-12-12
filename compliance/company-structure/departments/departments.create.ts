// url = "/companies/compliance/company-structure/departments/create"

// http_method = "POST"

type CreateDepartmentPayload = {
  company_id: string
  department_name: string
  department_code: string
  description: string
}
