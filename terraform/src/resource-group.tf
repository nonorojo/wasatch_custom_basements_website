resource "azurerm_resource_group" "wasatch" {
  name     = "rg-${var.project_name}-${var.environment}"
  location = var.location
}
