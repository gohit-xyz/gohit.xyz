import patreonImg from '@/assets/images/x/patreon.jpg'
import buymeacoffeeImg from '@/assets/images/x/buymeacoffee.jpg'
import kofiImg from '@/assets/images/x/co-fi2.jpg'
import paypalImg from '@/assets/images/x/paypal2.jpg'
import githubImg from '@/assets/images/x/github-sponsor.jpg'
import stripeImg from '@/assets/images/x/stripe2.jpg'
import binanceImg from '@/assets/images/x/binance.jpg'

// QR Code images - Replace with actual QR codes when generated
import qrPatreonImg from '@/assets/images/x/qr/qr-patreon.png'
import qrPaypalImg from '@/assets/images/x/qr/qr-paypal.png'
import qrCoFiImg from '@/assets/images/x/qr/qr-co-fi.png'
import qrBuymeacoffeeImg from '@/assets/images/x/qr/qr-buymeacoffee.png'
import qrGithubImg from '@/assets/images/x/qr/qr-github.png'
import cryQr1Img from '@/assets/images/x/qr/cry-qr-1.jpg'
import cryQr2Img from '@/assets/images/x/qr/cry-qr-2.jpg'
import cryQr3Img from '@/assets/images/x/qr/cry-qr-3.jpg'


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
    qrImage: qrPaypalImg,
    qrLink: 'https://paypal.me/yourhandle',
  },
  {
    id: 'buymeacoffee',
    name: 'Buy Me a Coffee',
    url: 'https://buymeacoffee.com',
    icon: buymeacoffeeImg,
    description: 'Buy me a coffee to keep the code flowing.',
    qrImage: qrBuymeacoffeeImg,
    qrLink: 'https://buymeacoffee.com/yourhandle',
  },
  {
    id: 'patreon',
    name: 'Patreon',
    url: 'https://patreon.com',
    icon: patreonImg,
    description: 'Support me on Patreon and get exclusive rewards.',
    qrImage: qrPatreonImg,
    qrLink: 'https://patreon.com/yourhandle',
  },
  {
    id: 'kofi',
    name: 'Ko-fi',
    url: 'https://ko-fi.com',
    icon: kofiImg,
    description: 'Support my work with a small donation on Ko-fi.',
    qrImage: qrCoFiImg,
    qrLink: 'https://ko-fi.com/yourhandle',
  },
  {
    id: 'github',
    name: 'GitHub Sponsors',
    url: 'https://github.com/sponsors',
    icon: githubImg,
    description: 'Sponsor my open source work on GitHub.',
    qrImage: qrGithubImg,
    qrLink: 'https://github.com/sponsors/yourhandle',
  },
  {
    id: 'binance',
    name: 'Binance (Cryptocurrency)',
    url: 'https://binance.com',
    icon: binanceImg,
    description: 'Support our collective transparency.',
    qrImage: cryQr1Img,
    qrLink: 'https://binance.com/yourhandle',
  },
  {
    id: 'stripe',
    name: 'Stripe Payment Links',
    url: 'https://stripe.com',
    icon: stripeImg,
    description: 'Secure payment via Stripe.',
    qrImage: cryQr2Img,
    qrLink: 'https://buy.stripe.com/yourlink',
  },
]
