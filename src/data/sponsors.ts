export interface Sponsor {
  name: string
  photo: string
  tier?: 'platinum' | 'gold' | 'silver' | 'bronze'
  website?: string
}

export const sponsors: Sponsor[] = [
  {
    name: 'M',
    photo: 'https://avatars.githubusercontent.com/u/22199520?v=4',
    tier: 'gold',
    website: 'https://example.com'
  },
  {
    name: 'Lams',
    photo: 'https://scontent.flim6-3.fna.fbcdn.net/v/t39.30808-6/481282983_9189080574515424_1398618467427285229_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFUksblZRkltieAhESwk1306tt_GKFYjxLq238YoViPEmSgMdwGz6skLdF98Mo0E2qhWvBuS3ORZ4EJQXvc2h4S&_nc_ohc=tWpteOmzzxcQ7kNvwFoxtAx&_nc_oc=AdkBmmta6VmrEEciCspHgdWSyqG4-oGDz39qtm33s-MRLP_-KMeP4Mi7hNGKhMw_w3Q&_nc_zt=23&_nc_ht=scontent.flim6-3.fna&_nc_gid=Cu9R3GWyxzc9BQ_X_-fwuA&oh=00_AfhenU4JidWSe_EiscF-QtVbKcVIJcS7Y0tksFRlicDJyA&oe=6923FB1E',
    tier: 'bronze',
    // website: 'https://example.com'
  },
]
