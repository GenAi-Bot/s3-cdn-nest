export interface S3CdnUploadParams {
  /**
   * The name of the file to be uploaded
   */
  name: string
  /**
   * The file buffer to be uploaded
   */
  content: Buffer
  /**
   * The path to upload the file to
   * @example 'images/avatars'
   */
  path?: string
}
