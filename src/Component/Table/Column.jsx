

export const COLUMN =[
    {
        Header:"Id",
        Footer:'Id',
        accessor:"id"
    },
    {
        Header:"First Name",
        Footer:"First Name",
        accessor:"first_name"
    },
    {
        Header:"Last Name",
        Footer:"Last Name",
        accessor:"last_name"
    },
    {
        Header:"Email",
        Footer:'Email',
        accessor:"email"
    },
    {
        Header:"City",
        Footer:"City",
        accessor:"city"
    },
    {
        Header:"Phone",
        Footer:"Phone",
        accessor:"phone"
    }
]
export const Grouped_Columns = [
    {
        Header:"Id",
        Footer:'Id',
        accessor:"id"
    },
    {
        Header:'Name',
        Footer:'Name',
        columns:[
            {
                Header:"First Name",
                Footer:"First Name",
                accessor:"first_name"
            },
            {
                Header:"Last Name",
                Footer:"Last Name",
                accessor:"last_name"
            },
        ]
    },
    {
        Header:'Info',
        Footer:'Info',
        columns:[
            {
                Header:"Email",
                Footer:'Email',
                accessor:"email"
            },
            {
                Header:"City",
                Footer:"City",
                accessor:"city"
            },
            {
                Header:"Phone",
                Footer:"Phone",
                accessor:"phone"
            }
        ]
    }
]

