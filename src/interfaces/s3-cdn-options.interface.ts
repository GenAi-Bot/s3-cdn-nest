export interface S3CdnOptions {
  /**
   * The name of the bucket to upload to
   */
  bucketName: string
  /**
   * The access key id to use for authentication
   */
  accessKeyId: string
  /**
   * The secret access key to use for authentication
   */
  secretAccessKey: string
  /**
   * The region to use for the bucket
   * @example 'us-east-1'
   */
  region?: string
  /**
   * The endpoint to use for the bucket
   * @example 'https://ACCOUNT_ID.r2.cloudflarestorage.com'
   */
  s3Endpoint: string
  /**
   * The public endpoint to use for the bucket
   * @example 'https://ACCOUNT_ID.r2.dev'
   */
  publicEndpoint: string
}
