export interface Documentation {
  title: string;
  endpoint: string;
  description: string;
  method: "GET" | "POST";
  Params: Param[];
  Note: string;
}
export interface Param {
  id: number;
  title: string;
  param: string;
  description: string;
  enums?: string[];
}
