import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CosmicService } from "../service/Cosmic.service";
import { Phrase } from "../service/Cosmic.model";

export default function Home() {
  
  const [phrases, setPhrases] = useState<Phrase[]>();
  
  useEffect(() => {
    CosmicService.getObjects<Phrase>({ type: 'phrases' })
      .then((phrases) => {
        //console.log('phrases', phrases);
        setPhrases(phrases);
      });
  }, [])
  
  return (
    <div>
      {!phrases && <>Cargando...</>}
      {phrases && (
        <ul>
          {phrases.map(phrase => (
            <li key={phrase._id}>
              <h1>{phrase.title}</h1>
              <p dangerouslySetInnerHTML={{__html: phrase.content}}></p>
              <h2>By {phrase.metadata.author.title} - {phrase.metadata.author.metadata.location}</h2>
              {phrase.metadata.images && phrase.metadata.images.map((image, index) => (
                <Image key={`${phrase._id}-img-${index}`} src={image.image.url} width={200} height={200}/>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
