export const ACT_URL = 'https://legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_27361.htm/$FILE/Residential%20Tenancies%20Act%201987%20-%20[06-00-00].html?OpenElement='

let cachedAct: string | null = null

export async function getActText(): Promise<string> {
  if (cachedAct) return cachedAct

  const res = await fetch(ACT_URL, {
    /* Cache it heavily so Vercel keeps it around between requests if possible */
    next: { revalidate: 86400 }
  })
  
  if (!res.ok) throw new Error(`Failed to fetch Act: ${res.status}`)
  
  const html = await res.text()
  
  cachedAct = html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<\/tr>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#\d+;/g, '')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  return cachedAct
}
