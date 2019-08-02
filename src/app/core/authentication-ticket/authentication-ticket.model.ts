import { UserRoleEnum } from './user-role.enum';

export class AuthenticationTicketModel {
    public accessToken: string;
    public clientId: string;
    public expires: Date;
    public expiresIn: number;
    public issued: Date;
    public redirectUrl: string;
    public refreshToken: string;
    public role: UserRoleEnum;
    public tokenType: string;
    public userId: number;
    public userName: string;

    constructor(obj?: Partial<AuthenticationTicketModel>) {
        this.accessToken = obj && obj.accessToken || '';
        this.clientId = obj && obj.clientId || '';
        this.expires = obj && new Date(obj.expires) || new Date();
        this.expiresIn = obj && obj.expiresIn || 0;
        this.issued = obj && new Date(obj.issued) || new Date();
        this.redirectUrl = obj && obj.redirectUrl || null;
        this.refreshToken = obj && obj.refreshToken || '';
        this.role = obj && obj.role || UserRoleEnum.UnknownUser;
        this.tokenType = obj && obj.tokenType || '';
        this.userId = obj && obj.userId || null;
        this.userName = obj && obj.userName || '';
    }
}
