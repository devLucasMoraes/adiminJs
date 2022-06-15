import React, {useEffect, useState} from 'react'

import { ApiClient } from 'adminjs'
import { Box, H2, Text} from '@adminjs/design-system'

const Dashboard = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        api.getDashboard().then((response) => {
            setData(response.data)
        });
    }, [])

    return(<Box>
            <Text>Dashborad</Text>
        </Box>)
}

export default Dashboard