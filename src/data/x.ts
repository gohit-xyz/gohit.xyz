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
  url?: string // Optional: URL to official page (if available)
  icon: ImageMetadata
  description: string
  qrImage: ImageMetadata
  qrImages?: ImageMetadata[] // Optional: Multiple QR codes for crypto options
  qrLabels?: string[] // Optional: Labels for each QR code
  cryptoWalletIds?: string[] // Optional: Wallet IDs for cryptocurrency options
  isCrypto?: boolean // Optional: Flag to identify cryptocurrency sponsors
}

export const SPONSORS: Sponsor[] = [
  {
    id: 'paypal',
    name: 'PayPal Donations',
    description: 'Direct donation via PayPal.',
    icon: paypalImg,
    qrImage: qrPaypalImg,
    url: 'https://www.paypal.com/ncp/payment/XYLSCD9GDEBLY',
  },
  {
    id: 'buymeacoffee',
    name: 'Buy Me a Coffee',
    description: 'Buy me a coffee to keep the code flowing.',
    icon: buymeacoffeeImg,
    qrImage: qrBuymeacoffeeImg,
    url: 'https://buymeacoffee.com/gohitx',
  },
  {
    id: 'patreon',
    name: 'Patreon',
    description: 'Support me on Patreon and get exclusive rewards.',
    icon: patreonImg,
    qrImage: qrPatreonImg,
    url: 'https://www.patreon.com/gohitx/gift',
  },
  {
    id: 'kofi',
    name: 'Ko-fi',
    description: 'Support my work with a small donation on Ko-fi.',
    icon: kofiImg,
    qrImage: qrCoFiImg,
    url: 'https://ko-fi.com/gohitx',
  },
  {
    id: 'github',
    name: 'GitHub Sponsors',
    description: 'Sponsor my open source work on GitHub.',
    icon: githubImg,
    qrImage: qrGithubImg,
    url: 'https://github.com/sponsors/gohit-xyz',
  },
  {
    id: 'binance',
    name: 'Binance (Cryptocurrency)',
    icon: binanceImg,
    description: 'BNB Smart Chain (BEP20)',
    qrImage: cryQr1Img,
    qrImages: [cryQr1Img, cryQr2Img, cryQr3Img],
    qrLabels: ['Bitcoin', 'Ethereum', 'USDT'],
    cryptoWalletIds: ['0x217ef3dbd9eb20f2bc8a5a9b303d73ac3739bf8e'],
    isCrypto: true,
  }
]
