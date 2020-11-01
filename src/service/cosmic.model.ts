export interface Metafield {
  children: any
  id: string
  key: string
  object: object
  object_type: string
  title: string
  type: string
  value: string
}

export interface CosmicObject<Props> {
  bucket: string
  content: string
  created: string
  created_at: string
  created_by: string
  metadata: Props
  metafields: Metafield[]
  modified_at: string
  modified_by: string
  order: number
  publish_at: null
  published_at: string
  slug: string
  status: string
  thumbnail: string
  title: string
  type_slug: string
  unpublish_at: any | null
  _id: string
}

export interface CosmicImage {
  imgix_url: string | null
  url: string | null
}

export interface PhraseProps {
  author: {
    content: string
    slug: string
    title: string
    type_slug: "authors"
  }
  image_1: CosmicImage
  image_2: CosmicImage
  image_3: CosmicImage
}

export interface Phrase extends CosmicObject<PhraseProps> {

}
