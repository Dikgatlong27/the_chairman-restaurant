import React from 'react';

import './PayInfo.css';

const PayInfo = () => {
  return (
    <>
        <div style={{textAlign:'center', marginTop:'2rem'}}>
            <h2 className='app__vacanciesPosts-sub'>Payment details</h2>
            <p className="p__opensans">FNB</p>
            <p className="p__opensans">The Chairman Lifestyle</p>
            <p className="p__opensans">63011069176</p>
            <p className="p__opensans">Cheque Account</p>
            <p className="POP">Send POP to <a className="POP__email" href='mailto:social@chairmanforte.co.za'>social@chairmanforte.co.za</a></p>
        </div>
    </>
    
  )
}

export default PayInfo
