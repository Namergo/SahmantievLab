import { mockGetRequests, mockCreateRequest } from './mockRequests.js'

const baseUrl = import.meta.env.VITE_API_BASE_URL
const USE_MOCK = true

async function handleResponse(response) {
  if (!response.ok) {
    const body = await response.json().catch(() => ({}))
    const error = new Error(body.message || `HTTP ${response.status}`)
    error.status = response.status
    throw error
  }
  return response.json()
}

export async function getRequests() {
  if (USE_MOCK) {
    const result = await mockGetRequests()
    if (!result.ok) {
      const error = new Error(result.data?.message || `HTTP ${result.status}`)
      error.status = result.status
      throw error
    }
    return result.data
  }

  try {
    const response = await fetch(`${baseUrl}/api/requests`)
    return await handleResponse(response)
  } catch (e) {
    if (e.status) throw e
    const error = new Error('Нет связи с сервером')
    error.status = 0
    throw error
  }
}

export async function createRequest(body) {
  if (USE_MOCK) {
    const result = await mockCreateRequest(body)
    if (!result.ok) {
      const error = new Error(result.data?.message || `HTTP ${result.status}`)
      error.status = result.status
      throw error
    }
    return result.data
  }

  try {
    const response = await fetch(`${baseUrl}/api/requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    return await handleResponse(response)
  } catch (e) {
    if (e.status) throw e
    const error = new Error('Нет связи с сервером')
    error.status = 0
    throw error
  }
}