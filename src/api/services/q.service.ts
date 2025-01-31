import { BadRequestException, Injectable } from "@nestjs/common";
import { QGroupsService } from '@api/services/q/q-groups.service';
import { QNodesService } from '@api/services/q/q-nodes.service';
import { QNodeService } from '@api/services/q/q-node.service';
import { QCreatorService } from "@api/services/q-creator.service";
import { iQService } from "@api/api-types";

@Injectable()
export class QService {
  constructor(
    private readonly qCreatorService: QCreatorService,
    private readonly qGroupsService: QGroupsService,
    private readonly qNodesService: QNodesService,
    private readonly qNodeService: QNodeService,
  ) {}

  async run(q: string) {
    const qData = this.qCreatorService.readQ(q);
    const method = qData.method;
    let model: iQService;
    switch (method) {
      case 'getNode': model = this.qNodeService; break;
      case 'getNodes': model = this.qNodesService; break;
      case 'getMainGroup': model = this.qGroupsService; break;
    }
    if (!model) {
      throw new BadRequestException('Не определена модель');
    }

    const ret = await model.run();

    return ret;
  }
}
