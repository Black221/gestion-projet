/* eslint-disable @typescript-eslint/no-unused-vars */


export const USER_COLUMS = [
    {
        label: '',
        sort: (data: any[], sens: boolean) => {
            return data
        }
    },
    {
        label: 'name',
        sort: (data: any[], sens: boolean) => {
            return data.sort((a, b) => {
                if (sens) {
                    return a.name > b.name ? 1 : -1
                } else {
                    return a.name < b.name ? 1 : -1
                }
            })
        }
    },
    {
        label: 'email',
        sort: (data: any, sens: boolean) => {
            return data
        }
    },
    {
        label: 'role',
        sort: (data: any, sens: boolean) => {
            return data
        }
    },
    {
        label: 'status',
        sort: (data: any, sens: boolean) => {
            return data
        }
    }
]

export const USER_DATA = [
    {
        id: 1,
        name: 'Bouna',
        email: 'test@',
        role: 'Admin',
        status: 'Active'
    },
    {
        id: 2,
        name: 'Bouna 1',
        email: '',
        role: 'Admin',
        status: 'Active'
    },
    {
        id: 3,
        name: 'Bouna 2',
        email: '',
        role: 'Admin',
        status: 'Active'
    },
    {
        id: 4,
        name: 'Bouna 3',
        email: '',
        role: 'Admin',
        status: 'Active'
    },
    {
        id: 5,
        name: 'Bouna 4',
        email: '',
        role: 'Admin',
        status: 'Active'
    },
    {
        id: 6,
        name: 'Bouna 5',
        email: '',
        role: 'Admin',
        status: 'Active'
    }
]