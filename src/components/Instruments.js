import React from 'react'
import styled from 'styled-components'

const guitars = [
  "1995 MIJ Fender Jazzmaster with Mustang bridge",
  "2016 Electrical Guitar Company Tyranny",
  "1970s Kent Dreadnought Acoustic ",
  "Custom Allen P-Bass"
];

const InstrumentItem = styled.li`
  list-style: none;
`;

const InstrumentList = () => {
  return (
    <div>
      <dl style={{ margin: 0, color: 'white' }}>
        <dt>Guitars</dt>
        <dd>
          <ul>
            {guitars.map((guitar, i) => (
              <InstrumentItem key={i}>{guitar}</InstrumentItem>
            ))}
          </ul>
        </dd>
        <dt>Pianos</dt>
        <dd />
        <dt>JavaScript</dt>
        <dd>
          JavaScript is the programming language used to define the logic and
          function of a site beyond simple look and feel. Any computation or
          "thinking" is done using JavaScript.
        </dd>
      </dl>
    </div>
  );
};

export default InstrumentList