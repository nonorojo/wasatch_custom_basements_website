data "azurerm_resource_group" "container_app" {
  name = "rg-cae-nonorojo-${var.environment}"
}

data "azurerm_container_app_environment" "container_app" {
  name                = "cae-nonorojo-${var.environment}"
  resource_group_name = data.azurerm_resource_group.container_app.name
}

data "azurerm_container_registry" "container_registry" {
  name                = "crnono"
  resource_group_name = "rg-crnono"
}
