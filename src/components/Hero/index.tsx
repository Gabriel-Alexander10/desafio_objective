/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import { IHero } from '../../types/HeroesTypes';

import { HeroItem, HeroAvatarWrapper } from "./styles";

export function Hero({ name, series, events, thumbnail, id }: IHero) {
  const thumbURL = thumbnail.path + "/standard_medium." + thumbnail.extension;
  const size = useWindowDimensions();
  
  return (
    <HeroItem>
      <td>
      <Link href={`/details/${id}`}>
        <a>
          <HeroAvatarWrapper>
            <img src={thumbURL} alt={name} />
          </HeroAvatarWrapper>
          <strong>{name}</strong>
        </a>
        </Link>
      </td>

      {size.width >= 700 && (
        <>
          <td>
            {series.length > 0 ? series.map((serie) => {

              return (
                <span key={serie.name + serie.resourceURI}>{serie.name}</span>
              )
            }): (
              <span>Esse herói não possui séries para serem listadas</span>
            )}
          </td>

          <td>
          {events.length > 0 ? events.map((event) => {
            return (
              <span key={event.name + event.resourceURI}>{event.name}</span>
            )
          }): (
            <span>Esse herói não possui séries para serem listadas</span>
          )}
          </td>
        </>
      )}

      
    </HeroItem>
  )
}