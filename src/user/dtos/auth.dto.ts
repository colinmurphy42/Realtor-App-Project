import {IsString, IsNotEmpty, IsEmail, MinLength, Matches} from 'class-validator'
export class SignUpDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @Matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, {message:"Phone is incorrect"})
    phone_number: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    password: string;
}
