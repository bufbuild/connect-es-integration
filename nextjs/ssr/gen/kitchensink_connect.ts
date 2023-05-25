// @generated by protoc-gen-connect-es v0.9.0 with parameter "target=ts"
// @generated from file kitchensink.proto (syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { KitchenSinkRequest, KitchenSinkResponse } from "./kitchensink_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service KitchenSinkService
 */
export const KitchenSinkService = {
  typeName: "KitchenSinkService",
  methods: {
    /**
     * @generated from rpc KitchenSinkService.GetKitchenSink
     */
    getKitchenSink: {
      name: "GetKitchenSink",
      I: KitchenSinkRequest,
      O: KitchenSinkResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

