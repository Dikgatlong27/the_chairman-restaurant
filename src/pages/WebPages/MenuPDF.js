import React from 'react';
import { Document, Page, Image, Text } from '@react-pdf/renderer';
import LogoImage from '../../assets/chairman.png';
import POne from '../../assets/p1.png';




const MenuPDF = () => {

  return (
    
      <Document style={{background:'#222'}}>
        <Page style={{backgroundColor:'#444'}}>
          <Image src={POne} />
          <Text>Test</Text>
        </Page>
      </Document>
    
  )
}

export default MenuPDF
