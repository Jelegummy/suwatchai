export type RegisterArgs = {
    firstName: string
    lastName: string
    email: string
    password: string
}

export type LoginArgs = {
    email: string
    password: string
}

export type User = {
    id: string
    email: string
    firstName: string
    lastName: string
}

export type UpdateUserArgs = {
    firstName?: string
    lastName?: string
}
export type UpdatePasswordArgs = {
    oldpassword: string
    newPassword: string
}