using 'main.bicep'

var devSettings = {
  name: 'Free'
  tier: 'Free'
}

var prodSettings = {
  name: 'Standard'
  tier: 'Standard'
}

param env = 'dev'

param appSku = env == 'dev' ? devSettings : prodSettings

param location = 'westus2'

param appName = 'briancolletcom'
param appRepo = 'https://github.com/BrianCollet/briancollet.com'

var appConfig = {
  branch: 'main'
  stagingEnvironmentPolicy: 'Enabled'
  allowConfigFileUpdates: true
  provider: 'Azure DevOps'
  enterpriseGradeCdnStatus: 'Disabled'
  buildProperties: {
    skipGithubActionWorkflowGeneration: true
  }
}

param appProperties = union({
    repositoryUrl: appRepo
  }, appConfig)
