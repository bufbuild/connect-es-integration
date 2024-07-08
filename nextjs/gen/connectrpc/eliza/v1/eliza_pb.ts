// Copyright 2022-2023 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.0.0-beta.2 with parameter "target=ts,import_extension=none"
// @generated from file connectrpc/eliza/v1/eliza.proto (package connectrpc.eliza.v1, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage, GenDescService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file connectrpc/eliza/v1/eliza.proto.
 */
export const file_connectrpc_eliza_v1_eliza: GenDescFile = /*@__PURE__*/
  fileDesc("Ch9jb25uZWN0cnBjL2VsaXphL3YxL2VsaXphLnByb3RvEhNjb25uZWN0cnBjLmVsaXphLnYxIh4KClNheVJlcXVlc3QSEAoIc2VudGVuY2UYASABKAkiHwoLU2F5UmVzcG9uc2USEAoIc2VudGVuY2UYASABKAkiIwoPQ29udmVyc2VSZXF1ZXN0EhAKCHNlbnRlbmNlGAEgASgJIiQKEENvbnZlcnNlUmVzcG9uc2USEAoIc2VudGVuY2UYASABKAkiIAoQSW50cm9kdWNlUmVxdWVzdBIMCgRuYW1lGAEgASgJIiUKEUludHJvZHVjZVJlc3BvbnNlEhAKCHNlbnRlbmNlGAEgASgJMpwCCgxFbGl6YVNlcnZpY2USTQoDU2F5Eh8uY29ubmVjdHJwYy5lbGl6YS52MS5TYXlSZXF1ZXN0GiAuY29ubmVjdHJwYy5lbGl6YS52MS5TYXlSZXNwb25zZSIDkAIBEl0KCENvbnZlcnNlEiQuY29ubmVjdHJwYy5lbGl6YS52MS5Db252ZXJzZVJlcXVlc3QaJS5jb25uZWN0cnBjLmVsaXphLnYxLkNvbnZlcnNlUmVzcG9uc2UiACgBMAESXgoJSW50cm9kdWNlEiUuY29ubmVjdHJwYy5lbGl6YS52MS5JbnRyb2R1Y2VSZXF1ZXN0GiYuY29ubmVjdHJwYy5lbGl6YS52MS5JbnRyb2R1Y2VSZXNwb25zZSIAMAFiBnByb3RvMw");

/**
 * SayRequest is a single-sentence request.
 *
 * @generated from message connectrpc.eliza.v1.SayRequest
 */
export type SayRequest = Message<"connectrpc.eliza.v1.SayRequest"> & {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;
};

/**
 * Describes the message connectrpc.eliza.v1.SayRequest.
 * Use `create(SayRequestSchema)` to create a new message.
 */
export const SayRequestSchema: GenDescMessage<SayRequest> = /*@__PURE__*/
  messageDesc(file_connectrpc_eliza_v1_eliza, 0);

/**
 * SayResponse is a single-sentence response.
 *
 * @generated from message connectrpc.eliza.v1.SayResponse
 */
export type SayResponse = Message<"connectrpc.eliza.v1.SayResponse"> & {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;
};

/**
 * Describes the message connectrpc.eliza.v1.SayResponse.
 * Use `create(SayResponseSchema)` to create a new message.
 */
export const SayResponseSchema: GenDescMessage<SayResponse> = /*@__PURE__*/
  messageDesc(file_connectrpc_eliza_v1_eliza, 1);

/**
 * ConverseRequest is a single sentence request sent as part of a
 * back-and-forth conversation.
 *
 * @generated from message connectrpc.eliza.v1.ConverseRequest
 */
export type ConverseRequest = Message<"connectrpc.eliza.v1.ConverseRequest"> & {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;
};

/**
 * Describes the message connectrpc.eliza.v1.ConverseRequest.
 * Use `create(ConverseRequestSchema)` to create a new message.
 */
export const ConverseRequestSchema: GenDescMessage<ConverseRequest> = /*@__PURE__*/
  messageDesc(file_connectrpc_eliza_v1_eliza, 2);

/**
 * ConverseResponse is a single sentence response sent in answer to a
 * ConverseRequest.
 *
 * @generated from message connectrpc.eliza.v1.ConverseResponse
 */
export type ConverseResponse = Message<"connectrpc.eliza.v1.ConverseResponse"> & {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;
};

/**
 * Describes the message connectrpc.eliza.v1.ConverseResponse.
 * Use `create(ConverseResponseSchema)` to create a new message.
 */
export const ConverseResponseSchema: GenDescMessage<ConverseResponse> = /*@__PURE__*/
  messageDesc(file_connectrpc_eliza_v1_eliza, 3);

/**
 * IntroduceRequest asks Eliza to introduce itself to the named user.
 *
 * @generated from message connectrpc.eliza.v1.IntroduceRequest
 */
export type IntroduceRequest = Message<"connectrpc.eliza.v1.IntroduceRequest"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message connectrpc.eliza.v1.IntroduceRequest.
 * Use `create(IntroduceRequestSchema)` to create a new message.
 */
export const IntroduceRequestSchema: GenDescMessage<IntroduceRequest> = /*@__PURE__*/
  messageDesc(file_connectrpc_eliza_v1_eliza, 4);

/**
 * IntroduceResponse is one sentence of Eliza's introductory monologue.
 *
 * @generated from message connectrpc.eliza.v1.IntroduceResponse
 */
export type IntroduceResponse = Message<"connectrpc.eliza.v1.IntroduceResponse"> & {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;
};

/**
 * Describes the message connectrpc.eliza.v1.IntroduceResponse.
 * Use `create(IntroduceResponseSchema)` to create a new message.
 */
export const IntroduceResponseSchema: GenDescMessage<IntroduceResponse> = /*@__PURE__*/
  messageDesc(file_connectrpc_eliza_v1_eliza, 5);

/**
 * ElizaService provides a way to talk to Eliza, a port of the DOCTOR script
 * for Joseph Weizenbaum's original ELIZA program. Created in the mid-1960s at
 * the MIT Artificial Intelligence Laboratory, ELIZA demonstrates the
 * superficiality of human-computer communication. DOCTOR simulates a
 * psychotherapist, and is commonly found as an Easter egg in emacs
 * distributions.
 *
 * @generated from service connectrpc.eliza.v1.ElizaService
 */
export const ElizaService: GenDescService<{
  /**
   * Say is a unary RPC. Eliza responds to the prompt with a single sentence.
   *
   * @generated from rpc connectrpc.eliza.v1.ElizaService.Say
   */
  say: {
    methodKind: "unary";
    input: typeof SayRequestSchema;
    output: typeof SayResponseSchema;
  },
  /**
   * Converse is a bidirectional RPC. The caller may exchange multiple
   * back-and-forth messages with Eliza over a long-lived connection. Eliza
   * responds to each ConverseRequest with a ConverseResponse.
   *
   * @generated from rpc connectrpc.eliza.v1.ElizaService.Converse
   */
  converse: {
    methodKind: "bidi_streaming";
    input: typeof ConverseRequestSchema;
    output: typeof ConverseResponseSchema;
  },
  /**
   * Introduce is a server streaming RPC. Given the caller's name, Eliza
   * returns a stream of sentences to introduce itself.
   *
   * @generated from rpc connectrpc.eliza.v1.ElizaService.Introduce
   */
  introduce: {
    methodKind: "server_streaming";
    input: typeof IntroduceRequestSchema;
    output: typeof IntroduceResponseSchema;
  },
}
> = /*@__PURE__*/
  serviceDesc(file_connectrpc_eliza_v1_eliza, 0);

