import axios from 'axios'
import React from 'react'

const baseUrl = '/api/users'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default {getAll}

