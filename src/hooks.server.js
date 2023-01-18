const redirects = [
  {
    source: '/components',
    destination: '/components/introduction'
  },
  {
    source: '/styleguide',
    destination: '/styleguide/introduction'
  }
];

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const redirect = redirects.find((item) => event.url.pathname === item.source);

  if (redirect) {
    return new Response('', { status: 301, headers: { Location: redirect.destination } });
  }

  const response = await resolve(event);
  return response;
}
