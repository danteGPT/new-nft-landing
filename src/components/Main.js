import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TokenMap from "../map/TokenMap";
import TokenMap2 from "../map/TokenMap2";
import WorldMap from "../map/WorldMap";
import LnIcon from "../icons/LnIcon";
import InsIcon from "../icons/InsIcon";
import TwitterIcon from "../icons/TwitterIcon";
import DiscordIcon from "../icons/DiscordIcon";

const Main = () => {
  const [teamUsers, setTeamUsers] = useState([
    {
      img: "./images/user3.webp",
      name: "Cecilia Bachman",
      lbl: "CEO",
      loc: "United States",
    },
    {
      img: "./images/manager.jpg",
      name: "Anatoli Miadzvedzeu",
      lbl: "Lead Project Manager",
      loc: "Belarus",
    },
    {
      img: "./images/nft3.jpeg",
      name: "Elliot - Night Wolf",
      lbl: "Community Manager",
      loc: "United Kingdom",
    },
    // {
    //   img: "./images/user2.png",
    //   name: "Cody Bachman",
    //   lbl: "CFO",
    //   loc: "United States",
    // },
    // {
    //   img: "./images/developer.jpg",
    //   name: "Dubenets Vladyslav",
    //   lbl: "Project Developer",
    //   loc: "Ukraine",
    // },
    // {
    //   img: "./images/user5.png",
    //   name: "Chris Hooli",
    //   lbl: "Community Manager",
    //   loc: "Canada",
    // },
  ]);
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [numbs, setNumbs] = useState([
    {
      img: "/images/nft1.jpeg",
    },
    {
      img: "/images/nft2.jpeg",
    },
    {
      img: "/images/nft3.jpeg",
    },
    {
      img: "/images/nft4.jpeg",
    },
    {
      img: "/images/nft5.jpeg",
    },
    {
      img: "/images/nft6.jpeg",
    },
    {
      img: "/images/nft7.jpeg",
    },
    {
      img: "/images/nft8.jpeg",
    },
    {
      img: "/images/nft9.jpeg",
    },
    {
      img: "/images/nft10.jpeg",
    },
    {
      img: "/images/nft11.jpeg",
    },
    {
      img: "/images/nft12.png",
    },
    {
      img: "/images/nft13.png",
    },
    {
      img: "/images/nft14.png",
    },
    {
      img: "/images/nft15.jpeg",
    },
    {
      img: "/images/nft16.jpeg",
    },
    {
      img: "/images/nft17.jpeg",
    },
    {
      img: "/images/nft18.jpeg",
    },
    {
      img: "/images/nft19.jpeg",
    },
    {
      img: "/images/nft20.jpeg",
    },
    {
      img: "/images/nft21.jpeg",
    },
    {
      img: "/images/nft22.jpeg",
    },
    {
      img: "/images/nft23.jpeg",
    },
    {
      img: "/images/nft24.jpeg",
    },
    {
      img: "/images/nft25.jpeg",
    },
    {
      img: "/images/nft26.jpeg",
    },
    {
      img: "/images/nft27.jpeg",
    },
    {
      img: "/images/nft28.jpeg",
    },
    {
      img: "/images/nft29.jpeg",
    },
    {
      img: "/images/nft30.jpeg",
    },
  ]);
  return (
    <div className="main-page flex flex-col aic aic jc">
      <div className="wrap flex flex-col aic jc">
        <div
          className="home-sec flex"
          // style={{ backgroundImage: `url(/images/Untitled.png)` }}
        >
          <div className="left flex">
            <div className="nft-img flex">
              <img src="./images/2001.png" className="img" />
            </div>
          </div>
          <div className="right flex aic">
            <div className="meta flex flex-col">
              <div className="slug font-h">Welcome to MetaVerse Society</div>
              <div className="desc">
                MetaVerse Society is an exclusive, friendly NFT project that
                will launch multiple collections on the Ethereum blockchain.
                MetaVerse Kangaroos will be the first collection, and there will
                be a limited supply.
              </div>
              <a className="btn button" href="https://mint.metaverse-society.io/">Mint</a>
            </div>
          </div>
        </div>
        {/* <div id="overview" className="overview-sec flex jc">
          <div className="wrapWidth wraps flex flex-col aic">
            <div className="tag font-h">Project overview</div>
            <div className="blk flex">
              <p>
                The MetaVerse Society will be the best community-driven NFT
                project out there! We strive to improve the lives of our
                community members, creating the best ecosystem that satisfies
                our wide range of future holders. This will include NFT
                collectors, game enthusiasts, passive income lovers, and lottery
                fans! Having a strong connection with our community will be the
                key to achieving all of these as we aim to make our holders feel
                like they are a part of something bigger with MetaVerse Society.
                As we said, the project will be community-driven as we want to
                make the best possible experience for our holders. To do this,
                we will conduct voting on our Discord server initially, but we
                will implement a DAO contract, allowing our holders to make
                ultimate decisions, whether that be through partnerships with
                blue-chip companies, buybacks, new collections, and much more!
                Our holders will have the biggest voice in what the community
                fund is used for. Our holders will be able to stake their NFTs
                and earn our MeVerse Token. Our P2E game comes with amazing
                rewards! We will also be adding a marketplace to our website
                later on as well for a one stop shop!
              </p>
            </div>
          </div>
        </div> */}
        <div id="overview" className="overview-sec flex jc">
          <div className="wrapWidth wraps flex flex-col aic">
            <div className="tag font-h">Our story</div>
            <div className="blk flex">
              <p><p style={{fontWeight:"bold", fontSize:"24px"}}>The Metaverse Society</p><br/><br/>
                Most of Earth is little more than a toxic wasteland now, with entire 
                continents being destroyed due to the fallout after the Great Nuclear War. 
                Cities that were once filled with humans are now lifeless, signaling the 
                end of the era of humanity. Humans weren’t the only ones to face the 
                consequences, however. Massive doses of ionizing radiations washed over 
                the lands and seas, corrupting most life into twisted and mutated lifeforms. 
                With extinction taking over everything, chances of survival are grim and 
                every day is a death-defying experience.<br/><br/>
                As dangerous as it is, radiation did not destroy everything. For some, it 
                led to an extraordinary biological evolution; creating an enhanced species 
                that opened their eyes in a dying world. Earth was dying with every passing 
                minute and they had to survive.<br/><br/>
                Australia, due to its isolated position, was spared from total annihilation. 
                The entire continent managed to survive the infernos of nuclear blasts that 
                covered the rest of the planet. While the Gamma-Z radiation was enough to kill 
                off every last human in Australia, it could not kill everything. In a wild 
                twist of nature, the massive dose of ionizing radiation turned one of Australia’s 
                iconic species into highly intelligent and conscious beings:<br/><br/>
                <p style={{fontWeight:"bold", fontSize:"24px"}}>The kangaroos</p><br/>
                Known for their exceptional strength and toughness, the kangaroos mutated into 
                highly intelligent creatures that soon adopted the broken legacy of humans that 
                once lived on Earth without the mindless violence.
                Earth has been wrecked beyond recovery and it is collapsing like a ticking time 
                bomb that cannot be defused. In a desperate struggle to avoid extinction, the 
                kangaroos are now trying to protect themselves from extermination like the humans 
                that lived before them.
                With doom approaching, the Kangaroos make a desperate struggle to survive. 
                A dangerous nuclear winter is not far away that will freeze everything to death 
                and the kangaroos have realized the futility of trying to save Earth.
                With Gamma-Z radiations fueling their intelligence every passing moment, the 
                Kangaroos are daring to achieve what humans could only dream and lust after, 
                Immortality.<br/><br/>
                Using their collective cerebral potential to change their destiny, they have 
                discovered a technological marvel: The MetaVerse. Inside the MetaVerse, the 
                Kangaroos have the chance to live on endlessly, enjoying limitless freedom to 
                create their unique society, a world they call the MetaVerse Society; a place 
                where their souls can live on forever.<br/><br/>
                To survive, the Kangaroos are uploading their consciousness to the MetaVerse; a 
                digital migration from a crumbling Earth to an everlasting digital expanse where 
                they can live on forever.<br/><br/>
                With time ticking away, the Kangaroos are joining the MetaVerse, migrating for much 
                more than their survival but to show how every living thing on the planet has a 
                right to live freely without threats to their life. The Kangaroos have now set 
                their eyes on saving others who share their goals of immortality on Earth, building 
                a whole new digital society in a never-ending digital world….<br/><br/><br/><br/><br/>
                We are all about bringing people together, not apart like in the real world nowadays. 
                We can create a space where everyone is accepted and safe!
              </p>
            </div>
          </div>
        </div>
        <div
          className="dao-sec flex jc"
          // style={{ backgroundImage: `url(/images/Untitled3.png)` }}
        >
          <div className="wrapWidth wraps flex ">
            <div className="left flex flex-col">
              <div className="tag font-h">Community dao</div>
              <div className="blk flex">
                <p>
                  The community DAO will receive 5% of the revenue from the mint, 
                  and the holders will decide how it will be used - for giveaways, 
                  donations to charities, cash prizes, merchandise, buybacks, and 
                  so on. Besides receiving a percentage of the mint's earnings, 
                  the community DAO will also be receive royalties! The community 
                  DAO will receive 20% royalties!
                </p>
              </div>
            </div>
            <div className="right flex"></div>
          </div>
        </div>
        <div
          className="utilities-sec flex jc"
          // style={{ backgroundImage: `url(/images/Untitled4.png)` }}
        >
          <div className="wrapWidth wraps flex flex-col">
            <div className="offers  flex ">
              <div className="blk wrapper flex aic">
                <Slider {...settings}>
                  {numbs.map((item, index) => (
                    <div key={index}>
                      <div className="card flex aic">
                        {/* <div className="llb">{item.lbl}</div> */}
                        <img src={item.img} />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="points flex flex-col">
              <div className="point-item flex flex-col">
                <div className="p-heading font-h">Buybacks</div>
                <div className="p-desc">
                  We will conduct weekly buybacks of our collection. The
                  community fund will be used for these buybacks if the
                  community agrees. Upon acquiring MetaVerse Kangaroo from
                  OpenSea, we will announce it on the official Discord server.
                  The address of the community fund will be available to the
                  public, as mentioned earlier. Thus, all NFTs we acquire will
                  be visible to our community. Using the buyback approach, we
                  would be able to increase the floor price. Ethereum from the
                  sales will be distributed to the community fund itself.
                </div>
              </div>
              <div className="point-item flex ">
                <div className="p-left flex flex-col">
                  <div className="p-heading font-h">
                    Rewards for our members
                  </div>
                  <div className="p-desc">
                    In essence, we will have multiple giveaways for our
                    community! Members of our community will receive lots of
                    attention and rewards.
                  </div>
                </div>
                <div className="p-right flex jc">
                  <div className="box flex flex-col">
                    <div className="tag">
                      As rewards, you will get a chance to receive:
                    </div>
                    <div className="list flex flex-col">
                      <div className="list-item flex ">
                        <div className="dot flex"></div>
                        <div className="flex">
                          Over $100,000 of the crypto split between
                          <br /> multiple people (at 100% minted),
                        </div>
                      </div>
                      <div className="list-item flex aic">
                        <div className="dot flex"></div>
                        <div className="flex">NFTs,</div>
                      </div>
                      <div className="list-item flex aic">
                        <div className="dot flex"></div>
                        <div className="flex">MeVerse Tokens,</div>
                      </div>
                      <div className="list-item flex aic">
                        <div className="dot flex"></div>
                        <div className="flex">Discord Nitros,</div>
                      </div>
                      <div className="list-item flex aic">
                        <div className="dot flex"></div>
                        <div className="flex">Vacation Getaways,</div>
                      </div>
                      <div className="list-item flex aic">
                        <div className="dot flex"></div>
                        <div className="flex">
                          MetaVerse Society Merchandise (yeah, we're <br />{" "}
                          planning to launch our merchandise).
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="point-item flex flex-col">
                <div className="p-heading font-h">Whitelist</div>
                <div className="p-desc">
                  There will be 2424 whitelist spots. With minting as a WL member 
                  comes with extra perks. You will be airdropped the max 3x Gamma 
                  boost and earn max tokens while staked! Make sure to join our 
                  official Discord server to learn more about the whitelist, 
                  including requirements to snatch up a spot!
                </div>
              </div>
              <div className="point-item flex flex-col">
                <div className="p-heading font-h">
                  Rewards For Lucky Investors
                </div>
                <div className="p-desc">
                  There will be only 15 legendaries, those who mint one will 
                  receive an additional 30 days staked!
                </div>
              </div>
              <div className="utiltitle-tag font-h">Utilities</div>
              <div className="point-item flex flex-col">
                <div className="p-heading font-h">Gamma Boosts</div>
                <div className="p-desc">
                  These will boost your daily earning while staking. All WL members 
                  will receive the max boost of 3x and 2000 non WL members will 
                  receive the 2x boost. So make sure you are one of the early 
                  minters for these awesome benefits!
                </div>
              </div>
              <div className="mb-8">
                <video autoPlay muted loop>
                    <source src="./images/Gamma_WebSite.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="point-item flex flex-col">
                <div className="p-heading font-h">Staking application</div>
                <div className="p-desc">
                  {/* Our staking application is currently in development and will
                  be ready mid-late April. */}
                  With this you earn 12, 24 or 36 MeVerse token per day while 
                  staked depending on your boost. In addition, for every 30 days 
                  staked you will receive an additional 100 MeVerse tokens. 
                  If you Stake a Legendary, you will receive 150 every 30 days!
                </div>
              </div>
              <div className="point-item flex flex-col">
                <div className="p-heading font-h">MeVerse Token</div>
                <div className="p-desc">
                  We have already created our MeVerse token that will be launched
                  on the Ethereum blockchain. MEV sits at the core of everything
                  in the MetaVerse Society. As the Society grows more utility 
                  will be added. The mission of MVS extends further then just a PFP,
                   It’s about our Society, utility and main source of our whole ecosystem.
                </div>
              </div>
              <div className="point-item flex flex-col">
                <div className="p-heading font-h">Marketplace</div>
                <div className="p-desc">
                  We will be adding are own marketplace on our website for a one stop shop! 
                  Here you will be able to purchase merch with your MeVerse tokens as well 
                  as buy, sell, trade and stake your NFTs.
                </div>
              </div>
              <div className="point-item flex flex-col">
                <div className="p-heading font-h">Casino & Lottery</div>
                <div className="p-desc">
                  Double your ETH by playing our casino games. 
                  We will be asking our community on what type of games they would like.
                </div>
              </div>
              <div className="point-item flex flex-col">
                <div className="p-heading font-h">MeVerse Staking & Yield farming</div>
                <div className="p-desc">
                  Earn passively by utilizing MeVerse token (MEV) leveraged Pools & Farms 
                  of Single-Staking, MEV/ETH Farms and more! <br/>
                  We are actively seeking investors and or partnerships to help fund liquidity for MEV before launch!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="token-sec flex jc"
          // style={{ backgroundImage: `url(/images/Untitled5.png)` }}
        >
          <div className="wrapWidth wraps flex aic">
            <div className="left flex flex-col">
              <div className="tag font-h">Tokenomics</div>
              <div className="desc">
                The total supply of MeVerse tokens will be set to 100,000,000.
              </div>
              <div className="blk flex aic jc">
                <div className="token">
                  <img src="./images/tokenomics.png" style={{marginBottom: "-100px"}}/>
                  {/* <TokenMap /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="roadmap-sec flex jc"
          // style={{ backgroundImage: `url(/images/Untitled6.png)` }}
        >
          <div className="wrapWidth wraps flex aic flex-col">
            <div className="points flex flex-col">
              <div className="point-item flex flex-col">
                <div className="p-heading font-h">Play-to-earn game</div>
                <div className="p-desc">
                  Play-to-earn games will be developed in conjunction with companies 
                  that specialize in this area. Holders will be able to choose on which 
                  land we should build that game. Playing the game, you will receive 
                  our MeVerse Token. The game will be a mixture between Minecraft, 
                  Sims City and Club Penguin. It will allow you to interact with other 
                  MVS holders and have multiple games within it. You will be on a mission 
                  to different parts of the world in search for others to bring back to 
                  our Society, creating and a save zone from the dying world. We will 
                  be asking the community on where they would like these portals to 
                  go on earth as this will lead to another collection.
                </div>
              </div>
              {/* <div className="point-item flex flex-col">
                <div className="p-heading font-h">Virtual Meetings </div>
                <div className="p-desc">
                  Later in the project, we plan to purchase land in Decentraland and construct a virtual conference room to host our AMAs, spend time with the community, play some games, virtual online shopping etc.
                </div>
              </div> */}
              <div className="p-notic flex">
                <div className="box flex flex-col">
                  <div className="tag">Important</div>
                  <div className="desc">
                    This roadmap model contains phases. Accurate dates will be
                    announced on our official Discord server.
                  </div>
                </div>
              </div>
            </div>
            <div id="roadmap" className="roadmap-tag font-h">
              Roadmap
            </div>
            <div className="roadmap-block ">
              <div className="timeline">
                <ul>
                  <li>
                    <div className="right_content">
                      <p>
                        <p class="txt">
                          - First, Audit & publish NFT collection – Mint date:  7/10/22 <br/><br/>
                          - Second, we will get better marketing,  <br/><br/>
                          - This a must 100%! <br/><br/>
                          - Staking application <br/><br/>
                          - MetaVerse Society P2E game <br/><br/>
                          - MetaVerse Staking & Yield Farming  <br/><br/>
                          - Casino & Lottery 
                        </p>
                        <div className="vactor flex">
                          <img src="./images/vector.png" className="img" />
                        </div>
                      </p>
                    </div>
                    <div className="left_content font-h">
                      <h3 classNam="font-h">Phase 1 - Start Development</h3>
                    </div>
                  </li>
                  <li>
                    <div className="right_content">
                      <p>
                          - 15% minted we will deploy our Staking application<br/><br/>
                          - Add a very decent amount into liquidity for MeVerse (MEV) Token,  
                          We are hoping to add 50k-100k to give our token a lot of value! <br/><br/>
                          - Deploy MeVerse (MEV) Token  <br/><br/>
                          - Airdrop Gamma ZZ & Gamma ZZZ token boost! <br/><br/>
                          - Start developing community DAO 
                      </p>
                      <div className="vactor flex">
                        <img src="./images/vector.png" className="img" />
                      </div>
                    </div>
                    <div className="left_content font-h">
                      <h3 classNam="font-h">Phase 2 - Deploy</h3>
                    </div>
                  </li>
                  <li>
                    <div className="right_content">
                      <p>
                          - Deploy the P2E game <br/><br/>
                          - 60% minted - Start the development of the Marketplace <br/><br/>
                          - Start a new collection the community decides on!
                      </p>
                      <div className="vactor flex">
                        <img src="./images/vector.png" className="img" />
                      </div>
                    </div>
                    <div className="left_content font-h">
                      <h3 classNam="font-h">Phase 3</h3>
                    </div>
                  </li>
                  <li>
                    <div className="right_content">
                      <p>
                          Society 2.0 is coming for our future.
                      </p>
                      <div className="vactor flex">
                        <img src="./images/vector.png" className="img" />
                      </div>
                    </div>
                    <div className="left_content font-h">
                      <h3 className="font-h">Phase 4</h3>
                    </div>
                  </li>
                  <div style={{ clear: "both " }}></div>
                </ul>
              </div>
            </div>
            <div className="matavers-desc flex flex-col">
              <div className="tag font-h">
                We are actively seeking investors and or partnerships!
              </div>
              <div className="des">
                We encourage you to join our official Discord and follow us on
                other social media for more exciting news, sneak peeks,
                giveaways, and much more.
              </div>
            </div>
            <div className="about-artist flex flex-col">
              <div className="tag font-h">Our Artist</div>
              <div className="artist-info flex aic">
                <div className="left flex aic  jc">
                  <img src="./images/381.png" className="img" />
                </div>
                <div className="right flex flex-col">
                  <div className="u-name font-h">Felipe Ferreira</div>
                  <div className="location flex aic">
                    <img src="./images/location.png" className="ico" />
                    <div className="loc-name">Brazil</div>
                  </div>
                  <div className="about-user">
                    Felipe has been in the CG industry for over 7 years and has
                    worked for major production companies around the world.
                    Founded his own studio, Bench Park Studio, that specialized
                    in Prints, Films, and NFTs.
                  </div>
                  <a href="" target="_blank" className="ico-lk">
                    <LnIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="u-protfolio flex">
              <div className="box flex flex-col">
                <div className="tag">Portfolio:</div>
                <div className="list flex flex-col">
                  <div className="list-item flex aic  ">
                    <div className="dot flex"></div>
                    <div className="flex">
                      Clash Royale - Modeler and texture/graphics developer for
                      some assets and characters
                    </div>
                  </div>
                  <div className="list-item flex aic  ">
                    <div className="dot flex"></div>
                    <div className="flex">
                      Hay Day - Participated in two movie trailers as a
                      texture/look developer
                    </div>
                  </div>
                  <div className="list-item flex aic  ">
                    <div className="dot flex"></div>
                    <div className="flex">
                      Pepsi - Designed models and textures for a commercial
                    </div>
                  </div>
                  <div className="list-item flex aic  ">
                    <div className="dot flex"></div>
                    <div className="flex">
                      Free Fire - Contributed to the film commercial for ''Free
                      Fire World Series 2019 - Championship''
                    </div>
                  </div>
                  <div className="list-item flex aic  ">
                    <div className="dot flex"></div>
                    <div className="flex">
                      Brio - Developed textures and looks
                    </div>
                  </div>
                  <div className="list-item flex aic  ">
                    <div className="dot flex"></div>
                    <div className="flex">
                      Boticario - Developed both textures and visuals
                    </div>
                  </div>
                  <div className="list-item flex aic  ">
                    <div className="dot flex"></div>
                    <div className="flex">
                      Mitsubishi - Modeler and texture/look developer for
                      commercial films
                    </div>
                  </div>
                  <div className="list-item flex aic  ">
                    <div className="dot flex"></div>
                    <div className="flex">
                      Doritos - Texture Development in a Commercial
                    </div>
                  </div>
                  <div className="list-item flex aic  ">
                    <div className="dot flex"></div>
                    <div className="flex">
                      Bradesco - Served as texture/graphics developer on "Volte
                      a Brilhar em 2021"
                    </div>
                  </div>
                  <div className="list-item flex aic  ">
                    <div className="dot flex"></div>
                    <div className="flex">
                      Eisenbahn - Texture/look developer & lighting designer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="team" className="our-team flex flex-col">
              <div className="tag font-h">Our Team</div>
              <div className="team-block">
                {teamUsers.map((item, index) => (
                  <div className="team-card flex flex-col aic">
                    <div className="user-img flex aic jc">
                      <img src={item.img} className="img" />
                    </div>
                    <div className="user-info flex flex-col aic">
                      <div className="t-name font-h">{item.name}</div>
                      <div className="lbl">{item.lbl}</div>
                      <div className="location flex aic">
                        <img src="./images/location.png" className="ico" />
                        <div className="loc-name">{item.loc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="world-map flex aic jc">
              <WorldMap />
            </div> */}
            <div className="nfts-logo flex aic jc">
              <img src="./images/nft-logo2.png" className="img" />
              <a href="https://nftcalendar.io/event/metaverse-society/"><img src="./images/nft-logo1.png" className="img" /></a>
            </div>
            <div className="footer flex flex-col">
              <div className="sec-a flex aic">
                <div className="left flex">
                  <img src="./images/logo.png" className="img" />
                </div>
                <div className="center flex">
                  <div className="items flex aic">
                    <div className="item">Overview</div>
                    <div className="item">About</div>
                    <div className="item">Roadmap</div>
                    <div className="item">Team</div>
                  </div>
                </div>
                <div className="rigth flex">
                  <div className="social-icons flex aic">
                    <div className="ico pointer">
                      <a href="https://www.instagram.com/metaverse_societynft/">
                        <InsIcon />
                      </a>
                    </div>
                    <div className="ico pointer">
                      <a href="https://twitter.com/MetaSociety2022">
                        <TwitterIcon />
                      </a>
                    </div>
                    <div className="ico pointer">
                      <a href="https://discord.gg/metaversesociety">
                        <DiscordIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="copy-right flex aic jc"
          style={{ backgroundImage: `url(/images/Untitled6.png)` }}
        >
          <div className="sec-b flex aic jc">
            <p>2022 Copyrights © MetaVerse Society. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
