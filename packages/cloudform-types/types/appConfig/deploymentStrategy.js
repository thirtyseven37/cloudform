"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tags = void 0;
const resource_1 = require("../resource");
class Tags {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Tags = Tags;
class DeploymentStrategy extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppConfig::DeploymentStrategy', properties);
    }
}
exports.default = DeploymentStrategy;
DeploymentStrategy.Tags = Tags;
