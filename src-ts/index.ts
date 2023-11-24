import { Abi } from 'abitype'
import type { TargetDeploymentRecords } from "gemforge/build/shared/chain"

export const deployedAddresses =
  require("../gemforge.deployments.json") as TargetDeploymentRecords

export const abi = require("../src/generated/abi.json") as Abi
