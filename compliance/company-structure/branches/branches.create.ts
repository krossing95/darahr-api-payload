// url = "/companies/compliance/company-structure/branches/create"

// http_method = "POST"

type CreateBranchPayload = {
  company_id: string
  branch_email: string
  branch_name: string
  branch_phone: string
  branch_address: string
}
