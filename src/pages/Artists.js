import React from  'react'
import styled from 'styled-components'

const artists1 = [
  'Ass Blood',
  'Average Life Expectancy',
  'Baby Blood',
  'Baka',
  'Bludded Head',
  'Boy Scout Manual',
  'Bukkake Moms',
  'Cuckoo Byrds',
  'D Magazine Arts Online',
  'Dallas Bach Society',
  'Danny Kamins',
  'Denton Bach Society',
  'Dim Locator',
  'Drink To Victory',
  'Dust Congress',
  'Eric Smith',
  'Flesh Narc',
]

const artists2 = [
  'Gay Cum Daddies',
  'Geistheistler',
  'H.P. Hatecraft',
  'Jason Worley',
  'Jen Seay',
  'Kaboom',
  'Kampfgrounds',
  'Last Men',
  'Lil Tedley',
  'Matthew Frerck',
  'Midnite Society',
  'Monte Espina',
  'Moon Pussy',
  'Notes From Underground',
  'Orange Coax',
  'Princess Haultaine III',
  'Quartet Galant',
]

const artists3 = [
  'Rayzor Ranch Davidians',
  'Red Faced Laughter',
  'The Rents',
  'Rival Gang',
  'Karl Roehling',
  'Sandy Ewan / Chase Gardner',
  'Seres',
  'Seth Sherman',
  'Sexual Jeremy',
  'Shiny Around the Edges',
  'Steve Jansen',
  'Sunday Black',
  'Terminator 2',
  'Tiger Hatchery',
  'Trifle Tower',
  'Vulgar Fashion',
  'Zanzibar Snails',
]

const Text = styled.div`
  font-size: 20px;
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 124px;
`

const Artists = () => <div>
  <Wrap>
    <div>
      {artists1.map((artist, i) => {
        return <Text key={artist}>{artist}</Text>
      })}
    </div>
    <div>
      {artists2.map((artist, i) => {
        return <Text key={artist}>{artist}</Text>
      })}
    </div>
    <div>
      {artists3.map((artist, i) => {
        return <Text key={artist}>{artist}</Text>
      })}
    </div>
  </Wrap>
</div>

export default Artists