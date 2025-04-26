import { Module } from '@nestjs/common'
import { S3CdnService } from './services'
import { ConfigurableModuleClass } from './s3-cdn.module-definition'

@Module({
  providers: [S3CdnService],
  exports: [S3CdnService],
})
export class S3CdnModule extends ConfigurableModuleClass {}
