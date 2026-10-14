resource "azurerm_container_app" "website" {
  name                         = "ca-${var.project_name}-${var.environment}"
  resource_group_name          = azurerm_resource_group.wasatch.name
  container_app_environment_id = data.azurerm_container_app_environment.container_app.id
  revision_mode                = "Single"

  secret {
    name  = "container-registry-password"
    value = data.azurerm_container_registry.container_registry.admin_password
  }

  registry {
    server               = "crnono.azurecr.io"
    username             = data.azurerm_container_registry.container_registry.admin_username
    password_secret_name = "container-registry-password"
  }

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