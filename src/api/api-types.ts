type tTypeMethod =
  | 'getVehicle'
  | 'getMainGroup'
  | 'getNodes'
  | 'getNode'
  | 'getImage';

export type tQData = {
  method: tTypeMethod;
  vehicleId: string;
  vin?: string;
  data?: any;
};

export type tTableHeader = {
  id: string;
  value: string;
};
export type tTableData = {
  value: string;
  number?: string;
  name?: string;
  flagNotTranslate?: boolean;
};
type tTableItem = {
  [key: string]: tTableData;
};
export type tTable = {
  header: tTableHeader[];
  data: tTableItem[];
  flag_hide_header?: boolean;
  title?: string;
  q?: string;
};

export type tAttributesMain = {
  label: string;
  value: string;
  id: string;
};
export type tVehicle = {
  vin: string;
  vehicleId: string;
  name: string;
  nameFull: string;
  nameShort: string;
  modelName: string;
  qMainGroup: string;
  brandId: string;
  brandName: string;
  attributesMain: tAttributesMain[];
  attributesAdv: tTable[];
};

export type tResult = {
  resultCode: number;
  vehicle?: tVehicle;
};

export interface iQService {
  run();
}
