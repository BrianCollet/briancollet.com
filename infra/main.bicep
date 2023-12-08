@description('Environment to deploy resources to.')
@allowed([
  'dev'
  'prod'
])
param env string

@description('Location to deploy resources to.')
param location string = resourceGroup().location

@description('Name of the Static Web App.')
param appName string

@description('SKU of the Static Web App.')
param appSku object

@description('URL for the repository of the static site.	')
param appRepo string

param appProperties object

resource app 'Microsoft.Web/staticSites@2022-09-01' = {
  name: appName
  location: location
  sku: appSku
  properties: appProperties
}
