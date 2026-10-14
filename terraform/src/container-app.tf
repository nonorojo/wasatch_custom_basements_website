data "azurerm_resource_group" "container_app" {
  name = "rg-nonoroj-${var.environment}"
}

data "azurerm_container_app_environment" "container_app" {
  name                = "cae-nonrojo-${var.environment}"
  resource_group_name = data.azurerm_resource_group.container_app.name
}

resource "azurerm_container_app" "website" {
  name                         = "ca-${var.project_name}-${var.environment}"
  resource_group_name          = data.azurerm_resource_group.container_app.name
  container_app_environment_id = data.azurerm_container_app_environment.container_app.id
  revision_mode                = "Single"

  template {
    min_replicas = 1
    max_replicas = 2

    container {
      name   = "website"
      image  = var.container_image
      cpu    = var.container_app_cpu
      memory = var.container_app_memory
    }
  }

  ingress {
    external_enabled = true
    target_port      = 80
    transport        = "auto"

    traffic_weight {
      percentage      = 100
      latest_revision = true
    }
  }
}