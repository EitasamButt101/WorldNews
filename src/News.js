import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
        {
          "source": { "id": "news24", "name": "News24" },
          "author": "AFP",
          "title": "England World Cup team faced 'unlimited' sanctions over rainbow armband",
          "description": "The head of English football said on Friday FIFA threatened \"unlimited\" sanctions against players who wore the \"OneLove\" rainbow-themed armband for World Cup matches in Qatar.",
          "url": "https://www.news24.com/sport/soccer/worldcup/england-world-cup-team-faced-unlimited-sanctions-over-rainbow-armband-20221126",
          "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/7241/ec5d36c6c6a540a0ba73ffcbea7492e1.jpg",
          "publishedAt": "2022-11-26T09:00:28+00:00",
          "content": "The head of English football said on Friday FIFA threatened \"unlimited\" sanctions against players who wore the \"OneLove\" rainbow-themed armband for World Cup matches in Qatar.\r\nEngland, Wales and fiv… [+1658 chars]"
        },
        {
          "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
          "author": "Al Jazeera",
          "title": "Qatar football should not be branded failure: Coach Sanchez",
          "description": "Hosts become the first team to be knocked out of the World Cup after losing their second game.",
          "url": "http://www.aljazeera.com/sports/2022/11/26/qatar-football-should-not-be-branded-failure-coach-sanchez",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/11/SOR05223_1.jpg?resize=1920%2C1440",
          "publishedAt": "2022-11-26T07:00:54Z",
          "content": "Qatar coach Felix Sanchez has said his side should not be branded a failure and disappointment after it lost its second group game against Senegal, a result that knocked the World Cup hosts out of th… [+2410 chars]"
        },
        {
          "source": { "id": "lequipe", "name": "L'equipe" },
          "author": "L'EQUIPE",
          "title": "Programme TV foot : à quelle heure et sur quelle chaîne voir les matchs de ce soir (26 novembre 2022) ?",
          "description": "Retrouvez l'intégralité des retransmissions des matches de football du jour retransmis sur toutes les chaînes du bouquet TNT, Câble et Satellite. Ligue 1, Ligue 2, Premier League, coupes d'Europe... Suivez tous les matches en direct sur votre télévision ou en…",
          "url": "https://www.lequipe.fr/Football/Actualites/Programme-tv-foot-a-quelle-heure-et-sur-quelle-chaine-voir-les-matchs-de-ce-soir-26-novembre-2022/1366961",
          "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/-/1500000001560313/4:0,2500:1664-640-427-75/3ed0a.jpg",
          "publishedAt": "2022-11-26T06:01:47+00:00",
          "content": "Coupe du monde - : 2e journée \r\n- Tunisie - Australie : à 11 heures en direct sur beIN Sports 1 et beIN Sports 2 - Pologne - Arabie saoudite : à 14 heures en direct sur beIN Sports 2 et beIN Sports 1… [+193 chars]"
        },
        {
          "source": { "id": "the-irish-times", "name": "The Irish Times" },
          "author": "Kevin Kilbane",
          "title": "Kevin Kilbane: Football, protests and geo-politics flow downstream together in Doha",
          "description": "It is disappointing that England, unlike Germany and Iran, chose to duck all controversy",
          "url": "https://www.irishtimes.com/sport/soccer/2022/11/26/football-protests-and-geo-politics-flow-downstream-together-in-doha/",
          "urlToImage": "https://www.irishtimes.com/resizer/SCxGiHUptR-mYsU_fM67KCDJi-w=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/FS3Y4U65W6KIGXUBVFP6Y3HCYA.jpg",
          "publishedAt": "2022-11-26T06:00:00Z",
          "content": "The World Cup has reached an inevitable crossroads. Some big nations dropped points in the opening games, with Saudi Arabia and Japan lighting up Doha with wins over Argentina and Germany, forcing th… [+5998 chars]"
        },
        {
          "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
          "author": "Hamza Mohamed",
          "title": "Nine of 11 Saudi starters play for same club. Who are Al Hilal?",
          "description": "The Riyadh-based club.is the kingdom’s most successful football team.",
          "url": "http://www.aljazeera.com/sports/2022/11/26/al-hilal-the-engine-of-the-saudi-arabias-world-cup-team",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/11/2021-11-23T222946Z_1439116608_UP1EHBN1G9J7E_RTRMADP_3_SOCCER-AFCCHAMPIONS-ALH-POH.jpg?resize=1920%2C1440",
          "publishedAt": "2022-11-26T05:14:37Z",
          "content": "Doha, Qatar As the announcer blared one after another the names of the Saudi players to loud cheers inside Lusail stadium a distinctive pattern emerged.\r\nOf the 11 players lined up on Tuesday up to p… [+3600 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "Sean O'Grady",
          "title": "Fifa and Qatar will have the last laugh in this World Cup",
          "description": "It’s not Cop27. It’s not a UN Human Rights convention or a parliamentary debate. The World Cup really is all about the football",
          "url": "http://www.independent.co.uk/voices/fifa-qatar-world-cup-wales-iran-b2232951.html",
          "urlToImage": "https://static.independent.co.uk/2022/11/25/12/2022-11-25T122919Z_657805023_UP1EIBP0YOSMG_RTRMADP_3_SOCCER-WORLDCUP-QAT-SEN-REPORT.JPG?quality=75&width=1200&auto=webp",
          "publishedAt": "2022-11-25T13:17:41Z",
          "content": "Sign up for the View from Westminster email for expert analysis straight to your inbox\r\nGet our free View from Westminster email\r\nSo, were just a few days into the World Cup, and guess whos winning? … [+3668 chars]"
        },
        {
          "source": { "id": "espn", "name": "ESPN" },
          "author": "Chris Fallica",
          "title": "Stanford Steve and The Bear: Week 13 college football picks",
          "description": "Stanford Steve and The Bear preview Week 13 of the college football season, offering their picks and betting tips on games such as Tennessee-Vanderbilt and Oklahoma-Texas Tech.",
          "url": "http://espn.go.com/chalk/insider/story/_/id/35079399/stanford-steve-bear-week-13-college-football-picks",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1123%2Fr1095853_1296x729_16%2D9.jpg",
          "publishedAt": "2022-11-24T11:30:00Z",
          "content": "\"Stanford Steve\" Coughlin and Chris \"The Bear\" Fallica preview Week 13 of the 2022 college football season as only they can, offering their top bets, nuggets and totals worth wagering on.\r\nOdds and l… [+7036 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
          "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
          "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
          "publishedAt": "2020-04-27T07:20:43Z",
          "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
      ]
    constructor(){
        super()
        console.log("Hello i am a constructor from news component")
        this.state={
           articles: this.articles,
           loading: false            
        }
      }
  render() {
    return (
      <div className="container my-3">
        <h2>WorldNews - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title.slice(0, 45)} description={element.description.slice(0, 76)} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
        
        </div>
      </div>
    )
  }
}

export default News
