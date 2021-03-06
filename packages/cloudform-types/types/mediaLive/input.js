"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class InputVpcRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputVpcRequest = InputVpcRequest;
class InputSourceRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputSourceRequest = InputSourceRequest;
class InputDestinationRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputDestinationRequest = InputDestinationRequest;
class MediaConnectFlowRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MediaConnectFlowRequest = MediaConnectFlowRequest;
class Input extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MediaLive::Input', properties || {});
    }
}
exports.default = Input;
Input.InputVpcRequest = InputVpcRequest;
Input.InputSourceRequest = InputSourceRequest;
Input.InputDestinationRequest = InputDestinationRequest;
Input.MediaConnectFlowRequest = MediaConnectFlowRequest;
