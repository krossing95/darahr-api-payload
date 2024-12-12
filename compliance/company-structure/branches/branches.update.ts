// url = "/companies/compliance/company-structure/branches/update"

// http_method = "PATCH"

type UpdateBranchPayload = {
  company_id: string
  branch_id: string
  branch_email: string
  branch_name: string
  branch_phone: string
  branch_address: string
}
