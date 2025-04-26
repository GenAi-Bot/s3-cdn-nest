import { ConfigurableModuleBuilder } from '@nestjs/common'
import { S3CdnOptions } from './interfaces'

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<S3CdnOptions>().build()
