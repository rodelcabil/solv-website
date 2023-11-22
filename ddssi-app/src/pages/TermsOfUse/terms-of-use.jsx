import React from 'react'
import { MainContainer } from './terms-of-use-styles'

const TermsOfUse = () => {

 const link = (link) =>{
    return <a href={link} target='_blank' className='underline-offset-4 break-words hover:text-[#1595FF]'>{link}</a>
 }


  return (
    <MainContainer>
        <p className='text-center text-2xl text-[#343434] font-semibold'>TERMS OF USE</p><br/><br/>
        <p className='text-[#7a7a7a]'>Please read these Terms of Use carefully before using {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")}. Using this website means you have read, understood, and accepted these Terms of Use. The following Terms of Use regulates your usage and access of the website. You are bound by these terms of use by using or accessing this website. If you do not accept these Terms of Use, do not use this website.</p><br/>
        <p className='text-[#7a7a7a]'>{link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} are applicable for retail and personal use purchases only. Wholesale or volume transactions will not be accepted. All transactions are subject to bank verification and credit check.</p>
        <br/>
        <ol type="1" className='numbered-list text-[#7a7a7a]'>
            <li>Using or attempting to use any platform, engine, tool, agent or other devices or mechanism (except for what Digital Doors Software Solution, Inc. (DDSSI) have provided and other 3rd party search engines) to check or navigate {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites.</li>
            <li>Using or attempting to use any platform, engine, tool, agent or other devices or mechanism to intrude with DDSSI’s sites that causes trouble or malfunction within the {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites.</li>
            <li>Violating or attempting to break the {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites and use the sites for any illegal transactions.</li>
            <li>Imitate any person or entity or misrepresent your relationship with any person or entity. Post, promote or communicate through {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} any banned materials in any way. DDSSI reserves the right but not obliged to:</li>
            
        </ol>
        <ol type="a" className='letter-list text-[#7a7a7a] px-6'>
            <li>Restrict any user from accessing or using the site for any reason.</li><br/>
            <li>Observe and control any activity, content or material on the site.</li><br/>
            <li>DDSSI may in sole and absolute discretion, investigate any violation of the terms and conditions stated herein and may take appropriate action needed.</li><br/>
        </ol>
        <br/>
        <p className='text-xl text-[#343434] font-semibold'>CHANGES TO THESE TERMS OF USE</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI reserves the right to change this Terms of Use from time to time, in whole or in part, without prior notice to you. You should check back often so you are aware of your current rights and responsibilities. Your continued use of this website after changes to its Terms of Use have been published constitutes your binding acceptance of the updated Terms of Use. If at any time the Terms of Use are not acceptable to you, you should immediately cease all use of this website.</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI may change the terms of this Agreement from time to time.  By continuing to use any of the {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites after we post any such changes, you accept the Agreement, as modified. DDSSI may, from time to time: upgrade, modify, suspend or discontinue, remove, whether in whole or in part the site and shall not be liable if such upgrade, modify, suspend or discontinue, remove, whether in whole or in part, prevents you from accessing {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")}.</p><br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>SOLVDESK.DIGITALDOORSSOFTWARE.COM USER ACCOUNT</p><br/>
        <p className='text-[#7a7a7a]'>SOLVdesk user account will be needed on certain features of the website. This may require creation of an account with us which requires for you to provide your Personal Data. We may at any time in our sole and absolute discretion, request that you update your Personal Data or immediately invalidate the Username and/or Password without giving any reason or prior notice and shall not be liable or responsible for any Losses suffered by or caused by you or arising out of or in connection with or by reason of such request or invalidation. You hereby agree to change your Password from time to time.</p><br/>
        <p className='text-[#7a7a7a]'>You will be responsible for the confidentiality of your password and for all statements made and modification that occur on your account.  If you believe someone has used your password or account without your authorization, you must notify DDSSI immediately.  Your account may also be restricted or terminated for any reason, at our sole discretion. We may also change, restrict access to, suspend, or discontinue the {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")}, sites or any portion of the sites, at any time without notice.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>PRICING POLICY</p><br/>
        <p className='text-[#7a7a7a]'>Prices on {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} are subject to change without prior notice. This may be due to the consequence of supplier price changes or due to current market situations. DDSSI is determined to ensure accurate price information however, errors may still occur and the price of your order will be validated as part of acceptance procedure.</p><br/>
        <p className='text-[#7a7a7a]'>All prices on {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} site are subject to taxes, unless otherwise stated. DDSSI reserves the right to amend the prices at any time without giving any reason or prior notice.</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI cannot confirm the price of an item until after your order is placed.  Pricing errors may occur on {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites.  DDSSI reserves the right to cancel any orders containing pricing errors, with no further obligations to you, even after your receipt of an order confirmation or shipping notice from DDSSI.  DDSSI may, at its discretion, either contact you for instructions or cancel your order and notify you of such cancellation.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>CONTENT INFORMATION</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI undertakes serious effort to provide accurate descriptions of the products posted on DDSSI site. DDSSI does not guarantee that such description is accurate, current or free from errors.</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI posts variety of material on the DDSSI site including without limitation, merchandise information, product descriptions, reviews, comments, and In Store Now information (collectively, “Materials”).  The Materials that appear on DDSSI site is for educational and informational purposes only.  Despite our efforts to provide useful and accurate information, errors may appear from time to time.  Before you act on information you have found on DDSSI site, you should confirm any facts that are important to your decision.  DDSSI and its information providers make no warranty as to the reliability, accuracy, timeliness, usefulness, or completeness of the information on DDSSI site.  DDSSI is not responsible for, and cannot guarantee the performance of, goods and services provided by our advertisers or others to whose sites we link.  Product information contained on the DDSSI may be different from information contained on the product materials due to manufacturer changes.  If you find a product that is not as described, your sole remedy is to return it in unused condition (excluding the products that are not eligible for return).</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>OFFER TO BUY</p><br/>
        <p className='text-[#7a7a7a]'>By using this website, the customer agrees that the items displayed in www.digitaldoorssoftware.com and https://solvdesk.digitaldoorssoftware.com are mere advertisements or notice to the public that the said goods have been offered by DDSSI.</p><br/>
        <p className='text-[#7a7a7a]'>By clicking the “Buy now” or “add to my cart” or other similar website button, customer is effectively submitting his offer to buy that particular item, which DDSSI may accept or reject.</p>   
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>ORDER REQUIREMENTS</p><br/>
        <span className='text-[#7a7a7a]'>For the security and verification purposes kindly email the following documents to info@digitaldoorssoftware.com</span>
        <ol type="a" className='letter-list text-[#7a7a7a] px-6'><br/>
            <li>Primary ID- Digitized Government ID (one of the following)</li>
            <ol type="i" className='roman-list text-[#7a7a7a] px-6'>
                <li>SSS/Unified Multi-Purpose ID</li>
                <li>GSIS</li>
                <li>Driver’s License</li>
                <li>Professional Regulation Commission (PRC) ID</li>
                <li>GSIS ID</li>
                <li>Passport</li>
            </ol>
            <li>Secondary ID (at least two of the ff.)</li>
            <ol type="i" className='roman-list text-[#7a7a7a] px-6'>
                <li>Voter’s ID</li>
                <li>Postal ID</li>
                <li>Tin ID</li>
                <li>Company ID</li>
                <li>Senior Citizen ID</li>
                <li>NBI ID</li>
                <li>Company ID</li>
            </ol>
        </ol><br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>ORDER PROCEDURE</p><br/>
        <ol type="1" className='numbered-list text-[#7a7a7a]'>
            <li>Orders processing is from Mondays thru Fridays, 9:00am thru cut off time of 3:00pm (Manila Time). Orders placed after cut off shall be processed the next business day.</li>
            <li>For 3rd party purchases (e.g. cardholder’s outside the country who wants to buy appliances and have it delivered to their families in the Philippines), additional requirements shall be required.</li>
            <br/><p className='ml-6'>Please refer to details as follows:</p>
            <ul className='circle-list text-[#7a7a7a] px-10'><br/>
                <li>- Cardholder’s signed authorization letter</li>
                <li>- Clear copy of cardholder’s valid ID with photo and signature.</li>
                <li>- Clear copy of authorized representative/recipient’s valid ID with photo and signature.</li>
            </ul><br/>
            <li>For International credit card, an international valid ID shall be required.</li>
            <li>You may be asked to provide additional information or requirement for verification purposes before we accept the order. Verification normally takes 1-2 days after the cardholder completed the requirements. Please be advised that the additional documents required shall be forwarded within 7 days from the date of order.</li>
            <li>Please take note that there are cases wherein an order cannot be processed for several reasons, such as, restrictions on the maximum number of units that a single customer can purchase. The site has the right to refuse or cancel any order for any of these reasons.</li>
            <li>Once we have completed the verification, we will send you a Confirmation Email.</li>
            <li> Products in this site are normally available for consolidation within 24hrs after the order has been accepted. If an order will not be available within 24hrs, or is out of stock, or if under order basis (7-10 working days) the customer will be notified thru telephone or email as to when the product will be available. The customer on the other hand has the option to cancel the order without any charges.</li>
            <li>For select transactions (Non-OTP and international card), kindly allow additional 3-5 work days processing. We may also get in touch with you to request for a copy of Valid ID.</li>

        </ol><br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>ORDER INFORMATION</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI reserves the right to refuse or cancel an order for any reason including limitations on quantities available for purchase, inaccuracies, or errors in product or pricing information, or problems identified by our credit and fraud avoidance department.  If your order is canceled after your credit card (or other payment account) has been charged, we will issue a credit to your credit card (or other applicable payment account) in the amount of the charge.</p>
        <p className='text-[#7a7a7a]'>DDSSI reserves the right to limit the quantity of items purchased per person, per household or per order for any reason.  These restrictions may apply to orders placed by the same account, the same credit card, and also to orders that use the same billing and/or shipping address.  We will notify you should such limits be applied.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>PROMOTIONAL CODES</p><br/>
        <p className='text-[#7a7a7a]'>Promotional codes are limited in nature and may expire or discontinue with or without notice.  Promotional codes are void where prohibited by law.  Promotional codes may not be copied, sold, or otherwise offered.  They are not redeemable for cash and are subject to cancellation or change at any time for any reason. A replacement may be allowed provided there is a failure on the merchant’s system or error in the email and/or number provided by the customer.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>PAYMENTS</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI supports the following payment methods:</p>
        <ol type="1" className='numbered-list text-[#7a7a7a]'>
            <li>Credit Card or Debit Card</li>
            <li>Cash on Delivery (COD)</li>
            <li>Over the Counter (OTC)</li>
        </ol><br/>
        <p className='text-[#7a7a7a]'>If payment confirmation is not received by DDSSI within three (3) days, order will be automatically cancelled.</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI takes no responsibility and assumes no liability for any loss or damages to the customer arising from shipping information and/or payment information entered by the customer or wrong remittance by the customer in connection with the payment for the items purchased. We reserve the right to check whether the customer is duly authorized to use certain payment method, and may suspend the transaction until such authorization is confirmed or cancel the relevant transaction where such confirmation is not available.</p><br/>
        <p className='text-[#7a7a7a]'>You may not claim against DDSSI for any failure, disruption or error in connection with your chosen payment method. DDSSI reserves the right at any time to modify or discontinue, temporarily or permanently, any payment method without notice to you or giving any reason.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>REFUND OF PAYMENTS</p><br/>
        <p className='text-[#7a7a7a]'>All refunds shall be made via the original payment mechanism and to the person who made the original payment, except for Cash on Delivery, where refunds will be made via bank transfer  into the individual’s bank account provided that complete and accurate bank account details are provided to us or check pick-up on preferred branch of store. Also, all refunds will be deducted with handling and shipping fee incurred on the transaction.</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI reserves the right to modify the mechanism of processing refunds at any time without notice. DDSSI will not provide you a refund for certain goods which by nature cannot be returned.  Such items include items which cannot be resold for health and hygiene reasons once unwrapped (i.e. mattresses, bedding, personal grooming products, and etc.).</p><br/>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>SHIPPING AND DELIVERY PROCEDURES</p><br/>
        <ol type="1" className='numbered-list text-[#7a7a7a]'>
            <li>Delivery and shipment of orders within the Philippines shall be handled by DDSSI  or its affiliate companies or parties as long as destination is covered by its delivery network. Delivery of the products shall be made to the address you specify in your Order.</li>
            <li>Shipping and Packing charges shall be as set out in the Order.</li>
            <li>Orders are normally dispatched on the third day after the order was accepted; delivery lead time are as follows:</li>
            <ol type="a" className='letter-list text-[#7a7a7a] px-6'>
                <li> 1 – 3 working days within Metro Manila</li>
                <li> 5 – 7 working days for Luzon Area</li>
                <li> 8 – 13 days for Visayas and Mindanao</li>

            </ol>
            <li>Upon delivery of item, the cardholder should present the following:</li>
            <ol type="a" className='letter-list text-[#7a7a7a] px-6'>
                <li>Confirmation letter</li>
                <li>Valid ID with photo and signature. (Please refer to acceptable valid ID listed under Order Requirements)</li>
            </ol>
            <li>In the absence of the cardholder, an authorized representative may receive the product provided the following will be presented:</li>
            <ol type="a" className='letter-list text-[#7a7a7a] px-6'>
                <li> Confirmation letter</li>
                <li> Signed authorization letter from cardholder</li>
                <li> Clear copy of cardholder’s valid ID with photo and signature</li>
                <li> Clear copy of representative’s valid ID with photo and signature</li>
            </ol>
            <li>Please observe the guidelines upon delivery which was mentioned above as there will be no release of item without the confirmation letter, valid ID of cardholder, signed authorization letter, if applicable and copy of representative’s valid ID, if applicable.
            <li>DDSSI shall not be held liable for non-delivery of product due to the following circumstances beyond DDSSI’s control and its affiliate partners:</li>
            <ol type="a" className='letter-list text-[#7a7a7a] px-6'>
                <li> Unavailability of cardholder or authorized representative</li>
                <li> Incomplete or incorrect address.</li>
            </ol>
            <p className='text-[#7a7a7a]'>DDSSI reserves the right to charge additional delivery fee/s after the first unsuccessful delivery attempt due to unavailability of the receiver. DDSSI shall wait for customer’s/cardholder’s advice before proceeding to the delivery attempt. If delivery failed on the third attempt, the transaction shall be deemed terminated. Delivery fees and other payments made shall be forfeited.</p>
            </li>
            <li>You acknowledge that delivery of the Products is subject to availability of the Products but you acknowledge that while stock information on the site is updated regularly, it is possible that in some instances a Product may become unavailable between updates. All delivery timeframes given are estimates only and delays can occur. If the delivery of your Product is delayed,  DDSSI will inform you accordingly via e-mail and your Product will be dispatched as soon as it becomes available. The time for delivery shall not be of the essence, and DDSSI (nor any of its affiliates) shall not be liable for any delay in delivery whatsoever caused. In the event you do not receive the Product by the projected delivery date and provided that you inform DDSSI within 3 day immediately from such projected delivery date, DDSSI will try to locate and deliver the Product. If DDSSI does not hear from you within 3 days from such projected delivery date, you shall be deemed to have received the Product subject to your rights under Philippine law.</li>
        </ol>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>ORDER CANCELLATION</p><br/>
        <ol type="1" className='numbered-list text-[#7a7a7a]'>
            <li>DDSSI has the right to cancel any orders received for the following reasons:</li>
            <ol type="a" className='letter-list text-[#7a7a7a] px-6'>
                <li> Force majeure or act of nature, including calamity or bad weather condition, and strikes.</li>
                <li> Circumstances beyond the control of the merchant, including out of stock, system error, item detail dispute, incorrect image, wrong promotion, wrong pricing among others.</li>
                <li> In the event of system error, order/s may be cancelled automatically. From which payment will be refunded within 5-14 working days.</li>
                <li> Non-compliance to order requirements.</li>
                <p>Should your order be cancelled for whatever reason, you will be duly notified via e-mail by DDSSI</p><br/>
                <p>A DDSSI representative will facilitate a full refund of any payments made to DDSSI.</p><br/>
                <p>In case of dispute, the company’s decision will prevail.</p><br/>
                <p>All purchases are subject to the terms and conditions of Accenthub.</p><br/>
            </ol>
            <li>You may cancel the order by the following process:</li>
            <ol type="a" className='letter-list text-[#7a7a7a] px-6'>
                <li> Log-in to your {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} account</li>
                <li> Track your order status. If the product is already in transit for delivery, you may not cancel your order.</li>
                <li> Click “Cancel your Order”</li><br/>
                <p>A confirmation from your {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} account will prompt once your order has been successfully cancelled. All delivery fees incur on the transaction shall not be refundable.</p>
            </ol><br/>
            <li>DDSSI may stop any products in transit, suspend further deliveries to the customer and/or terminate the customer contract with immediate effect by written notice to the customer on or at any time after the product is unavailable for any reason.</li>
        </ol>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>RISK OF LOSS</p><br/>
        <p className='text-[#7a7a7a]'>At the time of delivery, risk of loss and/or damage to the products will be transferred to you. Ownership over the products will only be passed to you when we receive full payment of all sums due from you, including delivery charges.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>RETURN AND EXCHANGE POLICY</p><br/>
        <ol type="1" className='numbered-list text-[#7a7a7a]'>
            <li>Replacement of unit due to change of mind is not allowed. Only defective goods can be returned or exchanged.</li>
            <li>If the item was defective, customer shall inform DDSSI within 7 days. Kindly send us an email at info@digitaldoorssoftware.com and a Customer Service Representative will get in touch with you to investigate and provide you with instructions on the matter. In case customer informed DDSSI later than 7 days, the concern will still be investigated but item replacement will be under manufacturer’s disposition.</li>
            <li>Please note that the item must be in its original delivery condition and sent back to us with prepaid shipping charges and insured for the full purchase price, with original copy of Sales Invoice. Shipping and handling charges are non-refundable. DDSSI may charge administrative and handling charges depending on the circumstances of the return.</li>
            <li>Here are the list of reasons why customers can return their purchased product:<br/><br/>
                <p>Item not as advertised – item(s) received is not as expected based on website purchase.</p>
                <p>Wrong Item Delivered – item(s) received by the customer is not the same product he/she ordered.</p>
                <p>Damaged Item – item(s) received by the customer may have dents, scratches or any issues that relates to cosmetics quality.</p>
                <p>Defective item – item(s) received by the customer is not working properly or it has “Factory Defect”. Missing Accessories/Item – Some parts or bundles of the order is missing</p>
            </li>
        </ol>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>ITEM WARRANTY</p><br/>
        <ol type="1" className='numbered-list text-[#7a7a7a]'>
            <li> The commitment of DDSSI is to provide support and assistance to customers who would like to avail of the manufacturer’s warranty.</li>
            <li> Kindly ensure to keep the Official Sales Invoice for warranty purposes.</li>
            <li> In case the item purchased online has a problem, customer may email us at info@digitaldoorssoftware.com for proper instructions.</li>
            <li> All reported items claiming under warranty, are subject to manufacturer’s verification or investigation. Warranty claims will be according to manufacturer’s disposition.</li>
            <li> DDSSI is not liable for any losses suffered by any third party directly or indirectly caused by repairs or remedial work carried our without DDSSI’s prior written approval; and the customer shall indemnify DDSSI against all losses arising out of such claims.</li>
            <li> DDSSI shall be under no liability under the above warranty (or any other warranty, condition or guarantee) if the total price for the Products has not been paid in cleared funds by the due date for payment.</li>
            <li> To the extent allowed under Philippine law, DDSSI shall be under no liability whatsoever in respect of any defect in the Products arising after the expiry of the applicable Product Warranty, if any.</li>
        </ol>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>TRADEMARKS</p><br/>
        <p className='text-[#7a7a7a]'>The trademarks, logos, and service marks displayed on this website are the property of DDSSI or their respective owners. You are not permitted to use these items without the prior written consent of DDSSI or their respective owners.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>COPYRIGHTS</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI either owns the intellectual property rights in the content that is made available on this website, or has obtained the permission of the owner to make it available on this website. DDSSI strictly prohibits the redistribution or copying of this website, in whole or in part, without written permission from DDSSI. This website authorizes you to display on your computer, download, or print the pages from this website provided:</p>
        <br/><ol type="a" className='letter-list text-[#7a7a7a] px-6'>
            <li> The copyright notice appears on all printouts.</li>
            <li> The information is intact and will not be altered in any way.</li>
            <li> The content is used for personal, educational, or non-commercial use only.</li><br/>
        </ol>
        <p className='text-[#7a7a7a]'>You do not redistribute or copy the information to any other media. DDSSI respects the intellectual property of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us immediately at the contact information provided below. Please include the following:</p>
        <br/><ol type="a" className='letter-list text-[#7a7a7a] px-6'>
            <li> A description of the intellectual property that you claim has been infringed.</li>
            <li> A description of the material that you claim is infringing on the said intellectual property.</li>
            <li> An address, telephone number, and email address where you can be contacted.</li><br/>
        </ol>
        <p className='text-[#7a7a7a]'>Include the statement: “I have a good faith belief that use of the copyrighted materials described above as allegedly infringing is not authorized by the copyright owner, its agent, or the law.” Include the statement: “I swear, under penalty of perjury, that the information in the notification is accurate and that I am the copyright owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.” Your physical signature.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>EXCLUSION OF LIABILITY</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI’s security shall not be liable to you for any Losses whatsoever or howsoever caused (regardless of the form of action) arising directly or indirectly in connection with  any system, server or connection failure, error, omission, interruption, delay in transmission, computer virus or other malicious, destructive or corrupting code, agent program or macros; and any use of or access to any other website or webpage linked to the site, even if we or our officers or agents or employees may have been advised of, or otherwise might have anticipated, the possibility of the same. Any risk of misunderstanding, error, damage, expense or Losses resulting from the use of the site is entirely at your own risk and we shall not be liable therefore.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>DDSSI, ITS AFFILIATES, AND AGENTS ASSUME NO RESPONSIBILITY FOR ANY CONSEQUENCE RELATING DIRECTLY OR INDIRECTLY TO ANY ACTION OR INACTION YOU TAKE BASED ON THE MATERIALS LOCATED ON ANY OF {link("WWW.DIGITALDOORSSOFTWARE.COM")} and {link("HTTPS://SOLVDESK.DIGITALDOORSSOFTWARE.COM")} SITES</p><br/>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>CONTENT SUBMISSION AND INFORMATION</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI allows users to submit and share comments, feedback, submissions, suggestions, questions, reviews, and other content through {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites.</p><br/>
        <p className='text-[#7a7a7a]'>By submitting Content, you warrant that (1) you are the sole author and owner of the Content; (2) you are at least 18 years old or if you are under the age of 18, you are at least 13 years old and your submission has been made under the supervision of a parent of legal guardian who agrees to be bound by this Agreement; and (3) use of any Content you supply will not violate any term of this Agreement and will not cause injury to any person or entity.</p><br/>
        <p className='text-[#7a7a7a]'>If you make any submission to DDSSI site, you automatically grant, or warrant that the owner of such content has expressly granted DDSSI, a royalty-free, perpetual, irrevocable, worldwide, unlimited, nonexclusive license to use, reproduce, create derivative works from, modify, publish, edit, translate, distribute, perform, and display the communication or content material in any media or medium, or any form, format, or forum now known or hereafter developed.  You should not submit any Content to us that you do not wish to license to us.  DDSSI is and shall be under no obligation (1) to maintain any Content in confidence; (2) to pay any compensation for any Content; or (3) to respond to any user Content.  You grant DDSSI the right to use the name that you submit in connection with any Content.</p><br/>
        <p className='text-[#7a7a7a]'>Although DDSSI cannot monitor all Content, you understand that DDSSI shall have the right, but not the obligation, to monitor the Content of the {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites to determine compliance with this Agreement and any other operating rules that may be established by DDSSI from time to time.  DDSSI shall have the right, in its sole discretion, to edit, move, delete, or refuse to post any Content submitted, to or posted on, {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites for any reason, including violation of this Agreement, whether for legal or other reasons.  Notwithstanding this right of ours, you are solely responsible for any Content you submit and you agree to indemnify DDSSI and its affiliates for all claims resulting from any Content you submit.</p>
        <p className='text-[#7a7a7a]'>DDSSI may, from time to time, be required by government agencies to disclose certain information in connection with any audit and investigation. You understand that we are not required to contest any demand made by an authority for such information.</p><br/>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>SUBMISSION OF IDEAS</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI or any of its employees do not accept or consider unsolicited ideas, including ideas for new advertising campaigns, new promotions, new products or technologies, processes, materials, marketing plans, or new product names. Please do not send any original creative artwork, samples, demos, or other works. The sole purpose of this policy is to avoid potential misunderstandings or disputes when DDSSI products, services, or marketing strategies might seem similar to ideas submitted to {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites. Please do not send your unsolicited ideas to DDSSI or anyone at {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites. If, despite our request, you still send us your ideas or materials, please understand that DDSSI makes no assurances that your ideas or materials will be treated as confidential or proprietary.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>RULES OF CONDUCT</p><br/>
        <p className='text-[#7a7a7a]'>Your use of this website is subject to all applicable local, national and international laws and regulations, and you agree not to violate such laws and regulations. Any attempt by any person to deliberately damage this website is a violation of criminal and civil laws. DDSSI reserves the right to seek damages from any such person to the fullest extent permitted by law.</p><br/>
        <p className='text-[#7a7a7a]'>In addition, you agree not to post or transmit through this website any material or content that violates or infringes in any way the rights of others or solicits, encourages or promotes the use of illegal substances or activities, which is unlawful, threatening, abusive, harassing, defamatory, libelous, derogatory, invasive of privacy or publicity rights, vulgar, obscene, bigoted or hateful, profane, scandalous, pornographic, indecent or otherwise objectionable, gives rise to civil or criminal liability or otherwise violates any applicable law. You may not engage in any activity on this website that restricts or inhibits any other user from using or enjoying this website by “hacking”, “cracking”, “spoofing”, or defacing any portions of this website.</p><br/>
        <p className='text-[#7a7a7a]'>You may not post or transmit through this website advertising or commercial solicitations; promotional materials relating to website or online services which are competitive with DDSSI and/or this website; software or other materials that contain viruses, worms, time bombs, Trojan horses, or other harmful or disruptive components, political campaign materials; chain letters; mass mailings, spam mail, any robot, spider, site search/retrieval application, or other manual or automatic device or process to retrieve, index, “data mine”, or in any way reproduce or circumvent the navigational structure or presentation of this website or its contents. You may not harvest or collect information about website visitors without their express written consent.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>GLOBAL AVAILABILITY</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI controls this site from its Philippine offices. If you use this website from other locations you are responsible for compliance with applicable local laws. DDSSI makes no representation that the products and services referenced herein are appropriate, or available, worldwide and in fact certain products and services may not be available worldwide.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</p><br/>
        <p className='text-[#7a7a7a]'>DDSSI is not responsible if the information that is made available on this website is not accurate or complete. Any reliance upon the material on this website shall be at your own risk. You agree that it is your responsibility to monitor any changes to the material and the information contained on this website.</p><br/>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>DISCLAIMER</p><br/>
        <p className='text-[#7a7a7a] font-semibold'>THIS WEBSITE AND ALL CONTENT, MATERIALS, INFORMATION, SOFTWARE, PRODUCTS AND SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. YOUR USE OF THIS WEBSITE IS AT YOUR OWN RISK. DDSSI MAKES NO WARRANTIES OR REPRESENTATIONS, EXPRESSED OR IMPLIED, AS TO THE FUNCTIONALITY OR USEFULNESS OF THIS WEBSITE OR ANY CONTENT. DDSSI DISCLAIMS ALL WARRANTIES, EXPRESSED OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. ACCENTHUB DISCLAIMS LIABILITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, PUNITIVE OR OTHER DAMAGES, OR LOST PROFITS, THAT MAY RESULT, DIRECTLY OR INDIRECTLY, FROM YOUR USE OF THIS WEBSITE OR ANY CONTENT, INCLUDING WITHOUT LIMITATION ANY DAMAGE TO COMPUTER SYSTEMS, HARDWARE OR SOFTWARE, LOSS OF DATA, OR ANY OTHER PERFORMANCE FAILURES, OR ANY ERRORS, BUGS, VIRUSES OR OTHER DEFECTS THAT RESULT FROM OR ARE ASSOCIATED WITH THE USE OF THIS WEBSITE OR ANY CONTENT. DDSSI MAKES NO WARRANTY THAT, (I) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR FREE, (II) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE, (III) THE QUALITY OF ANY PRODUCTS, SERVICES, CONTENT, INFORMATION, OR OTHER MATERIALS PURCHASED OR OBTAINED BY YOU THROUGH THE WEBSITE WILL MEET YOUR EXPECTATIONS, (IV) ANY ERRORS IN THE SOFTWARE WILL BE CORRECTED, OR THAT THIS WEBSITE, ITS CONTENT, AND THE SERVER ON WHICH THE WEBSITE AND CONTENT ARE AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ANY MATERIAL (INCLUDING CONTENT) DOWNLOADED OR OBTAINED THROUGH THE USE OF THIS WEBSITE IS DONE AT YOUR OWN RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY MATERIAL. INFORMATION CREATED BY THIRD PARTIES THAT YOU MAY ACCESS ON THIS WEBSITE OR THROUGH LINKS IS NOT ADOPTED OR ENDORSED BY DDSSI AND REMAINS THE RESPONSIBILITY OF THE THIRD PARTY.</p><br/>
        <p className='text-xl text-[#343434] font-semibold'>LIMITATION OF LIABILITY</p><br/>
        <p className='text-[#7a7a7a] font-semibold'>TO THE FULLEST EXTENT PERMITTED BY LAW, DDSSI IS NOT LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES (INCLUDING, WITHOUT LIMITATION, LOSS OF BUSINESS, REVENUE, PROFITS, GOODWILL, DATA, ELECTRONICALLY TRANSMITTED ORDERS, OR OTHER ECONOMIC ADVANTAGE) ARISING OUT OF OR IN CONNECTION WITH THE WEBSITE, EVEN IF DDSSI HAS PREVIOUSLY BEEN ADVISED OF, OR REASONABLY COULD HAVE FORESEEN, THE POSSIBILITY OF SUCH DAMAGES, HOWEVER THEY ARISE, WHETHER IN BREACH OF CONTRACT OR IN TORT (INCLUDING NEGLIGENCE), INCLUDING WITHOUT LIMITATION DAMAGES DUE TO (a) THE USE OF OR THE INABILITY TO USE THE WEBSITE; (b) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO, THROUGH OR FROM THE WEBSITE; ( c) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE WEBSITE, INCLUDING WITHOUT LIMITATION UNAUTHORIZED ACCESS TO OR ALTERATION OF TRANSMISSIONS OR DATA, MALICIOUS OR CRIMINAL BEHAVIOR, OR FALSE OR FRAUDULENT TRANSACTIONS, OR (d) CONTENT OR INFORMATION YOU MAY DOWNLOAD, USE, MODIFY OR DISTRIBUTE. TO THE EXTENT ANY JURISDICTION DOES NOT ALLOW THE EXCLUSION OR LIMITATION OF DIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES, PORTIONS OF THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>JURISDICTION</p><br/>
        <p className='text-[#7a7a7a]'>This agreement and all claims relating to the relationship between the parties are governed by the laws of the Republic of the Philippines.</p>
        <p className='text-[#7a7a7a]'>If one or more of the provisions contained in this Agreement is held invalid, illegal or unenforceable in any respect by any court of competent jurisdiction, such holding will not impair the validity, legality, or enforceability of the remaining provisions.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>NOTICES</p><br/>
        <p className='text-[#7a7a7a]'>Notices from us: All notices or other communications given to you if:  (a) communicated through any print or electronic media as we may select will be deemed to be notified to you on the date of publication or broadcast; or (b) sent by post or left at your last known address will be deemed to be received by you on the day following such posting or on the day when it was so left. You may only give notice to us in writing sent to our designated address or e-mail address, and we shall be deemed to have received such notice only upon receipt. While we endeavor to respond promptly to notices from you, we cannot guarantee that we will always respond with consistent speed. We may from time to time designate other acceptable modes of giving notices (including but not limited to e-mail or other forms of electronic communication) and the time or event by which such notice shall be deemed given.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>TERMINATION</p><br/>
        <p className='text-[#7a7a7a]'>This Agreement is effective unless and until terminated by either you or DDSSI.  You may terminate this Agreement at any time, provided that you discontinue any further use of {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites.  DDSSI also may terminate this Agreement at any time and may do so immediately without notice, and accordingly deny your access to {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites, if in DDSSI’s sole discretion you fail to comply with any term or provision of this Agreement.  Upon any termination of this Agreement by either you or DDSSI, you must promptly destroy all materials downloaded or otherwise obtained from {link("www.digitaldoorssoftware.com")} and {link("https://solvdesk.digitaldoorssoftware.com")} sites, as well as all copies of such materials, whether made under this Agreement or otherwise.  The following sections shall survive any termination of this Agreement: “Terms of Use,” “Content Information,” “Offer to buy,” “Order Procedure,” “Pricing Policy,” “Copyrights,” “Termination,” “Disclaimer,” “Jurisdiction,” “Limitation of Liability,” and “Privacy Policy.”</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>GENERAL</p><br/>
        <p className='text-[#7a7a7a]'>This Agreement represents the complete agreement between the parties and supersedes all prior agreements and representations between them.  Headings used in this Agreement are for reference purposes only and in no way define or limit the scope of the section.  If any provision of this Agreement is held to be unenforceable for any reason, such provision shall be reformed only to the extent necessary to make it enforceable and the other terms of this Agreement shall remain in full force and effect.  The failure of DDSSI to act with respect to a breach of this Agreement by you or others does not constitute a waiver and shall not limit DDSSI’s rights with respect to such breach or any subsequent breaches.  This Agreement shall be governed by and construed under Philippines law without regard to conflicts of law provisions.  Any action or proceeding arising out of or related to this Agreement or your use of DDSSI sites must be brought in the courts of the Philippines and you consent to the exclusive personal jurisdiction of such courts.</p>
        <br/><br/>
        <p className='text-xl text-[#343434] font-semibold'>PRIVACY POLICY</p><br/>
        <p className='text-[#7a7a7a]'>You may see our <a href="/privacy-policy" target='_blank' className='underline-offset-4 hover:text-[#1595FF]'>Privacy Policy</a> here.</p>
    </MainContainer>
  )
}

export default TermsOfUse