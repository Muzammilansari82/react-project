import React, {useEffect, useState } from "react";
import Checkbox from "./Checkbox";
// import Cross from "../assets/Cross.png";

import "./style.css";


const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (Burma)","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe",
];
const countriescode = ["Afghanistan: +93","Albania: +355","Algeria: +213","Andorra: +376","Angola: +244","Antigua and Barbuda: +1","Argentina: +54","Armenia: +374","Australia: +61","Austria: +43","Azerbaijan: +994","Bahamas: +1","Bahrain: +973","Bangladesh: +880","Barbados: +1","Belarus: +375","Belgium: +32","Belize: +501","Benin: +229","Bhutan: +975","Bolivia: +591","Bosnia and Herzegovina: +387","Botswana: +267","Brazil: +55","Brunei: +673","Bulgaria: +359","Burkina Faso: +226","Burundi: +257","Cambodia: +855","Cameroon: +237","Canada: +1","Cape Verde: +238","Central African Republic: +236","Chad: +235","Chile: +56","China: +86","Colombia: +57","Comoros: +269","Congo (Brazzaville): +242","Congo (Kinshasa): +243","Costa Rica: +506","Cote d'Ivoire: +225","Croatia: +385","Cuba: +53","Cyprus: +357","Czech Republic: +420","Denmark: +45","Djibouti: +253","Dominica: +1","Dominican Republic: +1","East Timor (Timor-Leste): +670","Ecuador: +593","Egypt: +20","El Salvador: +503","Equatorial Guinea: +240","Eritrea: +291","Estonia: +372","Ethiopia: +251","Fiji: +679","Finland: +358","France: +33","Gabon: +241","Gambia: +220","Georgia: +995","Germany: +49","Ghana: +233","Greece: +30","Grenada: +1","Guatemala: +502","Guinea: +224","Guinea-Bissau: +245","Guyana: +592","Haiti: +509","Honduras: +504","Hungary: +36","Iceland: +354","India: +91","Indonesia: +62","Iran: +98","Iraq: +964","Ireland: +353","Israel: +972","Italy: +39","Jamaica: +1","Japan: +81","Jordan: +962","Kazakhstan: +7","Kenya: +254","Kiribati: +686","Korea, North: +850","Korea, South: +82","Kosovo: +383","Kuwait: +965","Kyrgyzstan: +996","Laos: +856","Latvia: +371","Lebanon: +961","Lesotho: +266","Liberia: +231","Libya: +218","Liechtenstein: +423","Lithuania: +370","Luxembourg: +352","Macedonia: +389","Madagascar: +261","Malawi: +265","Malaysia: +60","Maldives: +960","Mali: +223","Malta: +356","Marshall Islands: +692","Mauritania: +222","Mauritius: +230","Mexico: +52","Micronesia: +691","Moldova: +373","Monaco: +377","Mongolia: +976","Montenegro: +382","Morocco: +212","Mozambique: +258","Myanmar (Burma): +95","Namibia: +264","Nauru: +674","Nepal: +977","Netherlands: +31","New Zealand: +64","Nicaragua: +505","Niger: +227","Nigeria: +234","Norway: +47","Oman: +968","Pakistan: +92","Palau: +680","Panama: +507","Papua New Guinea: +675","Paraguay: +595","Peru: +51","Philippines: +63","Poland: +48","Portugal: +351","Qatar: +974","Romania: +40","Russia: +7","Rwanda: +250","Saint Kitts and Nevis: +1","Saint Lucia: +1","Saint Vincent and the Grenadines: +1","Samoa: +685","San Marino: +378","Sao Tome and Principe: +239","Saudi Arabia: +966","Senegal: +221","Serbia: +381","Seychelles: +248","Sierra Leone: +232","Singapore: +65","Slovakia: +421","Slovenia: +386","Solomon Islands: +677","Somalia: +252","South Africa: +27","South Sudan: +211","Spain: +34","Sri Lanka: +94","Sudan: +249","Suriname: +597","Swaziland (Eswatini): +268","Sweden: +46","Switzerland: +41","Syria: +963","Taiwan: +886","Tajikistan: +992","Tanzania: +255","Thailand: +66","Togo: +228","Tonga: +676","Trinidad and Tobago: +1","Tunisia: +216","Turkey: +90","Turkmenistan: +993","Tuvalu: +688","Uganda: +256","Ukraine: +380","United Arab Emirates: +971","United Kingdom: +44","United States of America: +1","Uruguay: +598","Uzbekistan: +998","Vanuatu: +678","Vatican City: +39","Venezuela: +58","Vietnam: +84","Yemen: +967","Zambia: +260","Zimbabwe: +263",
];


const CountrySelect = () => {
  return (
    <select className="select">
      {countries.map((country, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};




// const SelectCountry = () => {
//   const [datacontact, setDataContact] = useState('');

//   const handleContact = (event) => {
//     setDataContact(event.target.value);
//     console.log({ datacontact });
//   };

  

//   useEffect(() => {
//     const contact = localStorage.getItem('datacontact');
//     if (contact) {
//       setDataContact(contact);
//     }
//   }, []);

//   return (
//     <div>
//       <p className="residence">Country of residence</p>
//       <select onChange={handleSelectChange} className="select">
//         {countryOptions.map((countryOption, index) => (
//           <option key={index} value={countryOption}>
//             {countryOption}
//           </option>
//         ))}
//       </select>
//       <input
//         className="tel"
//         type="tel"
//         id="phone"
//         name="phone"
//         placeholder="123-4567890"
//         pattern="[0-9]{3}-[0-9]{7}"
//         required
//         value={datacontact} 
//         onChange={handleContact}
//       />
//       {datacontact}
//     </div>
//   );
// };

const StepTwo = () => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contact, setContact] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };
  
  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleSelectChange = (event) => {
    const selectedCountry = event.target.value;
    const phoneCode = selectedCountry.match(/\((\d+)\)/)[1];

    console.log("Selected Country: ", selectedCountry);
    console.log("Phone Code: ", phoneCode);
  };

  const handleSaveData = () => {
    localStorage.setItem("stepFiveFullName", fullName);
    localStorage.setItem("stepFiveCompanyName", companyName);
    localStorage.setItem("stepFiveContact", contact); 
    console.log({ fullName, companyName, contact });
  };

  useEffect(() => {
    const savedFullName = localStorage.getItem("stepFiveFullName");
    const savedCompanyName = localStorage.getItem("stepFiveCompanyName");
    const savedContact = localStorage.getItem("stepFiveContact");

    if (savedFullName) {
      setFullName(savedFullName);
    }

    if (savedCompanyName) {
      setCompanyName(savedCompanyName);
    }
    if (savedContact) {
      setContact(savedContact);
    }
  }, []);

  return (
    <div className="check ">
      <h2>Add Your Information</h2>
      <input
        type="text"
        placeholder="Your Full Name"
        className="full-name step6int"
        value={fullName}
        onChange={handleFullNameChange}
        style={{height: "auto", padding: "10px"}}
      />
      <br />
      <div>
        <p className="residence">Country of residence</p>
        <select onChange={handleSelectChange} className="select">
          {countriescode.map((countryOption, index) => (
            <option key={index} value={countryOption}>
              {countryOption}
            </option>
          ))}
        </select>
        <input
          className=" step6int"
          type="tel"
          id="phone"
          name="phone"
          placeholder="123-4567890"
          pattern="[0-9]{3}-[0-9]{7}"
          required
          value={contact} 
          onChange={handleContactChange}
          
          style={{height: "auto", padding: "10px", width:"150px"}}
        />
        
      </div>
      <br />
      <input
        type="text"
        placeholder="Your Company Name"
        className="full-name step6int"
        value={companyName}
        onChange={handleCompanyNameChange}
      />
      <br />
      <CountrySelect />
      <Checkbox />
      <br />
      <button className="button" onClick={handleSaveData}>Save Data</button>
    </div>
  );
};

export default StepTwo;


