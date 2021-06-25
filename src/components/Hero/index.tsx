/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import { IHero } from '../../types/HeroesTypes';

import { HeroItem, HeroAvatarWrapper } from "./styles";

export function Hero({ name, series, events, thumbnail }: IHero) {
  const thumbURL = thumbnail.path + "/standard_medium." + thumbnail.extension;

  console.log(thumbURL);
  
  return (
    <HeroItem>
      <td>
        <div>
          <HeroAvatarWrapper>
            <img src={thumbURL} alt={name} />
          </HeroAvatarWrapper>
          <strong>{name}</strong>
        </div>
      </td>

      <td>
        {series.items.length > 0 ? series.items.map((serie, idx) => {
          if (idx > 4) {
            return;
          }

          return (
            <span key={serie.name}>{serie.name}</span>
          )
        }): (
          <span>Esse herói não possui séries para serem listadas</span>
        )}
      </td>

      <td>
      {events.items.length > 0 ? events.items.map((event, idx) => {
        if (idx > 4) {
          return;
        }

        return (
          <span key={event.name}>{event.name}</span>
        )
      }): (
        <span>Esse herói não possui séries para serem listadas</span>
      )}
      </td>
    </HeroItem>
  )
}