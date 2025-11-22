import patreonImg from '@/assets/images/x/patreon.jpg'
import buymeacoffeeImg from '@/assets/images/x/buymeacoffee.jpg'
import kofiImg from '@/assets/images/x/co-fi.jpg'
import paypalImg from '@/assets/images/x/paypal.jpg'
import githubImg from '@/assets/images/x/github-sponsor.jpg'
import stripeImg from '@/assets/images/x/stripe.jpg'
import binanceImg from '@/assets/images/x/binance.jpg'

export interface Sponsor {
  id: string
  name: string
  url: string
  icon: ImageMetadata
  description: string
}

export const SPONSORS: Sponsor[] = [
  {
    id: 'patreon',
    name: 'Patreon',
    url: 'https://patreon.com',
    icon: patreonImg,
    description: 'Support me on Patreon and get exclusive rewards.',
  },
  {
    id: 'buymeacoffee',
    name: 'Buy Me a Coffee',
    url: 'https://buymeacoffee.com',
    icon: buymeacoffeeImg,
    description: 'Buy me a coffee to keep the code flowing.',
  },
  {
    id: 'kofi',
    name: 'Ko-fi',
    url: 'https://ko-fi.com',
    icon: kofiImg,
    description: 'Support my work with a small donation on Ko-fi.',
  },
  {
    id: 'paypal',
    name: 'PayPal Donations',
    url: 'https://paypal.com',
    icon: paypalImg,
    description: 'Direct donation via PayPal.',
  },
  {
    id: 'github',
    name: 'GitHub Sponsors',
    url: 'https://github.com/sponsors',
    icon: githubImg,
    description: 'Sponsor my open source work on GitHub.',
  },
  {
    id: 'stripe',
    name: 'Stripe Payment Links',
    url: 'https://stripe.com',
    icon: stripeImg,
    description: 'Secure payment via Stripe.',
  },
  {
    id: 'binance',
    name: 'Binance',
    url: 'https://binance.com',
    icon: binanceImg,
    description: 'Support our collective transparency.',
  },
]
