export interface User {
    id:        number;
    userId:    number;
    login:     string;
    name:      string;
    avataUrl: string;
    role:      string;
    responses: Response[];
}

export interface Response {
    id:       number;
    user:     string;
    response: string;
    date:     string;
}
