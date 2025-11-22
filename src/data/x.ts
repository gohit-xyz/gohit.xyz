import patreonImg from '@/assets/images/x/patreon.jpg'
import buymeacoffeeImg from '@/assets/images/x/buymeacoffee.jpg'
import kofiImg from '@/assets/images/x/co-fi2.jpg'
import paypalImg from '@/assets/images/x/paypal2.jpg'
import githubImg from '@/assets/images/x/github-sponsor.jpg'
import stripeImg from '@/assets/images/x/stripe2.jpg'
import binanceImg from '@/assets/images/x/binance.jpg'

// QR Code images - Replace with actual QR codes when generated
import qrTestImg from '@/assets/images/x/qr/QR_test.png'

export interface Sponsor {
  id: string
  name: string
  url: string
  icon: ImageMetadata
  description: string
  qrImage: ImageMetadata
  qrLink: string // The actual link that the QR code points to
}

export const SPONSORS: Sponsor[] = [
  {
    id: 'paypal',
    name: 'PayPal Donations',
    url: 'https://paypal.com',
    icon: paypalImg,
    description: 'Direct donation via PayPal.',
    qrImage: qrTestImg, // TODO: Replace with actual PayPal QR code
    qrLink: 'https://paypal.me/yourhandle', // TODO: Update with your actual PayPal link
  },
  {
    id: 'buymeacoffee',
    name: 'Buy Me a Coffee',
    url: 'https://buymeacoffee.com',
    icon: buymeacoffeeImg,
    description: 'Buy me a coffee to keep the code flowing.',
    qrImage: qrTestImg, // TODO: Replace with actual Buy Me a Coffee QR code
    qrLink: 'https://buymeacoffee.com/yourhandle', // TODO: Update with your actual link
  },
  {
    id: 'patreon',
    name: 'Patreon',
    url: 'https://patreon.com',
    icon: patreonImg,
    description: 'Support me on Patreon and get exclusive rewards.',
    qrImage: qrTestImg, // TODO: Replace with actual Patreon QR code
    qrLink: 'https://patreon.com/yourhandle', // TODO: Update with your actual Patreon link
  },
  {
    id: 'kofi',
    name: 'Ko-fi',
    url: 'https://ko-fi.com',
    icon: kofiImg,
    description: 'Support my work with a small donation on Ko-fi.',
    qrImage: qrTestImg, // TODO: Replace with actual Ko-fi QR code
    qrLink: 'https://ko-fi.com/yourhandle', // TODO: Update with your actual Ko-fi link
  },
  {
    id: 'github',
    name: 'GitHub Sponsors',
    url: 'https://github.com/sponsors',
    icon: githubImg,
    description: 'Sponsor my open source work on GitHub.',
    qrImage: qrTestImg, // TODO: Replace with actual GitHub Sponsors QR code
    qrLink: 'https://github.com/sponsors/yourhandle', // TODO: Update with your actual GitHub Sponsors link
  },
  {
    id: 'stripe',
    name: 'Stripe Payment Links',
    url: 'https://stripe.com',
    icon: stripeImg,
    description: 'Secure payment via Stripe.',
    qrImage: qrTestImg, // TODO: Replace with actual Stripe QR code
    qrLink: 'https://buy.stripe.com/yourlink', // TODO: Update with your actual Stripe payment link
  },
  {
    id: 'binance',
    name: 'Binance',
    url: 'https://binance.com',
    icon: binanceImg,
    description: 'Support our collective transparency.',
    qrImage: qrTestImg, // TODO: Replace with actual Binance QR code
    qrLink: 'https://binance.com/yourhandle', // TODO: Update with your actual Binance link
  },
]
