// src/utils/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.1.89:9095/meal/api/v1';

export async function fetchClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  // Garante que o endpoint comece com '/' se não tiver
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;


  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      // Tenta extrair mensagem de erro amigável retornado pelo Spring
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || `Erro ${response.status}: ${response.statusText}`
      );
    }

    // Para respostas vazias (ex: HTTP 204 No Content)
    if (response.status === 204) {
      return {} as T;
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}