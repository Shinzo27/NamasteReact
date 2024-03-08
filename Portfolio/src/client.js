import sanityClient, { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'egh2tbgp',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skmhst8BDBu0tJgs2SEG47c1074sX3bNYqoaoRQE5FEg2PiizwEkOkQ8DyFcjBOP6NdpxKJfpDiG28mV6OEgvtzGf0LHDKgBXH8rKlyIBf9QgIenMLNiOoSMMdg4k5ZVN0FAMFORLJYrjQhXGVsuVzRBfkl48ifFuc9AVK1G9QsDLkEv7rj0',
    ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
