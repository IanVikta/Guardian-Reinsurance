const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000/api';

/**
 * Helper to perform JSON requests with proper error formatting.
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMsg =
        data.message ||
        (data.errors && Object.values(data.errors).flat().join(' ')) ||
        `Request failed with status ${response.status}`;
      throw new Error(errorMsg);
    }

    return data;
  } catch (err) {
    console.error(`API Error on ${endpoint}:`, err);
    throw err;
  }
}

/**
 * Submit Contact Inquiry Form
 */
export async function submitContact(formData) {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

/**
 * Submit Quote / Broking Terms Request Form
 */
export async function submitQuote(quoteData) {
  return request('/quotes', {
    method: 'POST',
    body: JSON.stringify(quoteData),
  });
}

/**
 * Submit Claims Notification Docket
 */
export async function submitClaim(claimData) {
  return request('/claims', {
    method: 'POST',
    body: JSON.stringify(claimData),
  });
}

/**
 * Subscribe to Newsletter
 */
export async function subscribeNewsletter(email) {
  return request('/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}

const apiService = {
  submitContact,
  submitQuote,
  submitClaim,
  subscribeNewsletter,
};

export default apiService;
