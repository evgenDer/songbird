const BIRDS_DATA = [
  [
    {
      id: 1,
      name: "Чечевица",
      species: "Carpodacus erythrinus",
      description:
        "Птица размером с воробья. Самки и молодые птицы имеют довольно однотонное зеленовато-бурое или буро-оливковое оперение с более светлыми горлом и брюшком; крылья и хвост бурые, на голове, спине и груди - плохо различимые продольные темные пестрины.",
      image: "https://live.staticflickr.com//65535//49959480107_84bcd3ef7a.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/LHKLVTXBWH/XC575827-Ciuffolotto%20scarlatto%2000%2C55%20Sergio.mp3",
    },
    {
      id: 2,
      name: "Зеленушка",
      species: "Carduelis chloris",
      description:
        "Обычный гнездящийся, перелетный, транзитно мигрирующий и в небольшом количестве зимующий вид. В южной Беларуси часть птиц живет оседло. Встречается на всей территории. Зимой на севере Беларуси редок, на юге – обыкновенная птица.",
      image: "https://live.staticflickr.com//65535//50154852423_ea0ac46fd5.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/AGCYXCXXSH/XC576057-green%2014%206.mp3",
    },
    {
      id: 3,
      name: "Чиж",
      species: "Carduelis spinus",
      description:
        "Оперение взрослого самца желтовато-зеленое, верх головы и пятно на горле черно-бурые, спина зеленая, хвост и крылья зеленовато-бурые; крылья с двумя желтоватыми поперечными полосками на них; по бокам груди - продольные темные пестрины.",
      image: "https://live.staticflickr.com//65535//49715702732_4716927c4e.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC575791-Train%20des%20aulnes%20migration%20au%20dessus%20de%20la%20Baltique.mp3",
    },
    {
      id: 4,
      name: "Щур",
      species: "Pinicola enucleator",
      description:
        "Оперение взрослого самца малиново-красное, с бурыми пестринами на голове и спине; крылья и хвост красновато-бурые, белые вершины кроющих перьев крыла образуют две поперечных белых полосы. Клюв и ноги светло-бурые.",
      image: "https://live.staticflickr.com//65535//49693930203_a6028b91cf.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC533741-Durbec%20des%20sapins%20Theo.mp3",
    },
    {
      id: 5,
      name: "Просянка",
      species: "Emberiza calandra",
      description:
        "Отличается однотонной буровато-серой окраской оперения с более темными продольными пестринами на голове, спине, груди и боках тела. Поясница и надхвостье темно-бурые. Горло и брюшко грязно-белые, клюв и ноги светло-бурые.",
      image: "https://live.staticflickr.com//65535//50183925948_8266d64248.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/QAJPWEPSTL/XC574830-graua0519.mp3",
    },
    {
      id: 6,
      name: "Поползень",
      species: "Sitta europaea",
      description:
        "В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц оберегает от вредителей десятки деревьев.",
      image: "https://live.staticflickr.com//65535//50228462017_966953a031.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/SITTELABlack%20AmbuaFL%201sttrip.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Камышница",
      species: "Gallinula chloropus",
      description:
        "Средней величины птица (размером с куропатку), но тело плоское, сжато с боков. Хвост вздернут. Ноги длинные с такими же пальцами, из которых средний длиннее плюсны. Оперение взрослых птиц в основном матово-черное. Спина и верхние конечности крыльев оливково-бурые.",
      image: "https://live.staticflickr.com//65535//50214641801_5afe21711c.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/HRVQAOEHRR/XC573941-Coot1.mp3",
    },
    {
      id: 2,
      name: "Коростель",
      species: "Crex crex",
      description:
        "Тело с боков плоское, клюв короткий, высокий у основания, сжатый посередине с боков. Голова сверху темно-бурая, щеки и брови серые. Спинные перья с продольными темными стержневыми пятнами и охристыми каймами, отчего общий фон спинной поверхности продольно-полосатый, гармонирующий по цвету с сухой травой.",
      image: "https://live.staticflickr.com//879//42080821464_1a4fd26b15.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/DNOPIGZNKE/XC568212-Crex%20Crex.mp3",
    },
    {
      id: 3,
      name: "Лысуха",
      species: "Fulica atra",
      description:
        "Водоплавающая птица размером с небольшую утку. Самец и самка окрашены в однотонный серо-черный цвет, на лбу - участок белой оголенной кожи («бляшка»). Клюв белый, окраска ног изменчива - от желто-зеленой до оранжево-красной.",
      image: "https://live.staticflickr.com//65535//50166069968_57d8a40144.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VROUALCTKG/XC513966-Red-knobbed%20Coot%20%28call%20%2B%20juv%2C%20Mallorca%2C%20Albufera%2C%20aug2019%2C%201%29.mp3",
    },
    {
      id: 4,
      name: "Пастушок",
      species: "Rallus aquaticus",
      description:
        "Оперение спинной стороны тела и кроющие крыла оливково-бурые с черными продольными пестринами. Бока головы, шея спереди, зоб и передняя часть брюха аспидно-серые. Бока тела и брюхо испещрены черными и белыми полосами.",
      image: "https://live.staticflickr.com//65535//50239977681_7ccfa8517b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/YRDADNREOP/XC470841-Rallus_longirostris_SPTB_17.03.19_11.11.mp3",
    },
    {
      id: 5,
      name: "Погоныш",
      species: "Porzana porzana",
      description:
        "Оперение самца, самки и молодой птицы окрашено почти одинаково. В брачном наряде часть головы аспидно-серая. Уздечка почти черная. Горло, шея, зоб, а также полоска над глазом пепельно-серые, спинная сторона оливково-бурая с крупными черными и мелкими белыми продольными пестринами.",
      image: "https://live.staticflickr.com//65535//50006434256_9d0ee32fe4.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/QERMVZCPVV/XC567243-20200610_215637_namnl%C3%B6st_Edeby%2C%20Sm%C3%A5fl%C3%A4ckig%20sumph%C3%B6na.mp3",
    },
    {
      id: 6,
      name: "Журавль",
      species: "Grus grus",
      description:
        "Окраска оперения самцов и самок в основном сизовато-серая. Лоб покрыт редкими волосовидными перьями. На темени красная «шапочка» - участок голой бородавчатой кожи.",
      image: "https://live.staticflickr.com//65535//50229092068_e5843d9ca8.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Глухарь",
      species: "Tetrao urogallus",
      description:
        "Глухарь живет оседло и может быть встречен в угодьях в любое время года. Он обитает в малопосещаемых глухих участках леса, ведет скрытный, в бесснежный период преимущественно наземный образ жизни.",
      image: "https://live.staticflickr.com//65535//49887198856_1470797c83.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/JCCKAYHRKO/XC528232-200215-001_Teturo_1.mp3",
    },
    {
      id: 2,
      name: "Рябчик",
      species: "Bonasa bonasia",
      description:
        "У взрослого самца верх головы, шея и передняя часть спины рыжевато-серые с поперечным рисунком из бурых полос. Низ спины, поясница и надхвостье однотонно-серые с тонкими продольными темно-бурыми штрихами.",
      image: "https://live.staticflickr.com//65535//49184013111_529af96c03.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC486226-190708_0097%20RUGR%203m%20Lye%200530%20mp3%20amp.mp3",
    },
    {
      id: 3,
      name: "Тетерев",
      species: "Lyrurus tetrix",
      description:
        "Взрослый самец черный с фиолетово-голубым отливом на голове, шее, спине и груди. На крыльях зеркальца в виде двух белых полосок, подбой крыла белый. Подхвостье ярко-белое. Задняя часть брюха бурая с широкими белыми вершинами перьев.",
      image: "https://live.staticflickr.com//65535//49701584252_7ea628fc71.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC483900-Orre_05.mp3",
    },
    {
      id: 4,
      name: "Куропатка",
      species: "Perdix perdix",
      description:
        "Тело у укороченное, компактное, с небольшой головой, широкими округлыми крыльями. Оперение серое со светлыми продольными пестринами на крыльях и поперечными буроватыми по бокам. На брюхе темно-бурое подковообразное пятно.",
      image: "https://live.staticflickr.com//65535//49890169462_1199773b00.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/EEOAIANXMX/XC572164-Grey%20Partridge%20GM%2020200604%202201.mp3",
    },
    {
      id: 5,
      name: "Перепел",
      species: "Coturnix coturnix",
      description:
        "На голове четко выделяются три продольных темно-бурых полосы, на спинной стороне хорошо заметны многочисленные белые стреловидные полоски в сочетании с черными поперечными пятнами. Грудь с мелкими продольными белыми пестринами.",
      image: "https://live.staticflickr.com//65535//49096421116_49370ea9e4.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/CTBGPXUOSF/XC572545-01.mp3",
    },
    {
      id: 6,
      name: "Фазан",
      species: "Phasianus colchicus",
      description:
        "Крылья светло-бурые. На спине - сложный узор из черных пятен и чешуевидного рисунка из перьев с красноватым окаймлением. Зоб, грудь, бока тела медно-красные с черными бархатистыми вершинными каймами перьев.",
      image: "https://live.staticflickr.com/65535/50239204518_8e9b7351a6.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/YDQKMZXDRL/XC468863-DM672524_Fasankontaktruf_rau3_xc-ab3komma2_bereinigt.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Выпь",
      species: "Botaurus stellaris",
      description:
        "Темя взрослой птицы черное, спина черная с охристыми пестринами. Маховые и рулевые перья ржаво-рыжие с темно-бурым поперечным рисунком, шея и брюшная сторона охристо-желтые с бурыми пестринами. Клюв зеленовато-желтый, ноги бледно-зеленые.",
      image: "https://live.staticflickr.com//65535//50184115383_c081e6f911.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/KHMIFINMLO/XC544364-Butor%2021h53.mp3",
    },
    {
      id: 2,
      name: "Кваква",
      species: "Nycticorax nycticorax",
      description:
        "Окраска оперения взрослых птиц довольно контрастная: верх головы и плечи черные с металлическим отливом, лоб, грудь и брюхо белые, крылья и хвост серые. На голове - пара длинных белых перьев, в виде хохла свисающих на спину.",
      image: "https://live.staticflickr.com//65535//50237550897_953f124885.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC579875-JAREK-MATUSIAK-775%20%282%29.mp3",
    },
    {
      id: 3,
      name: "Цапля",
      species: "Ardea alba",
      description:
        "Снежно-белая окраска оперения. Весною у взрослой птицы на затылке имеется небольшой хохол, а на плечах - два пучка длинных рассученных перьев, так называемые «эгретки».",
      image: "https://live.staticflickr.com/65535/50236947158_194c1c4547.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/TJSRKPHQNP/XC515993-191204_0148.mp3",
    },
    {
      id: 4,
      name: "Аист",
      species: "Ciconia ciconia",
      description:
        "Окраска оперения в основном белая, только маховые перья и задняя часть спины черные. Клюв и ноги у взрослых аистов красные, однако у молодых клюв темно-серый, почти черный.",
      image: "https://live.staticflickr.com//65535//50237464222_e9c737101f.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/LNDCYHUSPR/XC527477-12%20feb.%2013.35%20cig%C3%BCe%C3%B1as.mp3",
    },
    {
      id: 5,
      name: "Каравайка",
      species: "Plegadis falcinellus",
      description:
        "Довольно крупная птица на высоких ногах. Клюв длинный, дуговидно изогнутый книзу. Окраска оперения темно-коричневая с зеленым и фиолетовым отливом на верхней стороне тела.",
      image: "https://live.staticflickr.com/65535/50220761941_6f55537e16.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/METIPYBSWG/XC530954-Plegadis_Lezirias_15022020.mp3",
    },
    {
      id: 6,
      name: "Колпица",
      species: "Platalea leucorodia",
      description:
        "Крупная птица с довольно длинными ногами, отличается от других голенастых плоским, лопатообразно расширенным на конце клювом. Оперение белое, на затылке буровато-желтый хохол, на груди - такого же цвета пятно. Ноги черные, клюв у взрослой птицы черный с желтой вершиной.",
      image: "https://live.staticflickr.com//65535//50231057118_c5d8b0022b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC380956-cri%20spatule.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Гуменник",
      species: "Anser fabalis",
      description:
        "У взрослых птиц спина серовато-бурая, поясница черно-бурая, голова и шея значительно темнее, зоб и грудь серовато-белые, брюхо, подхвостье и верхние кроющие хвоста белые. Ноги желтые, у некоторых особей светло-оранжевые или мясного цвета.",
      image: "https://live.staticflickr.com//65535//49561199221_91bd5dfb71.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GCTHJSYXXM/XC544981-200328_0063%20Matolampi%201%20hanhi%20yli%20ja%20joutsenet.mp3",
    },
    {
      id: 2,
      name: "Гусь",
      species: "Anser albifrons",
      description:
        "Окраска буровато-серая, похож на серого гуся, но верх значительно темнее, надхвостье пепельно-серого цвета. На груди и брюхе крупные, неправильных очертаний поперечные черные пятна. На лбу вокруг клюва белое пятно, не заходящее на темя.",
      image: "https://live.staticflickr.com//65535//50155925381_4064696de3.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/KTBMJVGTZO/XC540365-Bl%C3%A4ssgans_NFC_NW_31.03.2020_23.12_mitAufi.mp3",
    },
    {
      id: 3,
      name: "Лебедь",
      species: "Cygnus bewickii",
      description:
        "Лапы черные. Радужина черно-бурая. У молодых спина дымчато-серая, но верх шеи и бока головы дымчато-бурые. Горло, передняя сторона шеи и ее основная часть белые.",
      image: "https://live.staticflickr.com//65535//48213711876_2879217254.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/CTIZHRLKDH/XC565070-Cigno%20selvatico%20flight-call%20lettonia%2031-08-2019.mp3",
    },
    {
      id: 4,
      name: "Турпан",
      species: "Melanitta fusca",
      description:
        "Крупная утка с массивным туловищем, относительно короткой шеей и большими лапами. Оперение самца черное с зеленовато-фиолетовым отливом, лучше заметным весною. Под глазом белое пятно, «зеркальце» крыла тоже белое.",
      image: "https://live.staticflickr.com//65535//50083574616_df3e3bb463.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BBJSEFYVPV/XC579540-Velvet%20Scoter%2028th%20July.mp3",
    },
    {
      id: 5,
      name: "Луток",
      species: "Mergellus albellus",
      description:
        "краска оперения самца лутка белая, с черными пятнами возле клюва и на затылке, узкими поперечными полосами того же цвета на груди и спине. Кроющие крыльев и рулевые перья серые. Самка и молодые птицы буровато-серые, с каштаново-бурой головой и белыми щеками.",
      image: "https://live.staticflickr.com//65535//49986981771_ff6a6a2da7.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC565110-Salskrake_06.mp3",
    },
    {
      id: 6,
      name: "Шилохвость",
      species: "Anas acuta",
      description:
        "Самка окрашена более однообразно. Сверху ее оперение темно-бурое, голова и шея рыжеватые с бурыми пестринами. Большие кроющие крыла и второстепенные маховые белые, на крыльях они образуют две белые поперечные полосы.",
      image: "https://live.staticflickr.com//65535//50233854767_ffb9dd8aa1.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GNYVMVEMZX/XC509528-onagagamo_191201_sub.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Авдотка",
      species: "Burhinus oedicnemus",
      description:
        "Оперение самцов и самок сверху серовато-охристое, с продольными черными или темно-бурыми пестринами. Надхвостье поперечно-полосатое. Горло и зоб беловатые с узкими темными стержневыми штрихами.",
      image: "https://live.staticflickr.com//65535//50122779692_e79f01c442.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/IGFROYWVEW/XC541630-03h07_oedic%20pour%20XC.mp3",
    },
    {
      id: 2,
      name: "Хрустан",
      species: "Charadrius morinellus",
      description:
        "рудь и бока тела коричневато-рыжие. Середина брюшка черная. Подхвостье белое с примесью охристых перьев. Маховые перья черно-бурые. Рули буроватые с поперечной черной предвершинной полосой, кончики перьев, кроме средней пары, белые.",
      image: "https://live.staticflickr.com//65535//50094569666_c340f3bfeb.jpg",
      audio:
        "//www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC570939-Fj%C3%A4llpipare_03.mp3",
    },
    {
      id: 3,
      name: "Шилоклювка",
      species: "Recurvirostra avosetta",
      description:
        "Окраска контрастная: верх головы и шеи, полосы на крыльях и вершины крыльев черные, остальное оперение белое. Клюв черный, ноги голубовато-серые, три передних пальца ног соединены перепонками.",
      image: "https://live.staticflickr.com//65535//50231617058_21ff06e3fc.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/JYPQCEFKAM/XC564881-200520-210457alfaiate.mp3",
    },
    {
      id: 4,
      name: "Бекас",
      species: "Gallinago gallinago",
      description:
        "Для облика бекаса характерен длинный клюв и относительно короткие ноги. Самец и самка окрашены одинаково. Верх головы буровато-черный, от основания клюва через лоб и темя проходят к затылку две широкие черные полоски.",
      image: "https://live.staticflickr.com//65535//50240390871_32764d9b83.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MPIWQQPFVT/XC579438-1595872076131_enkeltbekkasin%2020190707_011105-1-0%20%28online-audio-converter.com%29.mp3",
    },
    {
      id: 5,
      name: "Тиркушка",
      species: "Glareola nordmanni",
      description:
        "Низ светло-рыжевато-бурый, брюхо белое. От глаз вокруг горла идет узкая черная полоса. Маховые перья и вся нижняя сторона крыла черные. Крайние рулевые перья у основания белые, остальной хвост коричнево-черный.",
      image: "https://live.staticflickr.com//65535//49202073121_c0433d6c6e.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/HSDXZXXJYF/XC435351-BIF2306-1_MHExxx_2-11_120502_GlaNor-FC_aze_besh-barmag.mp3",
    },
    {
      id: 6,
      name: "Моёвка",
      species: "Rissa tridactyla",
      description:
        "У взрослой птицы спинная сторона голубовато-сизая, голова, хвост и вся нижняя сторона тела белые, вершины маховых перьев черные. Клюв буровато-желтый, восковый, ноги черные, на ноге - 3 пальца",
      image: "https://live.staticflickr.com//65535//50079908826_9bd7901322.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487339-2018-07-14%20Melaleiti%20Arnastapi%20Ondverdarnes%20180714%20Mouette%20tridactyle%20%282%29.mp3",
    },
  ],
];

export default BIRDS_DATA;
