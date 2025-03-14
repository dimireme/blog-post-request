const GITHUB_API_URL = 'https://api.github.com'
const REPO_OWNER = 'dimireme' // TODO: заменить на реальное имя пользователя
const REPO_NAME = 'blog-post-request' // TODO: заменить на реальное имя репозитория
const POSTS_PATH = 'content/posts'

interface CreatePullRequestParams {
  title: string;
  content: string;
  filename: string;
  token: string;
}

export async function createPullRequest({
  title,
  content,
  filename,
  token
}: CreatePullRequestParams) {
  // 1. Создаем новую ветку от main
  const mainRef = await fetch(
    `${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/git/refs/heads/main`,
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }
  ).then(res => res.json())

  const branchName = `post/${filename.replace('.md', '')}`
  
  await fetch(
    `${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/git/refs`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ref: `refs/heads/${branchName}`,
        sha: mainRef.object.sha,
      }),
    }
  )

  // 2. Создаем новый файл в этой ветке
  const path = `${POSTS_PATH}/${filename}`
  await fetch(
    `${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Add ${filename}`,
        content: Buffer.from(content).toString('base64'),
        branch: branchName,
      }),
    }
  )

  // 3. Создаем Pull Request
  const pr = await fetch(
    `${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/pulls`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: `Add blog post: ${title}`,
        head: branchName,
        base: 'main',
        body: 'This PR adds a new blog post.',
      }),
    }
  ).then(res => res.json())

  return pr.html_url
} 