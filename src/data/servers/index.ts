import { serverDefinitions } from "./definitions";
import { regions } from "./regions";
import type { RegionKey, Server, ServerGroup, ServerRegion } from "./core/types";

export type {
  CommunityDefinition,
  RegionDefinition,
  RegionKey,
  Server,
  ServerDefinition,
  ServerGroup,
  ServerLinks,
  ServerRegion,
} from "./core/types";

export { serverDefinitions } from "./definitions";

const groupsForRegion = (region: RegionKey, isTF2C = false): ServerGroup[] =>
  serverDefinitions.flatMap((community) => {
    const servers = community.servers.filter(
      (server) =>
        server.region === region &&
        (isTF2C ? server.is_tf2c === true : server.is_tf2c !== true),
    );

    return servers.length > 0
      ? [{ name: community.name, links: community.links, servers }]
      : [];
  });

const getServerRegions = (isTF2C = false): ServerRegion[] =>
  regions
    .map((region) => {
      const groups = groupsForRegion(region.key, isTF2C);

      return {
        ...region,
        groups,
        serverCount: groups.reduce(
          (total, group) => total + group.servers.length,
          0,
        ),
      };
    })
    .filter((region) => region.serverCount > 0);

export const serverRegions = getServerRegions();
export const tf2cServerRegions = getServerRegions(true);