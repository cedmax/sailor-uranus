import React from 'react'
import Graphs from 'components/Graphs'
import {
  Header, 
  Title,
  Main,
  Footer
} from 'styled/components'

export default (props) => [
    <Header key="header">
      <Title>
        A <strong>Lady</strong> with the dictionary<br/>
        of a well educated <strong>Sailor</strong>
      </Title>
    </Header>,
    <Main key="body">
      <Graphs {...props} />
    </Main>,
    <Footer key="footer">
      Based on a true story — gathered from Whatsapp history.<br/>
      <em>No Animal (or divinity, for what it matters) was harmed in the making of this microsite</em>
    </Footer>
]