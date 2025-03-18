import { PostFormData } from '@/types/post'

const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize'

// Эти значения нужно будет получить после регистрации OAuth приложения
const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || ''

export function getGitHubAuthUrl(state: string) {
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: `${window.location.origin}/auth/callback`,
    scope: 'public_repo',
    state,
    allow_signup: 'true',
  })

  return `${GITHUB_OAUTH_URL}?${params.toString()}`
}

export async function getAccessToken(code: string): Promise<string> {
  try {
    const response = await fetch('/api/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    })

    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.message || `Failed to get access token: ${response.status} ${response.statusText}`)
    }

    if (!data.access_token) {
      throw new Error('No access token received from server')
    }

    return data.access_token
  } catch (error) {
    console.error('Error getting access token:', error)
    throw error
  }
}

// Хранение состояния формы во время авторизации
export function saveFormState(formData: PostFormData) {
  sessionStorage.setItem('pendingPost', JSON.stringify(formData))
}

export function getFormState(): PostFormData | null {
  const data = sessionStorage.getItem('pendingPost')
  return data ? JSON.parse(data) : null
}

export function clearFormState() {
  sessionStorage.removeItem('pendingPost')
} 