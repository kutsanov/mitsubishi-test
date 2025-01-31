import { Injectable } from '@nestjs/common';
import { iQService } from '@api/api-types';

@Injectable()
export class QNodeService implements iQService {
  async run() {
    throw new Error('Method not implemented.');
  }
}
