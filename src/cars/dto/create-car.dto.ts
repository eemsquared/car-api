import { IsNotEmpty, IsString, Matches } from "class-validator"

export class CreateCarDto {
    @IsString()
    @IsNotEmpty()
    make: string

    @IsString()
    @IsNotEmpty()
    model: string

    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{4}$/, { message: "year must be of YYYY format" })
    year: string
}
