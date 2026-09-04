const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL;

export function mediaUrl(path: string) {
  return `${MEDIA_URL}/${path.replace(/^\/+/, "")}`;
}