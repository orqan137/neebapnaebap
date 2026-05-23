const API_BASE_URL = 'http://localhost:8000/api/v1';

export async function createImageUploadIntent(input: { filename: string; contentType: string; sizeBytes: number }) {
  const response = await fetch(`${API_BASE_URL}/images/upload-intents`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename: input.filename, content_type: input.contentType, size_bytes: input.sizeBytes }),
  });
  if (!response.ok) throw new Error(`upload intent failed: ${response.status}`);
  return response.json() as Promise<{ image_id: string; object_key: string; upload_url: string; public_url?: string }>;
}
