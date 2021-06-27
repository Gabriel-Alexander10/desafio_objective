import { List, ListRowRenderer, AutoSizer } from 'react-virtualized';

import { IconType } from 'react-icons/lib';
import { MdMovie, MdBook, MdRestore, MdEventAvailable } from 'react-icons/md';
import { Container, Infolist, ListItem } from './styles';
import { IHeroItemInfo } from '../../types/HeroesTypes';

interface IHeroAdventuresProps {
  title:  "comics" | "series" | "stories" | "events";
  infos: IHeroItemInfo;
}


export function HeroAdventures({ title, infos }: IHeroAdventuresProps) {
  const icons = {
    "comics": MdBook,
    "stories": MdRestore,
    "series": MdMovie,
    "events": MdEventAvailable
  }

  const Icon: IconType = !!title ? icons[title.toLowerCase()] : null;

  const rowRenderer: ListRowRenderer = ({ key, index, style }) => {
    return (
      <div key={key} style={style}>
        <ListItem>
          <Icon size={32}  />

          <span>
            <a 
              href={infos[index]?.resourceURI}
              target="_blank"
              rel="noreferrer"
            >
              {infos[index].name}
            </a>
          </span>
        </ListItem>
      </div>
    );
  }

  return (
    <Container>
      <h2>{title.replace(/^\w/, (c) => c.toUpperCase())}</h2>

      <Infolist>
        { infos.length > 0 ? (
           <AutoSizer>
           {({height, width}) => (
             <List
              height={height}
              rowHeight={96}
              width={width}
              overscanRowCount={3}
              rowCount={infos.length}
              rowRenderer={rowRenderer}
            />
           )}
         </AutoSizer>
          
        ) : (
          <p>Esse herói não participou <br /> de {title}</p>
        )}
      </Infolist>

    </Container>
  )
}