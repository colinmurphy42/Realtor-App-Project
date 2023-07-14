import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";

interface SignUpParams {
    name: string,
    email: string,
    phone_number: string,
    password: string
}

@Injectable()
export class AuthService {
    constructor(private readonly prismaService: PrismaService) {}
    async signup({email}: SignUpParams){
        const userExists = await this.prismaService.user.findUnique({
            where: {
                email
            }
        })
        console.log(userExists)
    }
}
