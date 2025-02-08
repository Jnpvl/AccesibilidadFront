export interface PermisionarioData {
    permisionario: Permisionario;
    permisos:      Permisos[];
}

export interface Permisionario {
    PermisionarioId:    number;
    NoExpediente:       string;
    TipoPermisionario:  string;
    CURP:               null;
    RFC:                null;
    ApellidoPaterno:    string;
    ApellidoMaterno:    string;
    Nombre:             string;
    Empresa:            null;
    RepresentanteLegal: null;
    Direccion:          string;
    EntreCalles:        null;
    Colonia:            string;
    CodigoPostal:       null;
    EstadoId:           null;
    MunicipioId:        null;
    LocalidadId:        null;
    Telefono1:          null;
    Telefono2:          null;
    CorreoElectronico:  null;
    Status:             boolean;
    InsertDate:         Date;
    InsertBy:           string;
    InsertMAC:          null;
    UpdateDate:         Date;
    UpdateBy:           null;
    UpdateMAC:          null;
}

export interface Permisos {
    PermisionarioId: number;
    PermisoId:       number;
    TipoDePermiso:   string;
    NoExpediente:    string;
    Modalidad:       string;
    Sistema:         string;
    Permisionario:   string;
    NoFolio:         number;
    NoOficio:        string;
    FechaInicio:     string;
    NoDias:          number;
    FechaTermino:    string;
    Municipio:       string;
    Terminos:        string;
    Marca:           string;
    Modelo:          string;
    NoSerie:         string;
    NoMotor:         string;
    Capacidad:       string;
    NoDePlaca:       null;
    TipoDeUnidad:    string;
    Holograma:       number;
    Director:        string;
    Pie:             string;
    InsertDate:      Date;
    InsertBy:        string;
    InsertMAC:       null;
    UpdateDate:      Date;
    UpdateBy:        null;
    UpdateMAC:       null;
}
