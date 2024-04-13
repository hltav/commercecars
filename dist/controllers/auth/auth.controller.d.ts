import { AuthService } from 'src/services/auth/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(credentials: {
        username: string;
        password: string;
    }): Promise<{
        user: {
            token: string;
        };
    }>;
    getProfile(req: any): any;
}
