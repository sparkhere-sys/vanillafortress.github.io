export type RegionKey = "eu" | "na" | "sa" | "asia" | "oce" | "af" | "me";

export type RegionDefinition = {
  key: RegionKey;
  label: string;
};

export type ServerLinks = {
  steam?: string;
  discord?: string;
  website?: string;
};

export type ServerDefinition = {
  name: string;
  region: RegionKey;
  ip: string;
  country: string;
  is_tf2c?: boolean | false;
};

export type CommunityDefinition = {
  name: string;
  links?: ServerLinks;
  servers: ServerDefinition[];
};

export type Server = ServerDefinition; // where is this ever used? this is just an alias. -spark

export type ServerGroup = {
  name: string;
  links?: ServerLinks;
  servers: Server[];
};

export type ServerRegion = RegionDefinition & {
  groups: ServerGroup[];
  serverCount: number;
};
