// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file payload.proto (syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file payload.proto.
 */
export const file_payload: GenFile = /*@__PURE__*/
  fileDesc("Cg1wYXlsb2FkLnByb3RvIksKB1BheWxvYWQSCwoDc3RyGAEgASgJEg4KBmRvdWJsZRgCIAEoARINCgVieXRlcxgDIAEoDBIUCgxsYXJnZV9udW1iZXIYBCABKARiBnByb3RvMw");

/**
 * @generated from message Payload
 */
export type Payload = Message<"Payload"> & {
  /**
   * @generated from field: string str = 1;
   */
  str: string;

  /**
   * @generated from field: double double = 2;
   */
  double: number;

  /**
   * @generated from field: bytes bytes = 3;
   */
  bytes: Uint8Array;

  /**
   * 64-bit integers use BigInt in ECMAScript.
   * Set the field option `[jstype = JS_STRING]` to use String instead.
   *
   * @generated from field: uint64 large_number = 4;
   */
  largeNumber: bigint;
};

/**
 * Describes the message Payload.
 * Use `create(PayloadSchema)` to create a new message.
 */
export const PayloadSchema: GenMessage<Payload> = /*@__PURE__*/
  messageDesc(file_payload, 0);

