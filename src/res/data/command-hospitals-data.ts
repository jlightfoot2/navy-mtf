const data =
[{"id":2,"title":"1st Dental Battalion Camp Pendleton","address":"Bldg 2238 Vandegrift Road","phone":"(760) 725-5419","img":"f130DAEB43-D8B2-4839-B9A9D7970155107Btmp-96.png","icon":"f14E121850-6DAD-4AB3-8DA675B4134F9D41tmp-95.png","latitude":33.293063,"longitude":-117.358564,"website":"http://www.med.navy.mil/sites/nmw/Commands/Pages/NDC%20Camp%20Pendleton.aspx","facebook":"https://m.facebook.com/pages/1st-Dental-BattalionNDC-Camp-Pendleton/365875363493328"},
{"id":3,"title":"2nd Dental Battalion","address":"Bldg 315 McHugh Blvd","phone":"(910) 451-2208","img":"f21ABDC267-87FC-4C21-804011583682FEDAtmp-94.png","icon":"f23D9566FF-AEAE-4BD1-B2014B3F3B661F78tmp-93.png","latitude":34.663395,"longitude":-77.34727,"website":"http://www.2ndmlg.marines.mil/Units/2ndDentalBattalion.aspx","facebook":"https://www.facebook.com/2d-Dental-Battalion-160148554001690/"},
{"id":4,"title":"James A. Lovell Federal Health Care Center","address":"3001 Green Bay Road, Bldg. 133EF, North Chicago, IL 60064","phone":"(224) 610-3089","img":"f3LovellFederal.png","icon":"f3Lovell.png","latitude":42.307379,"longitude":-87.860552,"website":"http://www.lovell.fhcc.va.gov/","facebook":"https://www.facebook.com/lovellfhcc"},
{"id":5,"title":"Naval Health Clinic Annapolis","address":"250 Wood Road, Annapolis, MD 21402","phone":"(410) 293-2273","img":"f4Naval_Health_Clinic_Annapolis.jpg","icon":"f4Ebmannapolis.png","latitude":38.9890482,"longitude":-76.4913011,"website":"http://www.med.navy.mil/sites/annapolis","facebook":"https://www.facebook.com/NavalHealthClinicAnnapolis"},
{"id":6,"title":"Naval Health Clinic Charleston","address":"110 NNPTC Circle, Goose Creek, SC 29445","phone":"(843) 794-6000","img":"f5Charleston.png","icon":"f5EmbNHCharleston.png","latitude":32.9653604,"longitude":-79.9629046,"website":"http://www.med.navy.mil/sites/chas/Pages/default.aspx","facebook":"http://www.facebook.com/Navalhealthcliniccharleston2010"},
{"id":7,"title":"Naval Health Clinic Cherry Point","address":"PSC Box 8023, BLDG 4389, Cherry Point, NC 28533","phone":"(252) 466-0266","img":"f6CherryPoint.png","icon":"f6EmbNHCherryPoint.png","latitude":34.8961383,"longitude":-76.9090853,"website":"http://www.med.navy.mil/sites/cpoint/Pages/default.aspx","facebook":"https://www.facebook.com/pages/Naval-Health-Clinic-Cherry-Point/175324484418"},
{"id":8,"title":"Naval Health Clinic Corpus Christi","address":"10651 E Street, Corpus Christi, TX 78419","phone":"(361) 961-6121","img":"f7CorpusChristi.png","icon":"f7EMBCorpusChristi.png","latitude":27.6905277,"longitude":-97.266645,"website":"http://www.med.navy.mil/sites/nhccc","facebook":"https://www.facebook.com/NHCCC/"},
{"id":9,"title":"Naval Health Clinic Hawaii","address":"480 Central Ave, Pearl Harbor, HI 96860","phone":"(808) 473-0247","img":"f8Naval_Health_Clinic_Hawaii.jpg","icon":"f8Naval_Health_Clinic_Hawaii-Logo.png","latitude":21.348033,"longitude":-157.957597,"website":"http://www.med.navy.mil/sites/nhch/Pages/default.aspx","facebook":"https://www.facebook.com/pages/Naval-Health-Clinic-Hawaii/167982416574687"},
{"id":10,"title":"Naval Health Clinic New England","address":"43 Smith Road, Newport, RI 02840","phone":"(401) 841-3772","img":"f99B4200FF-9E1A-420C-80AB7BF615273A02tmp-300.png","icon":"f9EmbNHCNewEnglandRI.png","latitude":41.5039187,"longitude":-71.3218366,"website":"http://nhcne.med.navy.mil/","facebook":"http://www.facebook.com/NHCNE"},
{"id":11,"title":"Naval Health Clinic Patuxent River","address":"47149 Buse Road, Bldg 1370, Patuxent River, MD 20670","phone":"(301) 995-4980","img":"f10PAX_Clinic.jpg","icon":"f10EmbNHCPatexentRiveMEmbD.png","latitude":38.2720187,"longitude":-76.4455987,"website":"http://www.med.navy.mil/sites/paxriver","facebook":"https://www.facebook.com/NHCPaxRiver/"},
{"id":12,"title":"Naval Health Clinic Quantico","address":"3259 Catlin Ave, Quantico, VA 22134","phone":"(703) 784-1725","img":"f11Quantico-Health-Clinic.jpg","icon":"f11EmbQuantico.png","latitude":38.513976,"longitude":-77.311937,"website":"http://www.med.navy.mil/sites/nhcq","facebook":"http://www.facebook.com/NavalHealthClinicQuantico"},
{"id":13,"title":"Naval Hospital Beaufort","address":"1 Pinckney Blvd, Beaufort, SC 29902","phone":"(843) 228-5337","img":"f12Beaufort.png","icon":"f12EmbNHBeaufort.png","latitude":32.3903987,"longitude":-80.6822205,"website":"http://www.med.navy.mil/sites/nhbeaufort/Pages/Welcome_Page.aspx","facebook":"https://www.facebook.com/navalhospitalbeaufort?sk=timeline"},
{"id":14,"title":"Naval Hospital Bremerton","address":"1 Boone Road, Bremerton, WA 98312","phone":"(360) 475-4232","img":"f13Naval_Hospital_Bremerton.jpg","icon":"f13Naval_Hospital_Bremerton-Logo.png","latitude":47.594939,"longitude":-122.691525,"website":"http://www.med.navy.mil/SITES/NHBREM/Pages/default.aspx","facebook":"https://www.facebook.com/pages/Naval-Hospital-Bremerton/163929576969000"},
{"id":15,"title":"Naval Hospital Camp LeJeune","address":"100 Brewster Blvd, Camp Lejeune, NC 28547","phone":"(910) 450-4300","img":"f14LejeuneHospital.png","icon":"f14EmbNHCampLejeune.png","latitude":34.72295,"longitude":-77.358437,"website":"http://www.med.navy.mil/sites/nhcl/Pages/default.aspx","facebook":"https://www.facebook.com/NHCLejeune"},
{"id":16,"title":"Naval Hospital Camp Pendleton","address":"200 Mercy Circle, Camp Pendleton, CA 92055","phone":"(760) 725-1288","img":"f15Naval_Hospital_Camp_Pendleton.jpg","icon":"f15Naval_Hospital_Camp_Pendleton-Logo.png","latitude":33.220387,"longitude":-117.389374,"website":"http://www.med.navy.mil/sites/cpen/newSite/Pages/default.aspx","facebook":"https://www.facebook.com/NavalHospitalCampPendleton"},
{"id":17,"title":"Naval Hospital Jacksonville","address":"2080 Child Street, Jacksonville, FL 32214","phone":"(904) 542-7300","img":"f16Jacksonville.png","icon":"f16EmbNHJacksonvilleFL.png","latitude":30.209169,"longitude":-81.686073,"website":"http://www.med.navy.mil/SITES/NAVALHOSPITALJAX","facebook":"https://www.facebook.com/NavalHospitalJacksonville"},
{"id":18,"title":"Naval Hospital Lemoore","address":"937 Franklin Ave, Lemoore, CA 93246","phone":"(559) 998-4481","img":"f17Naval_Hospital_Lemoore.jpg","icon":"f17Naval_Hospital_Lemoore-Logo.png","latitude":36.263199,"longitude":-119.887597,"website":"http://www.med.navy.mil/sites/nhlem/Pages/index.aspx","facebook":"https://www.facebook.com/NavalHospitalLemoore"},
{"id":19,"title":"Naval Hospital Oak Harbor","address":"3475 N Saratoga St, Oak Harbor, WA 98277","phone":"(360) 257-9500","img":"f18Naval_Hospital_Oak_Harbor.jpg","icon":"f18Naval_Hospital_Oak_Harbor-Logo.png","latitude":48.33651,"longitude":-122.680179,"website":"http://www.med.navy.mil/sites/nhoh/Pages/Default.aspx","facebook":"https://www.facebook.com/pages/Naval-Hospital-Oak-Harbor/164574516897309"},
{"id":20,"title":"Naval Hospital Pensacola","address":"6000 West Highway 98, Pensacola, FL 32512","phone":"(850) 505-6601","img":"f19Pensacola.png","icon":"f19EMBPensacola.png","latitude":30.4065538,"longitude":-87.2891999,"website":"http://www.med.navy.mil/sites/pcola","facebook":"http://www.facebook.com/pages/Naval-Hospital-Pensacola/125746744135570"},
{"id":21,"title":"Naval Hospital Twentynine Palms","address":"1145 Sturgis Road, Twentynine Palms, CA 92278","phone":"(760) 830-2190","img":"f20Naval_Hospital_Twentynine_Palms.jpg","icon":"f20Naval_Hospital_Twentynine_Palms-Logo.png","latitude":34.225264,"longitude":-116.04874,"website":"http://www.med.navy.mil/sites/nmw/Commands/Pages/NH%20Twentynine%20Palms.aspx","facebook":"http://www.facebook.com/business/dashboard/#/pages/Twentynine-Palms-CA/Naval-Hospital-Twentynine-Palms/83701100741"},
{"id":22,"title":"Naval Medical Center Portsmouth","address":"620 John Paul Jones Circle, Portsmouth, VA 23708","phone":"(757) 953-5008","img":"f21NMCP.png","icon":"f21EmbNMCPortsmouthVA.png","latitude":36.844072,"longitude":-76.304804,"website":"http://www.med.navy.mil/sites/nmcp2","facebook":"http://www.facebook.com/NMCPortsmouth"},
{"id":23,"title":"Naval Medical Center San Diego","address":"34800 Bob Wilson Drive, San Diego, CA 92134","phone":"(619) 532-6400","img":"f22Naval_Medical_Center_San_Diego.jpg","icon":"f22Naval_Medical_Center_San_Diego-Logo.png","latitude":32.724542,"longitude":-117.144645,"website":"http://www.med.navy.mil/sites/nmcsd/Pages/default.aspx","facebook":"https://www.facebook.com/NMCSD"},
{"id":24,"title":"U.S Naval Hospital Sigonella, Italy","address":"PSC 836 BOX 2670 - FPO AE, Sigonella, Italy 9636","phone":"011-39-095-56-3842","img":"f23Sigonella.png","icon":"f23EmbNHSigonellaItaly.png","latitude":37.4081248,"longitude":14.9112368,"website":"http://www.med.navy.mil/sites/sigonella","facebook":"https://www.facebook.com/pages/US-Naval-Hospital-Sigonella/160997102193?fref=ts"},
{"id":25,"title":"U.S Naval Hospital Yokosuka, Japan","address":"PSC 475, Box, FPO AP, Yokosuka, Japan 96350-9998","phone":"011-81-3117-43-5334","img":"f24Naval_Hospital_Yokosuka.jpg","icon":"f24Naval_Hospital_Yokosuka_Logo.png","latitude":35.286346,"longitude":139.67141,"website":"http://www.med.navy.mil/sites/nmw/Commands/Pages/USNH%20Yokosuka.aspx","facebook":"https://www.facebook.com/usnhyokosuka"},
{"id":26,"title":"U.S. Naval Dental Center Okinawa, Japan","address":"3D DEN BN 3D MLG, UNIT 38450, FPO AP, Okinawa, Japan 96604-8450","phone":"011-81-611-745-2390","img":"f25Naval_Dental_Center_Okinawa-Logo.jpg","icon":"f25Naval_Dental_Center_Okinawa-Logo.png","latitude":26.293035,"longitude":127.774049,"website":"http://www.med.navy.mil/sites/nmw/Commands/Pages/NDC%20Okinawa.aspx","facebook":"https://www.facebook.com/usnho/"},
{"id":27,"title":"U.S. Naval Hospital Guam","address":"Bldg 1 Farenholt Ave, Agana Heights, Guam 96910","phone":"(671) 344-9340","img":"f26Naval_Hospital_Guam.jpg","icon":"f26Naval_Hospital_Guam-Logo.png","latitude":13.473859,"longitude":144.737551,"website":"http://www.med.navy.mil/sites/usnhguam/Pages/default.aspx","facebook":"http://www.facebook.com/USNHGUAM"},
{"id":28,"title":"U.S. Naval Hospital Guantanamo Bay, Cuba","address":"PSC 810 Box 185 FPO, AE, Guantanamo Bay, Cuba 09589-0002","phone":"011-53-991-2360","img":"f27Guantanamo%20Bay.jpg","icon":"f27EmbNHGuantanamoBaCuba.png","latitude":19.9026482,"longitude":-75.1001687,"website":"http://www.med.navy.mil/sites/gtmo","facebook":"https://www.facebook.com/NSGuantanamoBay/"},
{"id":29,"title":"U.S. Naval Hospital Naples, Italy","address":"PSC 827 Box 1000 FPO AE, Naples, Italy 09617-1000","phone":"011-39-081-811-6000","img":"f28Naples.png","icon":"f28EmbNHNaples.png","latitude":26.2121538,"longitude":-81.7715107,"website":"http://www.med.navy.mil/sites/napoli","facebook":"https://www.facebook.com/US-Naval-Hospital-Naples-134931379885080/"},
{"id":30,"title":"U.S. Naval Hospital Okinawa, Japan","address":"Camp Foster, Bldg. 960 Tarawa Rd, Okinawa, Japan","phone":"011-81-611-746-7555","img":"f29Naval_Hospital_Okinawa.jpg","icon":"f29Naval_Hospital_Okinawa-Logo.png","latitude":26.293035,"longitude":127.774049,"website":"http://www.med.navy.mil/sites/nhoki/Pages/default.aspx","facebook":"https://www.facebook.com/usnho/"},
{"id":31,"title":"U.S. Naval Hospital Rota, Spain","address":"PSC 819 Box 18 FPO AE, Rota, Spain 09645-0018","phone":"011-34-956-82-3305","img":"f30Rota.png","icon":"f30EmbNHRota.png","latitude":36.6387302,"longitude":-6.3321027,"website":"http://www.med.navy.mil/sites/nhrota","facebook":"https://www.facebook.com/US-Naval-Hospital-Rota-Spain-156021124460161/"},
{"id":32,"title":"Walter Reed National Military Medical Center","address":"8901 Rockville Pike, Bethesda, MD 20889","phone":"(301) 295-4000","img":"f31WRNMMC.jpg","icon":"f31EmbWRNMMC.jpg","latitude":39.0005216,"longitude":-77.0955541,"website":"http://www.wrnmmc.capmed.mil/","facebook":"http://www.facebook.com/pages/Walter-Reed-National-Military-Medical-Center/295857217111107"},
{"id":33,"title":"BHC Makalapa (Pearl Harbor)","address":"Bldg 1407, 1253 Makalapa Road","phone":"(808) 473-1880, x92210","img":"f32CF0203D1-F4F3-4171-B5FD12C99CC428BEtmp-455.png","icon":"f32ABD52AC9-7DC3-4C1E-B250EEDEA42A822Dtmp-444.png","latitude":21.35372222,"longitude":157.9372222,"website":"http://www.med.navy.mil/sites/nhch/Clinics/Pages/MakalapaClinic.aspx","facebook":"https://www.facebook.com/Naval-Health-Clinic-Hawaii-167982416574687/"},
{"id":34,"title":"BHC Kaneohe Bay","address":"Bldg. 3089, D Street","phone":"(808) 257-3365 x97123","img":"f33AF1940A7-A78F-4C43-BF4FC34869B397A4tmp-454.png","icon":"f337FBF5FC9-E3D0-41C2-A004A4A40680D631tmp-446.png","latitude":21.44472222,"longitude":157.7613889,"website":"http://www.med.navy.mil/sites/nhch/Clinics/Pages/KaneoheBayBHC.aspx","facebook":"https://www.facebook.com/Naval-Health-Clinic-Hawaii-167982416574687/"},
{"id":35,"title":"BHC Camp Smith","address":"Camp H. M. Smith, Halawa, HI","phone":"(808) 477-2600 x96350","img":"f34F9E4ED04-2243-4625-A7746F7E377A0451tmp-453.png","icon":"f34E43C3923-4AA8-4637-A37C2492411AE60Ftmp-448.png","latitude":21.38638889,"longitude":157.9083333,"website":"http://www.med.navy.mil/sites/nhch/Clinics/Pages/CampSmithBHC.aspx","facebook":"https://www.facebook.com/Naval-Health-Clinic-Hawaii-167982416574687/"},
{"id":36,"title":"BHC Wahiawa","address":"Bldg. 22, 500 Center Street","phone":"(808) 653-1400 x98110","img":"f35251548A9-FDDA-42EF-BC9FB9FD3B3332D0tmp-452.png","icon":"f35EFB7BAC0-2CDC-44B4-9815F4A193E0C4C8tmp-450.png","latitude":21.51586111,"longitude":158.0011111,"website":"http://www.med.navy.mil/sites/nhch/Clinics/Pages/WahiawaBHC.aspx","facebook":"https://www.facebook.com/Naval-Health-Clinic-Hawaii-167982416574687/"}
];

export default data;