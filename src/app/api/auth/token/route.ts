import { NextResponse } from 'next/server'

const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token'
const CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET

export async function POST(request: Request) {
  try {
    const { code } = await request.json()

    // Логируем переменные окружения (ID будет виден в логах, это ок)
    console.log('Environment variables:', {
      clientId: CLIENT_ID,
      hasSecret: !!CLIENT_SECRET,
    })

    // Логируем код, который пришел от GitHub
    console.log('Received code:', code)

    if (!code) {
      return NextResponse.json(
        { message: 'Authorization code is required' },
        { status: 400 }
      )
    }

    const requestBody = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    }

    // Логируем тело запроса (без секрета)
    console.log('Request body:', {
      client_id: CLIENT_ID,
      has_secret: !!CLIENT_SECRET,
      code: code,
    })

    const response = await fetch(GITHUB_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(requestBody),
    }) 

    // Логируем заголовки ответа
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))

    const data = await response.json()

    // Логируем полный ответ от GitHub (без sensitive данных)
    console.log('GitHub response:', {
      status: response.status,
      statusText: response.statusText,
      hasError: !!data.error,
      errorDescription: data.error_description,
      hasAccessToken: !!data.access_token,
      tokenType: data.token_type,
      scope: data.scope,
    })

    if (data.error) {
      return NextResponse.json(
        { message: data.error_description || 'Failed to get access token' },
        { status: 400 }
      )
    }

    return NextResponse.json({ access_token: data.access_token })
  } catch (error) {
    console.error('Token exchange error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 