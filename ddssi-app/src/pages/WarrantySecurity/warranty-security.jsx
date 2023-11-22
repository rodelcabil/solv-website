import React from 'react'
import { MainContainer } from './warranty-security-styles'

const WarrantySecurity = () => {
    return (
        <MainContainer>
            <p className='text-[#343434] text-7xl font-semibold'>Warranty and Security</p><br /><br />
            <p className='text-[#343434] text-3xl'>Warranty </p><br />
            <p className='text-[#7a7a7a]'>
                Your purchase of SOLV 24 comes with 24 months support for bugs and fixes. After 24 months, the software is fully yours to use as long as you want. An annual support pack/maintenance agreement is available to give you continued access to support beyond 24 months. Our support is available weekdays (5x8) 9AM to 5PM via SOLVdesk 
                (<a href="https://solvdesk.digitaldoorssoftware.com" target="_blank">https://solvdesk.digitaldoorssoftware.com</a>).

            </p><br /><br />
            <p className='text-[#343434] text-3xl'>System Security </p><br />
            <p className='text-[#7a7a7a]'>To ensure system security we highly recommend the following steps:</p>
            <br/>
            <ul className='text-[#7a7a7a]'>
                <li>Change the admin spassword upon turnover of the system.</li>
                <li>Create a junior admin password for DDSSI support. Change the password after conclusion of support.</li>
                <li>Allow DDSSI access to the system for support purposes only.</li>
                <li>Client shall indemnify and hold DIGITAL DOORS SOFTWARE SOLUTIONS INC (DDSSI) free and harmless from any and all claims, damages, or lawsuits (including attorneys' fees) arising out of intentional or negligent acts or omissions by client, its employees or agents.</li>
                <li>It is the responsibility of the client to protect the system and database.</li>
            </ul>
            <br /><br />
            <p className='text-[#343434] text-3xl'>Support Services and Software Customization</p><br />
            <p className='text-[#7a7a7a]'>In addition, we would like to also inform you about our policy for SOLV Support Services / Software Customization.</p><br/>
            <p className='text-[#7a7a7a]'>SOLV Support Services / Software Customization comes with 30 days warranty from User Acceptance. This is to allow a reasonable period to address concerns regarding the Support Services / Software Customization performed. </p><br/>
            <p className='text-[#7a7a7a]'>We value your business and should you have any concerns please don't hesitate to be in touch. </p>
            <br/>
            <br />
        </MainContainer>
    )
}

export default WarrantySecurity