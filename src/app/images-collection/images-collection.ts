export class ImagesCollection {
  id: string;
  name: string;
  creationDate: Date;
  sourceJob: string;
  sourceCatalog: string;
  importMethod: string;
  importSource: ImagesCollectionSource;
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
}

export interface PaginatedImagesCollections {
  page: any;
  data: ImagesCollection[];
  _links: any;
}


export enum ImagesCollectionSource { 
  source_0 = 'Local', 
  source_1 = 'S3 Bucket', 
  source_2 = 'Google Drive'
}
