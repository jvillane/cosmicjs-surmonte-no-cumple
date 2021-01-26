import * as Cosmic from 'cosmicjs';

interface GetObjectsParams {
  type?: string;
  limit?: number;
  skip?: number;
  // 'slug,title,content' get only what you need
  props?: string;
  // optional, if sort is needed.
  // (use one option from 'created_at,-created_at,modified_at,-modified_at,random')
  sort?: string;
  // optional, if localization set on Objects
  locale?: string;
  // optional, if need to get draft Objects
  status?: string;
  filters?: any;
  metadata?: any;
}

interface GetMediaParams {
  folder: string;
  // 'imgix_url' get only what you need
  props?: string;
  limit?: number;
}

export namespace CosmicService {
  const bucket = Cosmic().bucket({
    slug: process.env.NEXT_PUBLIC_COSMIC_BUCKET,
    // eslint-disable-next-line @typescript-eslint/camelcase
    read_key: process.env.NEXT_PUBLIC_COSMIC_READ_KEY,
  });

  export const getObject = async <E> (slug: string) => {
    try {
      const response = await bucket.getObject({ slug });
      return (response.object as E);
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  export const getObjectTypes = async () => {
    try {
      const result = await bucket.getObjectTypes();
      return result.object_types;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  export const getObjects = async <E> (params?: GetObjectsParams) => {
    try {
      const result = await bucket.getObjects(params);
      return result.objects as E[];
    } catch (e) {
      console.error(e);
      return [] as E[];
    }
  };

  export const getMedia = async (params: GetMediaParams) => {
    try {
      return await bucket.getMedia(params);
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };
}
