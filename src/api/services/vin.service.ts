import { Injectable } from '@nestjs/common';
import { AxiosService } from "@core/axios.service";
import { CoreService } from "@core/core.service";
import { QCreatorService } from "@api/services/q-creator.service";
import { BaseApiService } from "@api/services/base-api.service";
import { tResult, tVehicle } from "@api/api-types";

@Injectable()
export class VinService {
  constructor(
    private readonly baseApiService: BaseApiService,
    private readonly axiosService: AxiosService,
    private readonly coreService: CoreService,
    private readonly qCreatorService: QCreatorService,
  ) {}
  async run(vin: string): Promise<tResult> {

    const url = `/vehicle-data/${vin}`
    const response = await this.axiosService.get(
      this.baseApiService.urlCatalog(url),
      { flagException: false },
    );
    const responseVehicle = response?.data ?? null;
    if (responseVehicle === null) {
      return {
        resultCode: this.baseApiService.RESULT_CODE_VIN_NOT_FOUND,
      };
    }

    let vehicle: tVehicle;

    return {
      resultCode: this.baseApiService.RESULT_CODE_OK,
      vehicle,
    };
  }
}
