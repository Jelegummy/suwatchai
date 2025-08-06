//TODO :
import { getSession } from 'next-auth/react'

import { ENDPOINT, HttpStatus, fetchers } from '@/utils'

import { LoginArgs, RegisterArgs, UpdateUserArgs, User } from './types'

export const register = async (args: RegisterArgs) => {
    const res = await fetchers.Post<{ accessToken: string }>(
        `${ENDPOINT}/user/public/register`,
        { data: args },
    )
    if (res.statusCode >= HttpStatus.BAD_REQUEST) {
        throw new Error(res.message)
    }

    return res.data as { accessToken: string }
}