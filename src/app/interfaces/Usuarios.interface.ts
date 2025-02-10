export interface UsuariosData {
    message: string;
    data:       Usuarios[];
    pagination: Pagination;
}

export interface Usuarios{
    id:             number;
    role:           string;
    Name:           string;
    ApellidoP:      string;
    ApellidoM:      string;
    username:       string;
    password:       string;
    status:         string;
    created_at:     Date;
    updated_at:     Date;
    deleted_at:     null;
    canExportExcel: boolean;
    canExportPdf:   boolean;
    canCreateUser:  boolean;
}

export interface Pagination {
    page:         number;
    pageSize:     number;
    totalRecords: number;
    totalPages:   number;
}
