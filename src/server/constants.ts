import { INTERNAL_PREFIX } from "../runtime/utils.ts";
import { ASSET_PATH_PREFIX, hasAssetPrefix } from "./asset_path.ts";
import { BUILD_ID } from "./build_id.ts";

export const DEV_CLIENT_URL = `${INTERNAL_PREFIX}/fresh_dev_client.js`;
export const ALIVE_URL = `${INTERNAL_PREFIX}/alive`;
export const JS_PREFIX = `/js`;
export const DEBUG = !Deno.env.get("DENO_DEPLOYMENT_ID");

export function bundleAssetUrl(path: string) {
  if (hasAssetPrefix()) {
    return `${ASSET_PATH_PREFIX}${INTERNAL_PREFIX}${JS_PREFIX}${path}`;
  }
  return `${INTERNAL_PREFIX}${JS_PREFIX}/${BUILD_ID}${path}`;
}
