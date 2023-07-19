import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'eabiayy0',
  dataset: 'production',
  apiVersion: '2023-07-15',
  useCdn: true,
  token: "skxtHEeaUwkyj9YRu9FVf1f3m4QSaLScM6mxXOPHcXmq0lcI9N8GTEcwAOjCZw5N54BzDpKERVQ2CGzfBX7wFOY2IQUBQajqOINn3C6LSzs40S4lwSIADRH3yHJqgNebYzf4gQceKGT66cDCkHclcSRIpNO1HPCxihEZebGXjd2QYBiwEreO",
});

const builder = imageUrlBuilder(client);