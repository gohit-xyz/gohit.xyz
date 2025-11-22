export interface Sponsor {
  id: string
  name: string
  url: string
  icon: string
  description: string
}

export const SPONSORS: Sponsor[] = [
  {
    id: 'patreon',
    name: 'Patreon',
    url: 'https://patreon.com',
    icon: '/images/sponsors/3.jpg',
    description: 'Support me on Patreon and get exclusive rewards.',
  },
  {
    id: 'buymeacoffee',
    name: 'Buy Me a Coffee',
    url: 'https://buymeacoffee.com',
    icon: '/images/sponsors/3.jpg',
    description: 'Buy me a coffee to keep the code flowing.',
  },
  {
    id: 'kofi',
    name: 'Ko-fi',
    url: 'https://ko-fi.com',
    icon: '/images/sponsors/3.jpg',
    description: 'Support my work with a small donation on Ko-fi.',
  },
  {
    id: 'paypal',
    name: 'PayPal Donations',
    url: 'https://paypal.com',
    icon: '/images/sponsors/3.jpg',
    description: 'Direct donation via PayPal.',
  },
  {
    id: 'github',
    name: 'GitHub Sponsors',
    url: 'https://github.com/sponsors',
    icon: '/images/sponsors/3.jpg',
    description: 'Sponsor my open source work on GitHub.',
  },
  {
    id: 'stripe',
    name: 'Stripe Payment Links',
    url: 'https://stripe.com',
    icon: '/images/sponsors/3.jpg',
    description: 'Secure payment via Stripe.',
  },
  {
    id: 'opencollective',
    name: 'Open Collective',
    url: 'https://opencollective.com',
    icon: '/images/sponsors/3.jpg',
    description: 'Support our collective transparency.',
  },
]
