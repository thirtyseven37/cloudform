/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface DBClusterProperties {
    StorageEncrypted?: Value<boolean>
    EngineVersion?: Value<string>
    KmsKeyId?: Value<string>
    AvailabilityZones?: List<Value<string>>
    SnapshotIdentifier?: Value<string>
    Port?: Value<number>
    DBClusterIdentifier?: Value<string>
    PreferredMaintenanceWindow?: Value<string>
    DBSubnetGroupName?: Value<string>
    PreferredBackupWindow?: Value<string>
    MasterUserPassword?: Value<string>
    VpcSecurityGroupIds?: List<Value<string>>
    MasterUsername?: Value<string>
    DBClusterParameterGroupName?: Value<string>
    BackupRetentionPeriod?: Value<number>
    Tags?: List<ResourceTag>
}

export default class DBCluster extends ResourceBase<DBClusterProperties> {


    constructor(properties?: DBClusterProperties) {
        super('AWS::DocDB::DBCluster', properties || {})
    }
}