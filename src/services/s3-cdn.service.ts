import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { MODULE_OPTIONS_TOKEN } from '../s3-cdn.module-definition'
import { S3CdnOptions, S3CdnUploadParams } from '../interfaces'

@Injectable()
export class S3CdnService {
  private readonly s3: S3Client
  private readonly logger = new Logger(S3CdnService.name)

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private readonly options: S3CdnOptions,
  ) {
    this.s3 = new S3Client({
      region: options.region ?? 'auto',
      endpoint: options.s3Endpoint,
      credentials: {
        accessKeyId: options.accessKeyId,
        secretAccessKey: options.secretAccessKey,
      },
    })
  }

  async upload(params: S3CdnUploadParams) {
    const key = `${params.path ?? ''}${params.path && !params.path.endsWith('/') ? '/' : ''}${params.name}`

    const command = new PutObjectCommand({
      Bucket: this.options.bucketName,
      Key: key,
      Body: params.content,
    })

    try {
      await this.s3.send(command)
    } catch (e) {
      this.logger.error(e)
      throw new InternalServerErrorException(
        'Failed to save content in storage',
      )
    }

    return `https://${this.options.publicEndpoint}/${key}`
  }
}
