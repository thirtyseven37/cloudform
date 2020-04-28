/* Generated from: 
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class InstanceBlockDeviceMapping {
    DeviceName?: Value<string>
    VirtualName?: Value<string>
    NoDevice?: Value<string>
    Ebs?: EbsInstanceBlockDeviceSpecification

    constructor(properties: InstanceBlockDeviceMapping) {
        Object.assign(this, properties)
    }
}

export class ComponentConfiguration {
    ComponentArn?: Value<string>

    constructor(properties: ComponentConfiguration) {
        Object.assign(this, properties)
    }
}

export class EbsInstanceBlockDeviceSpecification {
    Encrypted?: Value<boolean>
    DeleteOnTermination?: Value<boolean>
    Iops?: Value<number>
    KmsKeyId?: Value<string>
    SnapshotId?: Value<string>
    VolumeSize?: Value<number>
    VolumeType?: Value<string>

    constructor(properties: EbsInstanceBlockDeviceSpecification) {
        Object.assign(this, properties)
    }
}

export interface ImageRecipeProperties {
    Name: Value<string>
    Description?: Value<string>
    Version: Value<string>
    Components: List<ComponentConfiguration>
    BlockDeviceMappings?: List<InstanceBlockDeviceMapping>
    ParentImage: Value<string>
    Tags?: {[key: string]: Value<string>}
}

export default class ImageRecipe extends ResourceBase<ImageRecipeProperties> {
    static InstanceBlockDeviceMapping = InstanceBlockDeviceMapping
    static ComponentConfiguration = ComponentConfiguration
    static EbsInstanceBlockDeviceSpecification = EbsInstanceBlockDeviceSpecification

    constructor(properties: ImageRecipeProperties) {
        super('AWS::ImageBuilder::ImageRecipe', properties)
    }
}