variable "project_name" {
  description = "The name of the project"
  type        = string
  default     = "wasatch-custom-basements"
}

variable "environment" {
  description = "The deployment environment"
  type        = string
  default     = "dev"
}

variable "location" {
  description = "The Azure region for deployment"
  type        = string
  default     = "West US 2"
}

variable "subscription_ids" {
  description = "Subscription IDs the GitHub Actions service principal can access"
  type        = list(string)
  default     = ["1776dd90-c1ae-4485-b414-554883c0fa13"]
}

variable "container_image" {
  description = "Container image used by the website Container App"
  type        = string
  default     = "mcr.microsoft.com/azuredocs/containerapps-helloworld:latest"
}

variable "container_app_cpu" {
  description = "CPU allocated to the website Container App"
  type        = number
  default     = 0.25
}

variable "container_app_memory" {
  description = "Memory allocated to the website Container App"
  type        = string
  default     = "0.5Gi"
}