export class ImagesCollection {
  id: string;
  name: string;
  creationDate: Date;
  sourceJob: string;
  sourceCatalog: string;
  sourceBackendImport: string;
  importMethod: ImagesCollectionImportMethod;
  // cloudImportData: CloudProviderImportData;
  s3SecretAccessKey: string;
  s3AccessKeyID: string;
  s3BucketName: string;
  s3FolderName: string;
  s3FileExtensions: string;
  gdriveCode: string;
  gdriveFolderAccessType: GDriveFolderAccessType;
  gdriveFolderAccessValue: string;
  gdriveFileExtensions: string;
  gdriveRecursive: boolean;
  locked: boolean;
  numberOfImages: number;
  imagesTotalSize: number;
  numberImportingImages: number;
  numberOfImportErrors: number;
  numberOfMetadataFiles: number;
  metadataFilesTotalSize: number;
  notes: string;
  pattern: string;
  owner: string;
  publiclyShared: boolean;
  _links: any;

  // constructor() {
  //   this.cloudImportData = new CloudProviderImportData();
  // }
}

export interface PaginatedImagesCollections {
  page: any;
  data: ImagesCollection[];
  _links: any;
}

export enum ImagesCollectionImportMethod {
  UPLOADED,
  JOB,
  CATALOG,
  BACKEND_IMPORT,
  S3_IMPORT,
  GDRIVE_IMPORT
}

export enum GDriveFolderAccessType {
  PATH,
  IDURL
}

// export class CloudProviderImportData {
//   s3SecretAccessKey: string;
//   s3AccessKeyID: string;
//   s3BucketName: string;
//   s3FolderName: string;
//   gdriveCode: string;
//   gdriveFolderName: string;
// }