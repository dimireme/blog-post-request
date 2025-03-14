interface PostData {
  title: string;
  content: string;
  author: string;
}

export function generatePostFile(data: PostData): { content: string; filename: string } {
  const date = new Date().toISOString().split('T')[0]
  const slug = data.title
    .toLowerCase()
    .replace(/[^a-zа-яё0-9\s]/g, '')
    .replace(/\s+/g, '-')
  
  const frontMatter = [
    '---',
    `title: "${data.title}"`,
    `date: "${date}"`,
    `author: "${data.author}"`,
    '---',
    '',
  ].join('\n')

  const content = `${frontMatter}${data.content}`
  const filename = `${date}-${slug}.md`

  return {
    content,
    filename
  }
} 