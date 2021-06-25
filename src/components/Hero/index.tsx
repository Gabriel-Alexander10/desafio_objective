import Image from 'next/image';

import { HeroItem } from "./styles";

import testImg from '../../assets/teste.png';

export function Hero() {
  return (
    <HeroItem>
      <td>
        <div>
          <Image src={testImg} alt="" />
          <strong>Hero</strong>
        </div>
      </td>

      <td>
        Iron Man: Armor Wars Old Man Hawkeye Fantastic Four Visionaries: Walter Simonson Vol. 1
      </td>

      <td>
        AvX Demon in the Bottle Dynasty M
      </td>
    </HeroItem>
  )
}