import React, {useEffect, useState} from "react";
import {Phrase} from "../service/cosmic.model";
import {CosmicService} from "../service/cosmic.service";
import {GridList, GridListTile, GridListTileBar} from "@material-ui/core";

export default function Home() {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  useEffect(() => {
    CosmicService.getObjects({type: 'phrases'})
      .then(objects => {
        console.log(objects)
        if(objects) {
          const phrases = objects as Phrase[];
          setPhrases(phrases.sort((a,b) => a.order - b.order));
        }
      });
  }, []);

  return (
    <>
      <p>Conoce como opera SurMonte Inmobiliaria directamente de quienes han interactuado y han sido clientes de ellos</p>
      <GridList cellHeight={400} spacing={30}>
        {phrases.map(phrase =>
          <GridListTile key={phrase._id}>
            <img src={phrase.metadata.image_1.imgix_url as string} alt="imagen"/>
            <GridListTileBar
              title={`${phrase.title} - ${phrase.metadata.author.title}`}
              titlePosition="top"
            />
          </GridListTile>
        )}
      </GridList>
    </>
  );
}
