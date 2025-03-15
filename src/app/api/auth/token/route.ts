import { NextResponse } from 'next/server'

const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token'
const CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET

export async function POST(request: Request) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json(
        { message: 'Authorization code is required' },
        { status: 400 }
      )
    }

    const response = await fetch(GITHUB_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      }),
    })

    const data = await response.json()

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