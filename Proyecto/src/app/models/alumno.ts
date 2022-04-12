export class Alumno {
    public get fecInscrip(): Date {
        return this._fecInscrip!;
    }
    public set fecInscrip(value: Date) {
        this._fecInscrip = value;
    }
    public get telefono(): string {
        return this._telefono!;
    }
    public set telefono(value: string) {
        this._telefono = value;
    }
    public get direccion(): string {
        return this._direccion!;
    }
    public set direccion(value: string) {
        this._direccion = value;
    }
    public get mail(): string {
        return this._mail!;
    }
    public set mail(value: string) {
        this._mail = value;
    }
    public get fecNacimiento(): Date {
        return this._fecNacimiento!;
    }
    public set fecNacimiento(value: Date) {
        this._fecNacimiento = value;
    }
    public get apellido(): string {
        return this._apellido!;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }
    public get nombre(): string {
        return this._nombre!;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get id(): number {
        return this._id!;
    }
    public set id(value: number) {
        this._id = value;
    }
    constructor (private _id?: number, 
                 private _nombre?: string, 
                 private _apellido?: string, 
                 private _fecNacimiento?: Date,
                 private _mail?: string,
                 private _direccion?: string,
                 private _telefono?: string,
                 private _fecInscrip?: Date
        ){}

    
}

