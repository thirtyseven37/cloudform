import Group_ from './group';
import Policy_ from './policy';
import ServiceLinkedRole_ from './serviceLinkedRole';
import AccessKey_ from './accessKey';
import User_ from './user';
import Role_ from './role';
import UserToGroupAddition_ from './userToGroupAddition';
import InstanceProfile_ from './instanceProfile';
import ManagedPolicy_ from './managedPolicy';
export declare namespace IAM {
    const Group: typeof Group_;
    const Policy: typeof Policy_;
    const ServiceLinkedRole: typeof ServiceLinkedRole_;
    const AccessKey: typeof AccessKey_;
    const User: typeof User_;
    const Role: typeof Role_;
    const UserToGroupAddition: typeof UserToGroupAddition_;
    const InstanceProfile: typeof InstanceProfile_;
    const ManagedPolicy: typeof ManagedPolicy_;
    type Group = Group_;
    type Policy = Policy_;
    type ServiceLinkedRole = ServiceLinkedRole_;
    type AccessKey = AccessKey_;
    type User = User_;
    type Role = Role_;
    type UserToGroupAddition = UserToGroupAddition_;
    type InstanceProfile = InstanceProfile_;
    type ManagedPolicy = ManagedPolicy_;
}