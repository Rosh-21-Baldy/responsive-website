



// import Link from "next/link";
// import Image from "next/image";
// import Marquee from "react-fast-marquee";

// const banks = [
//   {
//     name: "SBI",
//     link: "/loan/sbi-home-loan",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/159px-State_Bank_of_India_logo.svg.png?20180321064323",
//   },
//   {
//     name: "Axis",
//     link: "/loan/axis-bank-home-loan",
//     logo: "https://www.logo.wine/a/logo/Axis_Bank/Axis_Bank-Logo.wine.svg",
//   },
//   {
//     name: "ICICI Loans",
//     link: "/loan/icici-bank-home-loans",
//     logo: "https://static.india.com/wp-content/uploads/2015/08/sf-14.jpg?impolicy=Medium_Resize&w=1200&h=800", // Using a PNG URL
//   },
//   {
//     name: "Aditya Birla Capital",
//     link: "/loan/aditya-birla-home-loan",
//     logo: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/logo.webp?extension=webp",
//   },
//   {
//     name: "Bajaj Finserv",
//     link: "/loan/bajaj-home-loan",
//     logo: "https://cdn.iconscout.com/icon/free/png-256/free-bajaj-finserv-logo-icon-download-in-svg-png-gif-file-formats--indian-company-companies-pack-logos-icons-2249165.png?f=webp",
//   },
//   {
//     name: "Motilal Oswal Home Loans",
//     link: "/loan/motilal-oswal-home-loan",
//     logo: "https://www.motilaloswal.com/media_15c0fcdc4deef99d8a791fee00d99b2066c8eb40a.svg?width=750&format=svg&optimize=medium",
//   },
//   {
//     name: "L&T Finance",
//     link: "/loan/l&t-finance-home-loan",
//     logo: "https://www.ltfs.com/images/default-source/logo/ltf-logo-b-w.png?sfvrsn=58168c51_2",
//   },
//   {
//     name: "IIFL",
//     link: "/loan/iifl-home-loan",
//     logo: "https://storage.googleapis.com/iifl-storage/files/images/logos/iifl-finance.svg",
//   },
//   {
//     name: "BOI (Bank of India)",
//     link: "/loan/boi-home-loan",
//     logo: "https://bankofindia.co.in/o/boi-global-theme/images/boi/logos/boi_en_US_logo.png",
//   },
//   {
//     name: "HSBC",
//     link: "/loan/hsbc-home-loan",
//     logo: "https://www.hsbc.co.in/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg",
//   },
//   {
//     name: "Kotak Mahindra",
//     link: "/loan/kotak-mahindra-home-loan",
//     logo: "https://www.logoshape.com/wp-content/uploads/2024/08/kotak-mahindra-bank-logo-vector_logoshape.png",
//   },
//   {
//     name: "HDFC",
//     link: "/loan/hdfc-home-loan",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/434px-HDFC_Bank_Logo.svg.png?20110306040211",
//   },
//   {
//     name: "Bank of Baroda",
//     link: "/loan/bank-of-baroda-home-loan",
//     logo: "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/icons/bob-logo.svg",
//   },
//   {
//     name: "Hero Fincorp",
//     link: "/loan/hero-fincorp-home-loan",
//     logo: "https://hfcl-website-cms.s3.ap-south-1.amazonaws.com/logo_dc3ab7afd1.webp",
//   },
// ];

// const ProcessSection = () => {
//   return (
//     <div className="bg-white py-20">
//       <div className="ambak-container">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-bold">
//             <span
//               style={{
//                 background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 display: "inline-block",
//                 padding: "0.4rem 1.5rem",
//               }}
//             >
//               Our Stakeholders
//             </span>
//           </h2>
//         </div>

//         <div className="mb-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Corporate Channel Card */}
//             <div className="bg-white rounded-xl shadow-lg p-6 text-center">
//               <div className="mb-6">
//                 <Image
//                   src="https://img.freepik.com/premium-vector/two-hands-holding-object-finger-pointing-up-down-handshake-single-main-vector-illustration-white-background-bright-color-cartoon-combine_424947-14034.jpg"
//                   alt="Corporate Channel"
//                   width={140}
//                   height={120}
//                   className="mx-auto"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-[#0d53b7] mb-4">
//                 Corporate Channel
//               </h3>
//               <p className="text-gray-600 text-base">
//                 Our success stems from robust corporate channels integrated with a cutting-edge tech enablement platform
//               </p>
//             </div>

//             {/* Real Estate Channel Card */}
//             <div className="bg-white rounded-xl shadow-lg p-6 text-center">
//               <div className="mb-6">
//                 <Image
//                   src="https://img.freepik.com/free-vector/construction-illustration-with-foreman-giving-instructions-team-builders-dressed-uniform-helmets_1284-29082.jpg"
//                   alt="Real Estate Channel"
//                   width={200}
//                   height={120}
//                   className="mx-auto"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-[#0d53b7] mb-4">
//                 Real Estate Channel
//               </h3>
//               <p className="text-gray-600 text-base">
//                 Financing made easy for Real estate Buyers, Investors and Developers
//               </p>
//             </div>

//             {/* Independent Business Owners Card */}
//             <div className="bg-white rounded-xl shadow-lg p-6 text-center">
//               <div className="mb-6">
//                 <Image
//                   src="https://img.freepik.com/premium-vector/businessman-calculates-finances-surrounded-by-stacks-cash-paperwork_1297718-27718.jpg"
//                   alt="Independent Business Owners"
//                   width={140}
//                   height={100}
//                   className="mx-auto"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-[#0d53b7] mb-4">
//                 Independent Business Owners
//               </h3>
//               <p className="text-gray-600 text-base">
//                 Fueling Growth through people-powered Loan sourcing on ground
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Service Providers Section */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold">
//             <span
//               style={{
//                 background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 display: "inline-block",
//                 padding: "0.4rem 1.5rem",
//               }}
//             >
//               Our Service Providers
//             </span>
//           </h2>
//         </div>

//         <Marquee speed={70} gradient={false} className="py-4">
//       {banks.map((bank, index) => (
//         <Link
//           href={bank.link}
//           key={index}
//           className="hover:opacity-75 transition-opacity duration-300"
//         >
//           <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}> {/* Added div with padding */}
//             <Image
//               src={bank.logo}
//               alt={bank.name}
//               width={80}
//               height={40}
//               className="h-10 w-auto object-contain"
//             />
//           </div>
//         </Link>
//       ))}
//     </Marquee>
//       </div>
//     </div>
//   );
// };

// export default ProcessSection;


















import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const banks = [
  {
    name: "SBI",
    link: "/loan/sbi-home-loan",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/159px-State_Bank_of_India_logo.svg.png?20180321064323",
  },
  {
    name: "Axis",
    link: "/loan/axis-bank-home-loan",
    logo: "https://www.logo.wine/a/logo/Axis_Bank/Axis_Bank-Logo.wine.svg",
  },
  {
    name: "ICICI Loans",
    link: "/loan/icici-bank-home-loans",
    logo: "https://static.india.com/wp-content/uploads/2015/08/sf-14.jpg?impolicy=Medium_Resize&w=1200&h=800", // Using a PNG URL
  },
  {
    name: "Aditya Birla Capital",
    link: "/loan/aditya-birla-home-loan",
    logo: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/logo.webp?extension=webp",
  },
  {
    name: "Bajaj Finserv",
    link: "/loan/bajaj-home-loan",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-bajaj-finserv-logo-icon-download-in-svg-png-gif-file-formats--indian-company-companies-pack-logos-icons-2249165.png?f=webp",
  },
  {
    name: "Motilal Oswal Home Loans",
    link: "/loan/motilal-oswal-home-loan",
    logo: "https://www.motilaloswal.com/media_15c0fcdc4deef99d8a791fee00d99b2066c8eb40a.svg?width=750&format=svg&optimize=medium",
  },
  {
    name: "L&T Finance",
    link: "/loan/l&t-finance-home-loan",
    logo: "https://www.ltfs.com/images/default-source/logo/ltf-logo-b-w.png?sfvrsn=58168c51_2",
  },
  {
    name: "IIFL",
    link: "/loan/iifl-home-loan",
    logo: "https://storage.googleapis.com/iifl-storage/files/images/logos/iifl-finance.svg",
  },
  {
    name: "BOI (Bank of India)",
    link: "/loan/boi-home-loan",
    logo: "https://bankofindia.co.in/o/boi-global-theme/images/boi/logos/boi_en_US_logo.png",
  },
  {
    name: "HSBC",
    link: "/loan/hsbc-home-loan",
    logo: "https://www.hsbc.co.in/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg",
  },
  {
    name: "Kotak Mahindra",
    link: "/loan/kotak-mahindra-home-loan",
    logo: "https://www.logoshape.com/wp-content/uploads/2024/08/kotak-mahindra-bank-logo-vector_logoshape.png",
  },
  {
    name: "HDFC",
    link: "/loan/hdfc-home-loan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/434px-HDFC_Bank_Logo.svg.png?20110306040211",
  },
  {
    name: "Bank of Baroda",
    link: "/loan/bank-of-baroda-home-loan",
    logo: "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/icons/bob-logo.svg",
  },
  {
    name: "Hero Fincorp",
    link: "/loan/hero-fincorp-home-loan",
    logo: "https://hfcl-website-cms.s3.ap-south-1.amazonaws.com/logo_dc3ab7afd1.webp",
  },
];

const ProcessSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="ambak-container">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">
          <span
  style={{
    background: " #0d53b7 ",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    padding: "0.2rem 0.5rem",
    fontWeight: "800",
  }}
 >
   Our Value Chain Partners
 </span>
          </h2>
        </div>
     
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Corporate Channel Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <Image
                  src="https://img.freepik.com/premium-vector/two-hands-holding-object-finger-pointing-up-down-handshake-single-main-vector-illustration-white-background-bright-color-cartoon-combine_424947-14034.jpg"
                  alt="Corporate Channel"
                  width={140}
                  height={120}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0d53b7] mb-4">
              Institutional Channel
              </h3>
              <p className="text-gray-600 text-base">
                Our success stems from robust corporate channels integrated with a cutting-edge tech enablement platform
              </p>
            </div>

            {/* Real Estate Channel Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <Image
                  src="https://img.freepik.com/free-vector/construction-illustration-with-foreman-giving-instructions-team-builders-dressed-uniform-helmets_1284-29082.jpg"
                  alt="Real Estate Channel"
                  width={200}
                  height={120}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0d53b7] mb-4">
                Real Estate Channel
              </h3>
              <p className="text-gray-600 text-base">
                Financing made easy for Real estate Buyers, Investors and Developers
              </p>
            </div>

            {/* Independent Business Owners Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <Image
                  src="https://img.freepik.com/premium-vector/businessman-calculates-finances-surrounded-by-stacks-cash-paperwork_1297718-27718.jpg"
                  alt="Independent Business Owners"
                  width={140}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0d53b7] mb-4">
                Independent Business Owners
              </h3>
              <p className="text-gray-600 text-base">
                Fueling Growth through people-powered Loan sourcing on ground
              </p>
            </div>
          </div>
        </div>

        {/* Service Providers Section */}
        <div className="text-center mb-12"> 
  <h1 className="text-3xl font-bold  ">
  <span
  style={{
    background: " #0d53b7 ",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    padding: "0.2rem 0.5rem",
    fontWeight: "800",
  }}
 >
Our Service Providers
 </span>
  </h1>
</div>

        <Marquee speed={70} gradient={false} className="py-4 gap-3">
          {banks.map((bank, index) => (
            <Link
              href={bank.link}
              key={index}
              className="hover:opacity-75 transition-opacity duration-300"
            >
              <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                <Image
                  src={bank.logo}
                  alt={bank.name}
                  width={80}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ProcessSection;