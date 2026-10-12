import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Nurhaci',
      description:
        'Nurhaci (14 May 1559 – 30 September 1626), also known by his temple name Emperor Taizu of Qing, was the founding khan of the Jurchen-led Later Jin dynasty',
    },
    {
      id: randomUUID(),
      name: 'Hàn Wŭdì',
      description:
        'Emperor Wu of Han (156 – 29 March 87 BC) (Chinese: 漢武帝; pinyin: Hàn Wŭdì), personal name Liu Che (Chinese: 劉徹; pinyin: Liú Chè) and courtesy name Tong (Chinese: 通; pinyin: Tōng), was the seventh emperor of the Han dynasty from 141 to 87 BC.',
    },
    {
      id: randomUUID(),
      name: 'Tang Taizong',
      description:
        'Emperor Taizong of Tang (28 January 598 – 10 July 649), previously Prince of Qin, personal name Li Shimin, was the second emperor of the Tang dynasty of China, ruling from 626 to 649. He is traditionally regarded as a co-founder of the dynasty for his role in encouraging his father Li Yuan (Emperor Gaozu) to rebel against the Sui dynasty at Jinyang in 617.',
    },
    {
      id: randomUUID(),
      name: 'Emperor Gao',
      description:
        'Emperor Gaozu of Han[c] (256 or 247 – 1 June 195 BC),[d] personal name Liu Bang, was the founder and first emperor of the Han dynasty.',
    },
  ];
  findAll() {
    return this.profiles;
  }
  findOne(id: string) {
    return this.profiles.find((profile) => profile.id === id)!;
  }
}
