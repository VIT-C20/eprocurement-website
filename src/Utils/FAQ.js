export const GENERAL = [
{
    id:1,
    question:"What is E-Procurement System ?",
    answer:"eProcurement System is a process of procuring the items electronically using internet. This facility drastically reduces the tendering cycle time and reduces most of the indirect costs and enhances transparency in procurement."
},
{
    id:2,
    question: "What are the requirements of the client machine to access the e-Procurement site ?",
    answer: "To access the eProcurement system, you need a computer system with Pentium IV configuration and above and an internet connection. It is recommended that the connection can be a dedicated connection for smooth operation of the system.The Browser should be Java enabled. ( Mozilla Firefox / Google Chrome / Internet Explorer)The driver for the Digital Signature Certificate (DSC) is to be installed in the system once. The drivers are provided by the DSC providers along with DSC ( in CD or can be downloaded).Java Runtime Environment (JRE) should be installed in the client system. This can be downloaded from the download links of the eProcurement System.You may kindly note that, the client system should have administrator privilege to install the DSC drivers and JRE."
},
{
    id:3,
    question: "Can I access my eProcurement Account from a different client system ?",
    answer: "You can use your account anywhere in the world with the above mentioned configuration (as in S. no.2 ). You need to carry your DSC with you."
},
{
    id:4,
    question: "What is the default Date and Time format used in the System ?",
    answer: "The Default date time format is Indian Standard Time (IST), Which is (GMT +5:30). The format used is DD-Mon-YYYY HH:Mi AM/PM. This standard convention is followed in all the pages."
},
{
    id:5,
    question: "What are the basic features available in this Procurement Portal as a general user ?",
    answer: "The users can use the link 'Latest Active Tenders' available in the Home Page of this portal, to see all the tenders hosted on this Portal and download the Tender Schedule free of cost.The link 'Tenders by Closing Date' gives the facility to view the Tenders which are closing Today or closing within next 7 days or closing within next 14 days.The link Corrigendum lists all the corrigenda published for the related Tenders.The site also provides facility to search for tenders on various parameters such as Tenders based on value, department, product category, etc."
},
{
    id:6,
    question: "Should I have any Anti Virus software in my client system ?",
    answer: "All are advised to install and keep an update of the signatures of the Antivirus. Bids with virus infected files are likely to be rejected by the eProcurement Portal."
},
{
    id:7,
    question: "Many documents have to be uploaded as PDF document. Sometimes, it is seen that Autocad drawings are required to be uploaded.Can I have some software for creating or viewing these documents ?",
    answer: "In the Home Page, under the downloads link, links for the software that are required for working with the application are given. These links point to the Open Source software and hence no licensing is required for using any of these software. Few of the links include Open Office, Adobe Reader, PDF Creator, DWF Viewer etc.,DWF viewer can be used to view the Autocad documents which are uploaded in DWF format."
},
{
    id:8,
    question: "I have uploaded the documents after digitally signing all the documents. Should I submit paper documents ink signed and submit to the TIA office ?",
    answer: "No. As per the IT ACT 2000, the Digitally signed document is as good as paper document for all legal purposes. Hence, there is no need to submit all the documents physically. However, when the physical documents are requested for cross checking purposes, the same need to be produced for verification. However, In the case of offline payment instruments, the physical documents need to be submitted before the bid opening event."
},
{
    id:9,
    question: "Whether Can I Upload BoQ with Currencies other than Indian Rupees ?",
    answer: "Yes. There is a separate BoQ for facilitating BoQ with International Currencies. The same is to be used while creating the BoQ. As on date, six currencies are allowed and each bidder can submit his bid with any one of the 6 foreign currencies of his choice. The rates as applicable on the date of opening will be used for comparative purposes. The system will give the indicative rates on the dates of opening and TIA has the option to override the system defined rates."
}
];

export const OnlineEnrollment = [
{
    id:1,
    question:" How do I get enrolled in the eProcurement Portal ?",
    answer: "Online enrolment for eProcurement is very simple as a bidder. Go to Tenders Home Page Click on Online Bidder Enrollment link and just fill up the registration form online. On successful submission, the registered login id can be used to login. Then login again and map your Digital Signature certificate with your account, which completes the online enrolment process.Bidders require class 3 DSC with only Signing Certificate, to be mapped on the portal."
},
{
    id:2,
    question: "How much does it cost to enroll online ?",
    answer: "NIC does not charge the Bidders for enrollment. The same is dependent on the Organization policy.Please check with the organization."
},
{
    id:3,
    question: "If I am enrolled online, how long my enrollment is valid ?",
    answer: "Your enrollment is valid as long as your business exists. However upon expiry of your Digital Signature Certificate (DSC), you have to renew your DSC from the Certifying Authority and re-enroll the DSC. This might be different in some of the States eprocurement system, where in you may have to check with the respective authorities will approve your enrollment only then, you will be able to participate."
},
{
    id:4,
    question: "How do I log on to eProcurement system after I have enrolled? online ?",
    answer: "After registering on eProcurement system, You can just login, using the user ID, password and the Digital Signature Certificate, in to the portal."
},
{
    id:5,
    question: "Is it possible to edit my profile details entered during online enrollment ?",
    answer: "Yes, after logging in to the system, on the Dash Board, you may edit your details by clicking edit profile. Almost, all information except your login-id can be changed."
}
];

export const Password = [
{
    id:1,
    question:"I have lost my password. How can I retrieve it ?",
    answer: `"You can click on Generate / Forgot Password" and the new password will be sent to you by mail, to the alternate email id mentioned in your profile.`
},
{
    id:2,
    question: "How do I change my password ?",
    answer: "After logging into your account, you will find a link to \"Change Password\" in your dash board."
},
{
    id:3,
    question: "Is the password secured ?",
    answer: "Password is encrypted at the database level. It is known only to you. Even the System Administrator does not know your password. As a part of the security policy, we advise you to change the password in regular intervals."
}
];

export const DSCRelated = [
{
    id:1,
    question:"How much time is required for the new DSC to be recognized by the eProcurement portal ?",
    answer: "At the time of enrollment in this e-Procurement portal, the Bidders should ensure that the status of DSC is active on this site. The activation of newly issued DSC may take up to 24 hrs. Hence users who are obtaining new DSCs should register at least 24 hrs in advance to avoid last minute problems in enrollment."
},
{
    id:2,
    question: "If the enrolled DSC gets expired and if I get a new DSC, how to map with the existing registered loginid ?",
    answer: "a) Scenario I - When old DSC has expired and user has got new DSC :If the enrolled DSC has expired, the system automatically inactivates the same and prompts for another DSC to be enrolled (afresh) at the next login.b) Scenario II -When old DSC is due for expiry and user has got new DSC :If the user wants to register with a new DSC, when the existing DSC is due for expiry, first login to the system with the Old DSC. Click on DSC information from the Dash board and click on remove. Then logout of the system. Now login again,the system prompts to enroll DSC and the new DSC can be enrolled. Caution : Never remove the Old encryption from the device. The old encryption certificates lying in the eToken must not be deleted. They should always be retained. Any of the tenders which have been configured with these old certificates as bid openers cannot be opened, if certificates have been deleted from the token."
},
{
    id:3,
    question: "Can I use the same DSC in enrolling for more than one loginid in the same site ?",
    answer: "No, at any point of time only one DSC can be mapped with one user account."
},
{
    id:4,
    question: "I already have purchased one DSC for use in other etendering system. Can I use the same DSC for this portal ?",
    answer: "Yes. As long as the DSC is valid and as per the requirements of the eProcurement portal, the same can be enrolled in this site."
},
{
    id:5,
    question: "Whether soft copy of Encryption Certificate should be taken form DSC Service Provider ?",
    answer: `<p>"Pls refer FAQs available on CCA website http://www.cca.gov.in/cca/?q=Faq.html under Digital Signature Certificate
    The same is reproduced again:
    
    Digital Signature Certificate
    
    Should individual's signature and encryption certificate be different?
    
    Yes, The signature and encryption certificate should be separate for an individual. The encryption keys are to be generated at the subscriber's system and should be archived prior to transfer into crypto-medium. The signature keys should be generated in the crypto-medium and should not be copied.
    
    Hence, during procurement of DSC, Concerned User must ensure to keep the soft copy of Encryption Certificate in safe custody like mail, CD or pendrive."</p>`
},
{
    id:6,
    question: "What is the best practice in renewal of DSC pertaining to Department User ?",
    answer: `If Department User has to renew DSC on its expiry, it is advised to either get DSC in new token and old token kept intact.

    Or, In case, Department User is getting the new Certificates in old token only, then kindly ensure that old Encryption certificate are not deleted as the same Encryption Certificate would be required during opening of tenders in which bids are encrypted with old encryption certificates.`
},
{
    id:7,
    question: "What if my DSC gets blocked ?",
    answer: "DSC gets blocked after certain no of unsuccessful attempts of entering the wrong PIN. A blocked DSC cannot be used in the e-tendering system unless it is unblocked. To unblock your DSC please contact the service provider who has issued the DSC."
},
{
    id:8,
    question: "When I Connect to the site with https://<URL> I get an error message. How do I overcome this problem ?",
    answer: "As per the IT Act, the site uses SSL certificate issued by CA, India. Few of the browsers trust the certificates and few of them are in the process of trusting the same. You may kindly download the Trust Chain from the download link and trust these once, (A write up on trusting is also made available in the downloads), after that these error messages will not appear."
},
{
    id:9,
    question: "Whether Digital Signature (DSC) of one agency can be used for uploading of bid documents of another company or agency?",
    answer: "No. DSC of one company or agency cannot be used for uploading of bid documents by another company or agency. If it is used, the same is illegal under Information Technology Act (IT ACT) and will attract offenses as per the provisions of the IT ACT. In case of a Consortium or Joint Venture (JV), if a company has authorized an Individual as one of their DSC holders to submit bid on their behalf, the same is allowed. However, the bidder should submit an authorization, signed by both parties as part of the bid document indicating the permission to participate in the Consortium or Joint Venture tender as a participant."
},
{
    id:10,
    question: " Can International firm upload their proposals on e-procurement portal with DSC which is not issued by Indian firm/ not registered with this e-proc portal ?",
    answer: "As per the IT ACT, this eprocurement portal does not allow to register any DSC issued by CAs other than Indian CAs. However, Some of our Certifying agencies issue DSC for foreigners without visiting India. The details of which are already made available under the Downloads link of this portal."
},
{
    id:11,
    question: "Can a foreign bidder or a foreign consultant get DSC from their respective country i.e. any country outside India ?",
    answer: "No. The same is not allowed to be registered in this portal."
},
{
    id:12,
    question: "Can international consultant (out side India) get DSC through on line ?",
    answer: "YES. Pl refer to the link https://eprocure.gov.in/eprocure/app (S.No. 13, DSC for Foreign Bidders under downloads). Hence the Foreign Bidder / Consultant can get the Indian DSC issued and participate in our tender without visiting India."
}
];

export const TenderRelated = [
{
    id:1,
    question:"Visibility of Bid Documents submitted by Participating Bidders in a Tender. ?",
    answer: `As per instructions from Min of Finance to enhance transparency, Participating Bidders will be able to view each OtherÃ¢â¬â¢s submitted Documents after Technical Opening of the tender. However, if the tender involves matter of Bidder's Confidentiality or IPR or any secret information then an approval from Vigilance Officer/ CFO/Competent Authority is required and this option of hiding the bid documents visibility can be configured accordingly, before creation of tender on the portal.

    Such requests may be sent to cppp-nic@nic.in
    
    Note: This would not be applicable for Single Cover Tender, Department may publish the tender with two or more as Number of Covers, on the portal.`
},
{
    id:2,
    question: "What steps are to be taken by an Organization, if they need to publish World Bank WB or Asian Development Bank ADB funded tenders ?",
    answer: `If an Organisation has to float a World Bank Funded tender, then an Organisation structure has to be mapped as per World Bank /ADB guidelines in which below properties will be enabled:

    1. Disable the Visibility of Technical Documents submitted by Bidder to participating Bidders - This would not be applicable for Single Cover Tender, Department may publish the tender with two or more as Number of Covers on the portal.
    
    2. Multi-Currency option
    
    3. Same day Opening as Bid Submission End on the portal
    
    If an Organisation is also using NICs eProcurement software for publishing of their Normal Tenders, then they need to get new Nodal officer and new User Accounts created under World Bank/ ADB Hierarchy, and new DSCs are to be mapped with their accounts, separate from the DSCs which have been already mapped in normal tendering Hierarchy of their Organisation.
    
    For creation of World Bank/ ADB Hierarchy, please send the mail to cppp-nic@nic.in`
},
{
    id:3,
    question: "How to view / download Tender documents without logging into the system ?",
    answer: "Click on the Latest Active Tenders, and search the tender you are interested in using certain search criteria. To download the tender documents click on view button and click on the tender documents. The system will ask you for the user name and password. You can use the guest account guest with the password Guest#08 and click on any of the active tenders and download the required documents. However, it is advised to login to the system and download the tender documents so that corrigendum/addendum if published will be automatically mailed to you."
},
{
    id:4,
    question: "How do I get clarifications for any doubt regarding Tenders Portal ?",
    answer: "Help is available at the 24x7 Help line 0120-4200462, 0120-4001002, +91-8826246593"
},
{
    id:5,
    question: "What is the maximum size of a file that can be uploaded as a bid document in a packet in the eProcurement portal ?",
    answer: `The application does not impose any restriction on the size of bid document that can be uploaded into the portal. However, the upload limit is decided by the Network speed that the client system has and also the memory configurations that have been defined in the system for Java Runtime Environment(JRE). For better operational convenience, based on the field experience, if bids of larger sizes are to be uploaded in a tender, it is suggested that the number of documents in a packet or cover may be kept up to 4 or 5 documents and the bidder may be asked to upload a maximum of 40 MB per file and not exceeding 120 MB per Packet. This will result in better operational efficiencies.It is also suggested that the files while scanning may be scanned at less than 100 DPI resolution in black and white which will result in smaller file sizes.`
},
{
    id:6,
    question: "How to verify the genuineness of EMD, other technical documents, Samples etc. received through e-Procurement system ?",
    answer: `In the e-Procurement portal, the technical and financial bid documents submitted by the bidders are digitally signed using their authorized officials valid Digital Signature Certificates (DSCs), which as per the IT Act, can be considered equivalent to the physical signature of an individual. For the Earnest Money Deposit, we advise the procuring entities to ask the bidder to submit invite a scanned copy of the draft / cheque / bank guarantee along with the electronic bid and also to submit a physical copy of the EMD (only) either in person or by post / courier. This can be verified with the uploaded scanned copy. Samples of any sort cannot be invited online and the procuring entities must ask the bidders to submit a physical copy of any samples. It is upto the procuring entities to verify their genuineness as per the norms they have been following so far.`
},
{
    id:7,
    question: "Whether my Technical Document and Financial Document is encrypted and Stored ?",
    answer: "All documents that are uploaded in the system are Digitally signed. The Documents uploaded in the Other Important Documents (OID) are digitally signed. All documents including the technical document and Financial documents are encrypted and safely stored using the PKI technology. It remains in encrypted format, till the bid opening date and time and cannot be seen by anyone till such time."
},
{
    id:8,
    question: "As a department user, by mistake I have rejected a bidder or the due to legal issues, the Tender Inviting Authority is forced to go back to previous stage and open a rejected bidder at the Technical / Financial Stage? Whether it is allowed and if so how ?",
    answer: "Yes. The system has the facility and is carried out using a Corrigendum. This corrigendum is Tender Revocation Corrigendum. When the tender is in advanced stage, the TIA can invoke this corrigendum based on the need and those who have participated in this tender are informed about this procedure by mail. The TIA can continue the process in the same way as before after accepting the rejected bidder. This is to be used in emergencies such as Court rulings or inadvertent errors. However, all activities are mailed to the respective stake holders."
},
{
    id:9,
    question: " I generated the BoQ Comparative Chart. I found that one of the Bidders data is not getting reflected in the Comparative chart. How to handle ?",
    answer: "The System generates the comparative chart from the BoQ uploaded by the bidders. If the Bidder makes any mistake in the Sheet Name or any of the values, then the system will not be able to read the data from the BoQ uploaded and hence may get missed out from the Comparative Chart. The Department user may take a decision to accept or reject that depending on the nature of mistake and regenerate the Comparative chart manually and upload this comparative chart along with the Financial Summary which can be seen by the General Public."
},
{
    id:10,
    question: " A Tender is published and cancelled after few days of publishing. How will I know the same ?",
    answer: "A tender when cancelled, it has to be cancelled using the Tender Cancellation corrigendum. The system will display this Cancellation corrigendum in this portal for a period of say 1 week from the date of publishing of the Cancellation Corrigendum"
},
{
    id:11,
    question: " How to list all Active tenders of eProcure.gov.in pertaining to my Department or Organisation in my website ?",
    answer: `The active tenders can be shown by using the following URLhttp://eprocure.gov.in/eprocure/app?page=FrontEndLatestActiveTendersOrgwise&service=page&org=<Organisation  Name as appearing in the portal>

    For example giving a link to Department of Economic affairs  can be done using the following. Pl note that Space should be replaced by %20 for viewing the results.
    
    http://eprocure.gov.in/eprocure/app?page=FrontEndLatestActiveTendersOrgwise&service=page&org=Department%20of%20Economic%20Affairs`
}
];

export const SecurityRelated = [
{
    id:1,
    question:"How secure are my bid documents in the e-Procurement portal? Can anybody see my price bid before bid opening ?",
    answer: "All sensitive documents in the e-tendering site are encrypted and stored in the server using the Public Key Infrastructure (PKI) technology. Both the Technical and Financial Documents are encrypted and stored. Even the system administrator cannot view the bid documents before bid opening. Only after decryption by the authorized bid openers the documents are converted into readable format."
},
{
    id:2,
    question: "Can bids be modified / withdrawn and conditions thereto. Is it not contrary to GFR-2005 ?",
    answer: "The e-Procurement system allows the bidders to modify and resubmit their bid documents before the 'closing date and time for bid submission' for the tender. After the closing date of bid submission, the bidders are not allowed to make any changes to their bid documents. Further, the option for the bidders to withdraw or resubmit their bids is optional, and it is upto the procuring entity to enable these options in the system on a case to case basis for each tender. The System will overwrite the old bids and only the latest uploaded document is retained. If you are resubmitting even a single document, the entire packet is to be resubmitted. Hence, it is within the purview of GFR-2005."
},
{
    id:3,
    question: "What precaution needs to be taken to submit online bids in the e-procurement system ?",
    answer: "Please prepare your documents well in advance and submit your documents well before the closing date and time. While scanning your documents (Scan in 75-100 DPI resolution) try to keep file size small so that bid submission is smooth. Also in the BOQ enter values only in the appropriate space provided. Do not make any change in file name or sheet name. If you are not able to submit at the last minute due to local power problem or internet problem, you may loose a chance to participate."
},
{
    id:4,
    question: "Central Vigilance Commission (CVC) , Asian Development Bank (ADB) and World Bank (WB) issues guidelines on security from time to time. Whether this portal adhere to these ?",
    answer: "Yes. To a greater extent the guidelines are followed and the system adheres to more than 95% of the guidelines issued by these agencies from time to time."
}
];
