import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class AppService {
  @Interval(1000)
  async handleInterval() {
    const res = await fetch('http://springboot/hello/world');
    const data = await res.json();

    console.log(data);
  }
}
