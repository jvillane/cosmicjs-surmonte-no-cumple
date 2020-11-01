import * as Cosmic from "cosmicjs";

interface GetObjectsParams {
  type?: string
  limit?: number
  skip?: number
  props?: string // 'slug,title,content' get only what you need
  sort?: string // optional, if sort is needed. (use one option from 'created_at,-created_at,modified_at,-modified_at,random')
  locale?: string // optional, if localization set on Objects
  status?: string // optional, if need to get draft Objects
}

interface GetMediaParams {
  folder: string
  props?: string // 'imgix_url' get only what you need
  limit?: number
}

export namespace CosmicService {
  const bucket = Cosmic().bucket({
    slug: process.env.REACT_APP_COSMIC_BUCKET,
    read_key: process.env.REACT_APP_COSMIC_READ_KEY
  });

  export const getObject = async (slug: string) => {
    try {
      return await bucket.getObject({slug}).object;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  export const getObjectTypes = async () => {
    try{
      const result = await bucket.getObjectTypes();
      return result.object_types;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  export const getObjects = async (params?: GetObjectsParams) => {
    try{
      const result = await bucket.getObjects(params);
      return result.objects;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  export const getMedia = async (params: GetMediaParams) => {
    try{
      return await bucket.getMedia(params);
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };
}

