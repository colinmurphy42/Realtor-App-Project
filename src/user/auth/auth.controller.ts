import {Controller, Post, Body} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {SignUpDto} from "../dtos/auth.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {
    }
    @Post('/signUp')
    signup(
        @Body() body: SignUpDto
    ){
        this.authService.signup();
    }
}
