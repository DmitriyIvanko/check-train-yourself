import { MapperModel } from '../utils/mapper.model';
import { AuthenticationTicketModel } from './authentication-ticket.model';
import { UserRoleEnum } from './user-role.enum';

export class AuthenticationTicketMapper extends MapperModel<AuthenticationTicketModel> {
    public transformToClient(response: any): AuthenticationTicketModel {
        return new AuthenticationTicketModel({
            accessToken: response.access_token,
            clientId: response['as:client_id'],
            expires: new Date(response['.expires']),
            expiresIn: response.expires_in,
            issued: new Date(response['.issued']),
            refreshToken: response['refresh_token'],
            role: response.role as UserRoleEnum,
            tokenType: response.token_type,
            userId: +response.userId,
            userName: response.userName,
        });
    }
}
