(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{110:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(16),c=t.n(r),E=(t(69),t(15),t.p+"media/shaker-manifesto-logo.bd7262a1.PNG"),o=t.p+"media/hamilton-lib-logo.f0c779ea.PNG",i=t(19),s=t(20),m=t(23),u=t(22),h=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=n.call(this,e)).handleSearchChange=function(e){a.setState({search:e.target.value})},a.handleSubmit=function(e){fetch("#",{method:"POST",headers:{Accept:"application/json",contentType:"application/json"},body:JSON.stringify(a.state.value)}).then((function(e){return console.log(JSON.stringify(a.state.value)),e.json()})).then((function(n){a.setState({search:e.target.value})}))},a.state={search:""},a}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state.search;return l.a.createElement("form",{onSubmit:this.handleSubmit,action:"#",method:"POST"},l.a.createElement("div",null,l.a.createElement("input",{id:"MySearchTerm",type:"text",name:"query",value:e,onChange:this.handleSearchChange})),l.a.createElement("button",{type:"submit",className:"searchButton"},"Search"))}}]),t}(a.Component);var A=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"first"},l.a.createElement("img",{src:o,alt:"Hamilton logo",width:"145",height:"60",className:"HamiltonLogo"})),l.a.createElement("div",{className:"advancedWrapper"},l.a.createElement("div",{className:"dropdownA"},l.a.createElement("button",{className:"dropbtnA"},"Advanced Search"),l.a.createElement("div",{className:"dropdown-contentA"},l.a.createElement("a",{href:"ArticleType"},"Article Type"),l.a.createElement("a",{href:"Author"},"Author"),l.a.createElement("a",{href:"VolumeIssue"},"Volume & Issue")))),l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("img",{src:E,alt:"Shaker logo",width:"600",height:"150",className:"ShakerLogo"}),l.a.createElement("form",{action:"#",method:"POST"},l.a.createElement("div",{id:"dropdownWrapper"},l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"dropbtn"},"Supporting Articles"),l.a.createElement("div",{className:"dropdown-content"},l.a.createElement("input",{type:"checkbox",id:"vehicle1",name:"checkbox",value:"Editorials"}),l.a.createElement("label",{for:"vehicle1"}," Editorials"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle2",name:"checkbox",value:"Moral & religious lessons"}),l.a.createElement("label",{for:"vehicle2"}," Moral/religious lessons"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle3",name:"checkbox",value:"Mother Ann Lee"}),l.a.createElement("label",{for:"vehicle3"}," Mother Ann Lee"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle4",name:"checkbox",value:"Biographies"}),l.a.createElement("label",{for:"vehicle4"}," Biographies"),l.a.createElement("br",null))),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"dropbtn"},"News & Events"),l.a.createElement("div",{className:"dropdown-content"},l.a.createElement("input",{type:"checkbox",id:"vehicle1",name:"checkbox",value:"Shaker History"}),l.a.createElement("label",{for:"vehicle1"}," Shaker History"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle2",name:"checkbox",value:"Shaker Community Reports"}),l.a.createElement("label",{for:"vehicle2"}," Shaker Community Reports"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle3",name:"checkbox",value:"Shakers in the Press"}),l.a.createElement("label",{for:"vehicle4"}," Shakers in the Press"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle4",name:"checkbox",value:"National News"}),l.a.createElement("label",{for:"vehicle3"}," National News"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle5",name:"checkbox",value:"World News"}),l.a.createElement("label",{for:"vehicle4"}," World News"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle6",name:"checkbox",value:"Historical Events"}),l.a.createElement("label",{for:"vehicle4"}," Historical Events"),l.a.createElement("br",null))),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"dropbtn"},"Collections"),l.a.createElement("div",{className:"dropdown-content"},l.a.createElement("input",{type:"checkbox",id:"vehicle1",name:"checkbox",value:"Collections"}),l.a.createElement("label",{for:"vehicle1"}," Collections"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle2",name:"checkbox",value:"Food"}),l.a.createElement("label",{for:"vehicle2"}," Food"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle3",name:"checkbox",value:"Recipes"}),l.a.createElement("label",{for:"vehicle3"}," Recipes"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle4",name:"checkbox",value:"Health and Sanitation"}),l.a.createElement("label",{for:"vehicle4"}," Health and Sanitation"),l.a.createElement("br",null))),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"dropbtn"},"Farm"),l.a.createElement("div",{className:"dropdown-content"},l.a.createElement("input",{type:"checkbox",id:"vehicle1",name:"checkbox",value:"Farming"}),l.a.createElement("label",{for:"vehicle1"}," Farming"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle2",name:"checkbox",value:"Livestock"}),l.a.createElement("label",{for:"vehicle2"}," Livestock"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle3",name:"checkbox",value:"Crops"}),l.a.createElement("label",{for:"vehicle3"}," Crops"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle4",name:"checkbox",value:"Equipment"}),l.a.createElement("label",{for:"vehicle4"}," Equipment"),l.a.createElement("br",null))),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"dropbtn"},"Literature"),l.a.createElement("div",{className:"dropdown-content"},l.a.createElement("input",{type:"checkbox",id:"vehicle1",name:"checkbox",value:"Poetry"}),l.a.createElement("label",{for:"vehicle1"}," Poetry"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle2",name:"checkbox",value:"Humor"}),l.a.createElement("label",{for:"vehicle2"}," Humor"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle3",name:"checkbox",value:"Sayings"}),l.a.createElement("label",{for:"vehicle3"}," Sayings"),l.a.createElement("br",null))),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"dropbtn"},"Music & Dance"),l.a.createElement("div",{className:"dropdown-content"},l.a.createElement("input",{type:"checkbox",id:"vehicle1",name:"checkbox",value:"General"}),l.a.createElement("label",{for:"vehicle1"}," General"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle2",name:"checkbox",value:"Hymns"}),l.a.createElement("label",{for:"vehicle2"}," Hymns"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"vehicle3",name:"checkbox",value:"Dance"}),l.a.createElement("label",{for:"vehicle3"}," Dance"),l.a.createElement("br",null))))))},d=(t(38),t(56),t(40),t(41),function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=n.call(this,e)).handleSubmit=function(e){fetch("#",{method:"POST",headers:{Accept:"application/json",content_type:"application/json"},body:JSON.stringify(a.state.text.value)}).then((function(e){return e.json()})).then((function(n){a.setState({search:e.target.value})}))},a.onTextChanged=function(e){var n=a.props.items,t=e.target.value,l=[];if(t.length>0){var r=new RegExp("^".concat(t),"i");l=n.sort().filter((function(e){return r.test(e)}))}a.setState((function(){return{suggestions:l,text:t}}))},a.state={suggestions:[],text:""},a}return Object(s.a)(t,[{key:"suggestionSelected",value:function(e){this.setState((function(){return{text:e,suggestions:[]}}))}},{key:"renderSuggestions",value:function(){var e=this,n=this.state.suggestions;if(0===n.length)return null;var t=n.slice(0,10);return l.a.createElement("ul",null,t.map((function(n){return l.a.createElement("li",{onClick:function(){return e.suggestionSelected(n)}}," ",n," ")})))}},{key:"render",value:function(){var e=this.state.text;return l.a.createElement("div",{className:"AutoCompleteText"},l.a.createElement("form",{onSubmit:this.handleSubmit,action:"#",method:"POST"},l.a.createElement("input",{value:e,onChange:this.onTextChanged,type:"text",name:"query",autoComplete:"off"}),this.renderSuggestions(),l.a.createElement("button",{type:"submit",className:"searchButton"},"Search")))}}]),t}(a.Component)),S=(t(109),"F. W. EVANS\nGILES B. AVERY\nELIJAH MYRICK\nE. T. LEGGETT\nWM. N. REDMON\nMARIA WHEELER, UNION VILLAGE, OHIO\nSAMUEL HOOSER\nDANIEL ORCUTT\nABRAHAM PERKINS\nSARAH A. NEAL\nSnUBABL PRENTISS, SHAKERS, K. T.\nANDREW BARRETT\nWM. H. BUSSELL\nELIZABETH H. WEBSTER\nR. W. PELHAM\nOTIS SAWYER\nD. A. BUCKINGHAM\nANNE ERVIN\nG. B. AMERY\nE. H. WEBSTER\nRUTH WEBSTER\nHARRIET BULLABD\nO. C. HAMPTON\nSAMANTHA BOWIE\nJ. M. PEEBLES\nJOHN DODSON,\u2014THE AQUILLA\nTHOMAS SMITH\nCECELIA DE VERE\nALONZO HOLLISTER\nJANE MARIA BRAINARD\nG. JOSIAH BARKER\nO. C HAMPTON\nWILLIAM N. REDMON\nG. T. SPROAT\nHARRIET BULLARD\nH. L. EADES\nS. G. HURLBUT\nHorace Greeley\nWATSON ANDREWS\nANNA ERVIN\nF. W. E.\nOLIVE STEBBINS\nA. G. HOLLISTER\nA. J. DAVIS\nJULIA JOHNSON, HANCOCK\nJ. S. PRESCOTT\nANNA DODGSON\nANNA WHITE\nANGELUS SILESIUS, A. D 1620.\nMARIA WITHAM, ENFIELD, CONN.\nE. Myrick\nWILLIAM H. BUSSELL\nALOXZO G. HOLLISTER\nCHAUNCY DIBBLE\nFIVE YOUNG SISTERS OF CANAAN. Adelaide Sherman Ola Whitcomb Maria Shultz Elmina Hull Emeline Houseman\nAnnie Stephens, (11)\nGrace Bowers, (10)\nO. W. HOLMES\nElder Abraham Perkins\nElder H. L. Eades\nElder W. Leonard\nDaniel Frazer\nA. DOOLITTLE, EDITRESS\nH. Bullard\nJane Cowan\nRichard McNemar\nCecelia Devyr\nA. B. Bradford, late Consul to China\nWilliam A. Pratt\nElder Richard Bushnell\nLucy J. Osborne\nRhoda Blake\nMartha J. Anderson\nMarcia M. Bullard\nCecilia Devyr\nJulia Johnson\nNapoleon Brown\nNicholas Briggs\nFlorinda Sears\nJosephine Deming\nAlice Grey\nEmma Jane Neal\nAmelia Calver\nHannah R. Agnew\n(E. Myrick.)\n(Daniel Offord.)\n(A. B. Bradford.)\n(H. L. Eades.)\n(Wm. Bussell.)\n(Eldress Joanna Kaime.)\n(O. C Hampton.)\n(Mary Whitcher.)\nElder James S. Prescott, of the Shakers at North Union, Warrensville, delivered a short address, which we print in full:\nTHE REV. WM. H. H. MURRAY ON 'THE CIVILIZED HEATHEN.'\nEditor\nBishop Simpson\nE. H. W.\nEd.\nOne of the items, of the enjoyable entertainment, in the Pine Grove, on the border of the beautiful little Lake in the land of Canaan, at the annual Social Gathering of the Novitiate Order of Mt. Lebanon, August 19th, was the following Colloquy by and between Ann Offord, Charlotte Byrdsall, Martha J. Anderson, Melissa Sotjle, and Margaret Cleveland.\nD. WINDER\nElizabeth Doobeney's farewell to the Community, after a Sabbath day's enjoyment, of their worship and repose at Mt. Lebanon.\nGeorge F. Train thus writes me :\nEPHRAIM CUTTER, M. D.\nEZRA T. LEGGETT\nASCENATH C. STICKNEY\nHENRY C. BLINN\nAMANDA M. KENISTONE\nOLIVER C. HAMPTON\nSARAH ANN NEAL\nELIZABETH B. HARRISON\nMARIA WITHAM\nDANIEL FRASER\nNICHOLAS A. BRIGGS\nJames G. Russell\nJANE EMILY SMITH\nELDER G. B. AVERY\nANNA ERVING\nMARION PATRICK\nJOS. T. CURRY\nElder George R. Runyon has been speaking his mind pretty plainly to the people of Nicholasville, Ky. From the appended extracts of his address, we conclude that the Elder has lost all embarrassment when speaking the truth, if he ever had any, and forgot to sugar-coat his potion, if he intended doing so. Listen to his plain, blunt, wholesome, southern testimony *]:\nRICHARD FLETCHER\nJAMES S. PRESCOTT\nOLIVER PRENTISS\nJas. G. Russell. Enfield, N. H.\nJ. G. RUSSELL\nGarret K. Lawrence\u2014 the Shaker poet, physician and faithful brother \u2014 in 1835. It has been in constant song ever since. We commend it to general use, even if some may think ' there's more truth than poetry ' in it; for be it remembered, this has ever been the very just charge against all Shaker religion and life. \u2014 Ed.\nD. FRAZER\nLOIS WENTWORTH\nMATTHEW MESSNER\nELDER A. PERKINS\nHENRY T. CHILD, M. D.\nCHARLOTTE BYRDSALL\nMr. Ruskin \nH. C. BLINN\nP. H. BRADY, OhiO\nWILLIAM DAVIDSON\nA. B. BRADFORD\nDr. B. C. Hobbs, at the laying of the corner-stone of the Rose Polytechnic Institute at Terre Haute, Ind.:\nJAS. S. PRESCOTT\nMARY WHITCHER\nMARIA. WITHAM\nMARIA WHEELER\nJ. G. RUSSELL \nROBERT AIKEN\nELDER 'WILLIAM REYNOLDS\nSARAH L. SAWYER\nE. A. SEDGWICK\nJAS. G. RUSSELL\nSAMUEL SMILES\nSIMON MABEE\nBY THE EDITOR.\nROSETTA CUMINGS\nJOHN STUART MILL\nG. B. AVERY\nMARTHA J. ANDEBSON\nWILLIAM H. WETHERBEE\nJOSEPH 'WOODS\nW. D. Howells, and have particular reference to Shirley village, Mass. We have endeavored to make them more generally interesting by excluding such matter as does not apply to every ' Shaker Village ' in our land ; at the same time we congratulate Shirley on its success in captivating such an illustrious chronicler. Ed.]\nMrs. E. B. Duffy\nMATILDA A. BUTLER\nTHOMAS PAINE\nT. S. ARTHUR\nEMILIO CASTELAR\nDAVID SWING\nEMELINE BROADWAY\nMARY ELLA BRIGGS\nLARZ ERICKSON\nTHEODORE GORHAM\nELLEN ROSS\nJ. JESSE FONDA\nREV. J. T. SUNDERLAND\nKev. J. F. Clymer, now of Glens Falls, N. Y. Our thanks to It. M. Offard, for putting the same in tract form.\u2014 Ed.1\nANN BUSBY\nTHEO. GORHAM\nJ. M. Peebles, in the R. P. Journal for September 9, writes a most stirring defense of the Organization of Spiritualists lately inaugurated at Philadelphia. His arguments in favor of the name adopted by the organization \u2014 Christian Spiritualists \u2014 embrace a brilliant effort. But hear how he descants of the present status and needs of genuine spiritualism:\nEMMA J. NEAL\nDANIEL, FRASER\nW. H. RUSSELL\nHENRY MANTLE\nJAS. G. EUSSELL\nJ. HACKER\nElder TIMOTHY RANDLETT\nJULIA O'CONNELL\nMABTHA J. ANDERSON\nNELSON CHASE\nJANE A. CORNELL\nHuxley\nHenry T. Child, M.D.\nBY THE EDITOR \nCAROLINE E. BRIGGS\nMARIAN PATRICK\n 'ALBATROSS.'\nX. A. Willard\nALONZO G. HOLLISTER\nD. F. CABLE\nSUSANNA COLE LIDDELL, JR.\nDR. C. A. GUILMETTE\nELDER F. W. EVANS\nMARCIA E. HASTINGS\nROSIE MORSE\nRabbi Jastrow of Philadelphia, in a discourse demanding the opening of the centennial exhibition on the Sabbath, answered the above question, No !\nM. S. Wetmore\nRev. Joe Cook\nHORTENSE HOOSER\nGeo. Albert Lomas. \xb131 James G-. Russell\nLouis Basting\nW. H. BUSSELL\nHENRY GEORGE\nTHEODORE TILTON\nDr. Charles Alex. Guilmette\nJOHN G. WHITTIER\nELIZABETH MARTIN\nHERVEY L. EADES\nISABEL E. PATRICK\nHENRY CUMINGS\nGeo. Noyes Miller\nG. B. Amery [sic.] thus discourses upon a subject which very many unthinkingly and unfavorably criticise.\u2014Ed.]\nJOHN RUSKIN\nL. K. WASHBURN\nSARAH ANN NEAL.\n' M. S. W.' We copy a portion of it below, giving the title above. Few subjects demand more thought and action than does this.\u2014 Ed. Shaker.]\nFREDERICK W. EVANS\nJACOB KULP\nHEWITT CHANDLER\nGEO. W. SMART\nRUSSELL HASKELL\nDerzhavin. This poem is said to have been translated into Japanese, by order of the Emperor, and is hung up, embroidered in gold, in the temple of Jeddo. It has also been translated into the Chinese and Tartar languages, written on a piece of rich silk, and suspended in the Imperial Palace atPebin. It is a noble composition, worthy of these honors.]\nMARCIA HASTINGS\nADIN BALLOU\nA. C. STICKNEY\nAM. SOCIALIST \nGEN, McCLELLAN IN N. Y. WORLD\nEDITH\nWM. ADLER\nAGNES E. NEWTON\nL. CLAPP\nWM. H. BUSSELL \nALONZO HOLLISTER \nDANIEL ORCUTT \nDANIEL FRASER \nJ. M. PEEBLES [and] ELVAH F. COLLINS\nWATSON ANDREWS \nANDREW BARRETT \nA. L. Griffin\nF. W. Evans \nGEO. ALBERT LOMAS \nBY THE EDITOR\nMary Lowe Dickinson \nOwen \nBond \nOhio Farmer\nJames G. Russell \nELDER ABRAHAM PERKINS \nSARAH A. NEAL \nEMMA J. NEAL \n ALONZO HOLLISTER \n ELDER F. W. EVANS \nA Visionary Dream by one of the Shaker Sisters\n JAMES G. RUSSELL \nEDITH D. CASWELL \n ELDER HENRY C. BLINN \nE.\n NANCY G. DANFORD \n JOSEPHINE E. WARE \nF.\n JAMES S. PRESCOTT \nRUTH WEBSTER \nGEO. ALBERT LOMAS\n J. C. Bundy\nO. C. HAMPTON \nMARIA WHEELER \nELDER F. W. EVANS \nRev. Wm. P. Tilden \nJAMES S. PRESCOTT \nJACOB KULP \nANN BUCKINGHAM \nEUNICE HUNTINGTON \nElder Otis Sawyer \nCORA M. NEWHALL \nP. B. Randolph \nELDER GILES B. AVERY \nWM. PERKINS \nCorrespondent\nM. E. Hastings \nLEWIS HORTON \nWILLIAM G. LIBBBY \nAbraham Perkins \nELVAH F. COLLINS\nWilliam A. Hinds\nWILLIAM G. LIBBEY\nALFRED E. DOYLE\nTHE SISTERHOOD\nS. G. Livermore\nLIZZIE C. DORE\nFlavius Josephus\nRobert Hall\nBishop Porteus\nELDER GILES B. AVERY\nDR. THOMPSON\nJANE CORNELL\nO. PRENTISS\nABIGAIL CROSMAN\nE. D. Babbitt \nPAUL H. HAYNE\nG. A. Lomas\nELDRESS A. DOOLITTLE\nElder F. W. Evans at Watkins, N. Y.)\nHORTENCY G. HOOSER\nISABELL E. PATRICK\n'A. D.'\nR. J. Kendall, M. D\nE. W. Stevens\nAndrew Jackson Davis\n \nHENRY T. CLOUGH.\nJAMES S. GLASS\nELDER P. W. EVANS\nT. Dewitt Talmage\nAdelaide Proctor\nM. R. H.\nELIZAETTE SUTTON\nCATHARINE ALLEN\nE. F. COLLINS\nAMELIA J. CALVER\nWords by E. Martin. Music M. R. H.\nJACOB S. KULP\nEMIL BRETZNER\nFrances E. Willard\nJohn Bunyan\nA. Bronson Alcott\nGRANVILLE T. SPROAT\nDr. Alexander Clark\nT. A. Bland\nJoseph B. Rotherham\nGEORGE H, GARPHIE\n'T. C. W.\nF. W. Evans.\nOliver Prentiss.\n h. m.\nH. E. M.\n H. M. C.\nCHARLES PARRY\nDr. Wellington\nCor.\nJudge Colt\nAlice Cary\nMary Lowe Dickenson C. G. Reed\nD. D. Home\nJonathan Talcott\nElder Evans\nWATSON ANDREWS&gt;\nLEWIS HORTON\nELVA F. COLLINS\nH. L. Eads\nC. M. OVERTON\nWM, H. BUSSELL\nD. Fraser\nS. F. C.\nC. P.\nAlbert Barnes\nThe Publishers\nC. G. Reed\nJ. A.\nMARTHA ANN BURGUR\nANNA STEPHENS\nCHAS. G. BARCLAY\nELIZA SHARP\nG. B.\nD. M. Bennett\nDora Goodale\nWhittier\nFather Ryan\nM. R. HILLSGROVE\nOwen Feltham\nJOSEPHINE MC LAUGHLIN\nREV. WILLIAM LAMSON, D. D.\nI. K. LOMBARD\nThe Rev. Thomas K. Beecher\nGrenville T. Sproat\nElder H.L. Eads\nCol. R.G. Ingersoll\nEMILY OFFORD\nELDER H. L. EADS\nELVAH COLLINS\nSARAH JANE BERGER\nLUCY BOWERS\nANNIE STEPHENS\nLOUISA E. GREEN\nAnna White. Mt. Lebanon, N. Y.\nThe Ministry\nRHODA R. HOLLISTER\nBABOO KESHUB CHUNDER SEN\nOLA L. WHITCOMB\nS. A. NEALE\nMARTHA J. ANDEIRSON\nELLEN P. ALLERTON\nRobt. Ingersoll\nELIZABETH A. KIDD\nGILES B. A VERY\nBY ALICE CAREY\nMartha J. Anderson Mt. Lebanon, N. Y..\nANN AFFORD\nMARTHA ANN BURGER\nR. W. Dale\n Ida T. Burger\nANNA ERWIN\nW. K. BARBER\nALICE CHADWICK\nG. Q.\nD. L. Orcutt\nGodfrey Wilhelm von Leibnitz\nJames G. Russell&gt;\nArthur M. Baker\nJ. R. Newton\nHERVEY L. EADS\nJANE M. BRAINARD\nKeche Behzeka\nSaxe.\nJoseph W. Nye\nEVELYN STROWBRIDGE\nMRS. HARTER\nLizzie Morton.\nJoseph Parker\nHORTENSE G. HOOSER\nJ. C. N.\nFrancis A. Walker\nJohn Whiteley\n\n".split("\n"));var N=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"first"},l.a.createElement("img",{src:o,alt:"Hamilton logo",width:"145",height:"60",className:"HamiltonLogo"})),l.a.createElement("div",{className:"advancedWrapper"},l.a.createElement("div",{className:"dropdownA"},l.a.createElement("button",{className:"dropbtnA"},"Advanced Search"),l.a.createElement("div",{className:"dropdown-contentA"},l.a.createElement("a",{href:"/ArticleType"},"Article Type"),l.a.createElement("a",{href:"/Author"},"Author"),l.a.createElement("a",{href:"/VolumeIssue"},"Volume & Issue"))),l.a.createElement("h2",null," ",l.a.createElement("a",{class:"advancedSearch",href:"/"}," Basic Search "))),l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("img",{src:E,alt:"Shaker logo",width:"600",height:"150",className:"ShakerLogo"}),l.a.createElement("div",{class:"alphabet"},l.a.createElement("form",{action:"#",method:"POST"},l.a.createElement("button",{type:"submit",value:"A",name:"letter"},"A"),l.a.createElement("button",{type:"submit",value:"B",name:"letter"},"B"),l.a.createElement("button",{type:"submit",value:"C",name:"letter"},"C"),l.a.createElement("button",{type:"submit",value:"D",name:"letter"},"D"),l.a.createElement("button",{type:"submit",value:"E",name:"letter"},"E"),l.a.createElement("button",{type:"submit",value:"F",name:"letter"},"F"),l.a.createElement("button",{type:"submit",value:"G",name:"letter"},"G"),l.a.createElement("button",{type:"submit",value:"H",name:"letter"},"H"),l.a.createElement("button",{type:"submit",value:"I",name:"letter"},"I"),l.a.createElement("button",{type:"submit",value:"J",name:"letter"},"J"),l.a.createElement("button",{type:"submit",value:"K",name:"letter"},"K"),l.a.createElement("button",{type:"submit",value:"L",name:"letter"},"L"),l.a.createElement("button",{type:"submit",value:"M",name:"letter"},"M"),l.a.createElement("button",{type:"submit",value:"N",name:"letter"},"N"),l.a.createElement("button",{type:"submit",value:"O",name:"letter"},"O"),l.a.createElement("button",{type:"submit",value:"P",name:"letter"},"P"),l.a.createElement("button",{type:"submit",value:"Q",name:"letter"},"Q"),l.a.createElement("button",{type:"submit",value:"R",name:"letter"},"R"),l.a.createElement("button",{type:"submit",value:"S",name:"letter"},"S"),l.a.createElement("button",{type:"submit",value:"T",name:"letter"},"T"),l.a.createElement("button",{type:"submit",value:"U",name:"letter"},"U"),l.a.createElement("button",{type:"submit",value:"V",name:"letter"},"V"),l.a.createElement("button",{type:"submit",value:"W",name:"letter"},"W"),l.a.createElement("button",{type:"submit",value:"X",name:"letter"},"X"),l.a.createElement("button",{type:"submit",value:"Y",name:"letter"},"Y"),l.a.createElement("button",{type:"submit",value:"Z",name:"letter"},"Z"))),l.a.createElement("div",{className:"well"},l.a.createElement("div",{className:"AutoComplete-Component"},l.a.createElement(d,{items:S}))))};var R=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Volume and Issue"))};var L=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"Showing results for: ",window.token1),l.a.createElement("div",{class:"searchBar"},l.a.createElement(h,null)),l.a.createElement("div",{className:"advancedWrapper"},l.a.createElement("div",{className:"dropdownA"},l.a.createElement("button",{className:"dropbtnA"},"Advanced Search"),l.a.createElement("div",{className:"dropdown-contentA"},l.a.createElement("a",{href:"ArticleType"},"Article Type"),l.a.createElement("a",{href:"Author"},"Author"),l.a.createElement("a",{href:"VolumeIssue"},"Volume & Issue"))),l.a.createElement("h2",null," ",l.a.createElement("a",{class:"advancedSearch",href:"/"}," Basic Search "))),l.a.createElement("p",null,window.token2))};var b=window.articlesList,p=(Object.keys(b).map((function(e){return l.a.createElement("option",{value:e},b[e])})),function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{class:"searchBar"},l.a.createElement(h,null)),l.a.createElement("div",{id:"first"},l.a.createElement("a",{href:"http://elib.hamilton.edu/"},l.a.createElement("img",{src:o,alt:"Hamilton logo",width:"145",height:"60",class:"HamiltonLogo"}))),l.a.createElement("div",{className:"advancedWrapper"},l.a.createElement("div",{className:"dropdownA"},l.a.createElement("button",{className:"dropbtnA"},"Advanced Search"),l.a.createElement("div",{className:"dropdown-contentA"},l.a.createElement("a",{href:"/ArticleType"},"Article Type"),l.a.createElement("a",{href:"/Author"},"Author"),l.a.createElement("a",{href:"/VolumeIssue"},"Volume & Issue"))),l.a.createElement("h2",null," ",l.a.createElement("a",{class:"advancedSearch",href:"/"}," Basic Search "))),l.a.createElement("img",{src:E,alt:"Shaker logo",width:"200",height:"60",class:"ShakerLogoResults"}),l.a.createElement("p",null,"Showing results for: ",window.enteredText),l.a.createElement("div",null,b.map((function(e,n){return l.a.createElement("div",{key:n},l.a.createElement("h3",null,e[0]),l.a.createElement("p",null,e[1]))}))))});var v=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"first"},l.a.createElement("img",{src:o,alt:"Hamilton logo",width:"145",height:"60",className:"HamiltonLogo"})),l.a.createElement("div",{className:"advancedWrapper"},l.a.createElement("div",{className:"dropdownA"},l.a.createElement("button",{className:"dropbtnA"},"Advanced Search"),l.a.createElement("div",{className:"dropdown-contentA"},l.a.createElement("a",{href:"ArticleType"},"Article Type"),l.a.createElement("a",{href:"Author"},"Author"),l.a.createElement("a",{href:"VolumeIssue"},"Volume & Issue")))),l.a.createElement("h2",null," ",l.a.createElement("a",{class:"advancedSearch",href:"/"}," Basic Search ")),l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("img",{src:E,alt:"Shaker logo",width:"600",height:"150",className:"ShakerLogo"}),l.a.createElement("br",null),l.a.createElement("p",null,"Authors whose name begins with the letter ",window.firstLetter," "),l.a.createElement("p",null,"Results:"),l.a.createElement("form",{action:"/AuthorNames",method:"POST"},window.namesOfLetter.map((function(e,n){return l.a.createElement("div",{className:"articleResults",key:n},l.a.createElement("button",{className:"btn-link",type:"submit",value:e[0]+" "+e[1],name:"name"},l.a.createElement("h3",null,e[0]," ",e[1])))}))))},I=t(61),O=t(6);a.Component;var T=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"first"},l.a.createElement("img",{src:o,alt:"Hamilton logo",width:"145",height:"60",className:"HamiltonLogo"})),l.a.createElement("div",{className:"advancedWrapper"},l.a.createElement("div",{className:"dropdownA"},l.a.createElement("button",{className:"dropbtnA"},"Advanced Search"),l.a.createElement("div",{className:"dropdown-contentA"},l.a.createElement("a",{href:"/ArticleType"},"Article Type"),l.a.createElement("a",{href:"/Author"},"Author"),l.a.createElement("a",{href:"/VolumeIssue"},"Volume & Issue")))),l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("img",{src:E,alt:"Shaker logo",width:"600",height:"150",className:"ShakerLogo"}),l.a.createElement("div",{className:"searchBar"},l.a.createElement(h,null)))},H=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(I.a,null,l.a.createElement(O.c,null,l.a.createElement(O.a,{path:"/",exact:!0,component:T}),l.a.createElement(O.a,{path:"/ArticleType",component:A}),l.a.createElement(O.a,{path:"/AuthorList",component:p}),l.a.createElement(O.a,{path:"/Author",exact:!0,component:N}),l.a.createElement(O.a,{path:"/VolumeIssue",component:R}),l.a.createElement(O.a,{path:"/Results",component:L}),l.a.createElement(O.a,{path:"/AuthorNames",component:v}))),l.a.createElement("div",{className:"footer"},l.a.createElement("p",null," ",l.a.createElement("a",{className:"footer",href:"http://elib.hamilton.edu/"}," \xa92020 Hamilton College")," ")))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root"))},15:function(e,n,t){},69:function(e,n,t){}},[[110,1,2]]]);
//# sourceMappingURL=main.25d6b73e.chunk.js.map