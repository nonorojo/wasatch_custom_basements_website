output "container_app_fqdn" {
  description = "Temporary public hostname for the website Container App"
  value       = azurerm_container_app.website.latest_revision_fqdn
}

output "container_app_url" {
  description = "Temporary HTTPS URL for the website Container App"
  value       = "https://${azurerm_container_app.website.latest_revision_fqdn}"
}