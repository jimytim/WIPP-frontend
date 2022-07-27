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
  gdriveCode: string;
  gdriveFolderName: string;
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
  GDRIVE_IMPORT,
  BACKEND_IMPORT,
  JOB,
  CATALOG,
  S3_IMPORT
}

// export enum ImagesCollectionImportMethod {
//   UPLOADED,
//   JOB,
//   CATALOG,
//   BACKEND_IMPORT,
//   S3_IMPORT,
//   GDRIVE_IMPORT
// }

// export class CloudProviderImportData {
//   s3SecretAccessKey: string;
//   s3AccessKeyID: string;
//   s3BucketName: string;
//   s3FolderName: string;
//   gdriveCode: string;
//   gdriveFolderName: string;
// }