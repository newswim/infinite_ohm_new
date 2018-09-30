import React from 'react'
import styled from 'styled-components'

const equipment = [
  {
    type: 'Mixer',
    list: [
      'Acousta P100B 10-channel board originally built for the Vienna Opera House',
      'Yamaha PM400 8-channel mixer',
    ],
  },
  {
    type: 'Converters',
    list: ['Apogee Ensemble', 'Apogee Duet'],
  },
  {
    type: 'Monitors',
    list: [
      'Dynaudio Acoustics BM5A Active Nearfield Monitors',
      'Furman HA-6 Headphone/ Monitor Amplifier System',
    ],
  },
  {
    type: 'Microphones',
    list: [
      'Beyerdynamic M88',
      'Cascade Fat Head (stereo pair)',
      'Coles/ STC 4038',
      'Homemade C12-style Tube Condenser',
      '(5) Josephson c42 ',
      'Peluso P-Stereo Condenser (on loan)',
      'Sin Evil Ribbon',
      'Speiden/ Royer SF-12 Stereo Ribbon',
      '(3) Homemade TapeOp Panasonic Omnis',
    ],
  },
  {
    type: 'Mic Preamps',
    list: [
      '10 Acousta with Haufe transformers on the mic and line inputs and 3-band eq',
      '8 Yamaha with Tamura transformers on the inputs and outputs',
    ],
  },
  {
    type: 'Compressors/ Limiters',
    list: [
      'RNC 1773',
      'RNLA 7239',
      'Purple Audio MC77',
      'Acousta Limiters on master outs of board',
    ],
  },
  {
    type: 'Other Outboard',
    list: [
      'Intersound IVP instrument voicing preamplifier/eq',
      'Audio Digital Line Delay',
      'Radial JDI',
      'Radial ReAmp',
      'The Out Sound Multiplex Tape Echo Effect',
    ],
  },
  {
    type: 'Drum',
    list: [
      '1970s Ludwig Vistalite drum kit 12/13/16/22',
      'Unbadged 13 x 5 acrylic snare',
      'Zildjian 18” Rock Crash',
      'Zildjian 20” Ping Ride',
    ],
  },
  {
    type: 'Piano',
    list: ['1960s Story & Clark Console Piano', 'Hohner Pianet T'],
  },
  {
    type: 'Guitar',
    list: [
      '1995 MIJ Fender Jazzmaster with Mustang bridge',
      '2016 Electrical Guitar Company Tyranny',
      '1970s Kent Dreadnought Acoustic',
      'Custom Allen P-Bass',
    ],
  },
  {
    type: 'Amps',
    list: [
      '1960s Klemt Echolette M100 PA Head/ Guitar Amp',
      '1960s Heath TA-16 Starmaker Solid State Guitar Amp',
      '1970s Sound City 120 Mk 4 Guitar Amp',
      '1990s Sovtek Mig 50 001 Guitar Amp',
    ],
  },
  {
    type: 'Cabinets',
    list: [
      'Homemade TL-606 1 x 15 Speaker Cabinet with EVM-15L',
      'Sin Evil-made TL-606 1 x 15 Speaker Cabinet with EVM-15L',
      'Marshall 1960b 4 x 12 Cabinet',
    ],
  },
  {
    type: 'Effects',
    list: [
      'Prescription Electronics Experience',
      'Roland Double Beat',
      'MidFi Glitch Computer',
      'JMI Studio 2 Fuzz Box',
      'Snarling Dogs Whine-O-Wah',
      'MoogerFooger Low Pass Filter',
      'Hao Rust Booster',
      'Endangered Audio Research Spectravibe',
      'Electro Lobotomy Sub Destruction',
      'Elta Polivoks Filter',
      'Boss DS-1 modified by Will Kapinos',
      'DFx B E A R Fuzz',
      'Prein Pedals LPB-1',
      'ZVEX Lo-fi Loop Junkies',
      'Custom built Fuzzrite',
      'Gibbins Treble Booster',
      'Fuzzhugger Upper',
      'Earthquaker Devices Ghost Echo',
      'Boss FV-500 Volume Pedal',
    ],
  },
]

const Heading = styled.h3`
  border-style: solid;
  border-width: 1px;
  padding: 4px 1em 0px;
  width: 100%;
  border-image: linear-gradient(to right, #16437b, black) 0 0 1;
`

const Li = styled.li`
  list-style-type: none;
  font-size: 19px;
`

const EquipmentTable = () => {
  return (
    <div>
      {equipment.map((item, i) => {
        return (
          <div key={i}>
            <Heading>{item.type}</Heading>
            <ul>
              {item.list.map(t => (
                <Li key={t}>{t}</Li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default EquipmentTable
