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
    website: 'https://gohit.xyz/blog'
  },
  {
    name: 'Lams',
    photo: 'https://scontent.flim6-3.fna.fbcdn.net/v/t39.30808-6/481282983_9189080574515424_1398618467427285229_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEvcLyu2NK1tjRPyxxZxfT46tt_GKFYjxLq238YoViPEgjorz3raBJ8ZHr9HKlCYfNj1zT2RLAvoVQVCxgZuzri&_nc_ohc=21sD9I6b7RkQ7kNvwHcMOAf&_nc_oc=AdnUj0gKVw0OswV_KO_ep4sbc687V6BHDMPJFh8FH9QfyvUwuyKx1tAxYGCWcMZQThU&_nc_zt=23&_nc_ht=scontent.flim6-3.fna&_nc_gid=Fln491Elkad5NJyFkBjE5Q&oh=00_Afi3Wmg-RSnmAfgfTu_OIri9Ji49Bk0wJaSSUPo3wfJLXw&oe=692ACADE',
    // website: 'https://example.com'
  },
]
