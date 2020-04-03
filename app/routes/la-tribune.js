import Route from '@ember/routing/route';

export default Route.extend({

  async model() {
    return [{
      id: 1,
      name: 'L\'équipe',
      articles: [
        {
          id: 1,
          title: 'Mot de la rédaction',
          postDatetime: '2020-03-02',
          updateDatetime: '2020-03-02',
          desc: 'Un petit mot pour vous expliquer qui nous sommes, nos buts et ce à quoi vous pouvez vous attendre de la part de la Tribune de L’Agenda.',
          content: '<b>Un petit mot pour vous expliquer qui nous sommes, nos buts et ce à quoi vous pouvez vous attendre de la part de la Tribune de L’Agenda.ca. </b><br><br>' +
            'Tout d’abord il me fait grand plaisir de vous accueillir en tant que fondateur de L’Agenda et de rédacteur en chef de sa tribune parmi nous. Au nom de toute l’équipe je vous remercie d’avoir pris la peine de venir jeter un coup d’œil à notre site web qui je l’espère, vous aura séduit. Il est important pour moi de souligner le travail de maître de Nicolas Signori en tant que développeur et administrateur web sans qui tout cela aurait été impossible. Évidemment je veux aussi remercier les autres collaborateurs et tout spécialement le Cofondateur de L’Agenda Jonathan Carreiro-Benoît.</b><br><br>' +
            'Trêve de remerciements et passons aux choses sérieuses. Nous avons expliqué nos motivations plus en détails et notre plan d’attaque dans le texte Pourquoi L’Agenda, mais je me permets un petit résumé. L’Agenda se veut un collectif politique permettant l’expression de plusieurs opinions et le débat de celles-ci dans le respect qu’il se doit. Notre équipe de rédaction est composée d’un militant péquiste et bloquiste, mais aussi d’un ancien candidat et militant libéral. Nous voulons ainsi offrir une garantie d’impartialité et éviter la censure et la partisanerie qui gangrène déjà suffisamment l’espace médiatique et publique. Vous trouverez des chroniques de gauche tout comme de droite. Vous lirez sur des sujets plus généralistes, mais aurez aussi la chance de lire des textes sur des sujets plus pointus pour permettre un approfondissement des sujets qui définissent nos sociétés. La Tribune se veut donc un lieu de discussion, mais aussi de réflexion. Elle se veut une extension de notre Balado et s’inscrit dans le même ordre d’idée : lutter contre le cycle vicieux de l’information constante, rapide et superficielle. Nous espérons arriver à opposer une certaine résistance aux médias traditionnels qui imposent des réponses courtes qui choquent et qui peuvent être répétées en boucle aux nouvelles de 18h et élever le débat. La société ne gagne rien d’autre que le cynisme et une impression de vide et d’opportunisme par ces méthodes sournoises. Il est temps de montrer aux gens quels sont les idéaux derrière les politiques qui nous gouvernent, derrière les candidats qui aspirent à changer le Canada et le Québec. Nous espérons de tout cœur que vous nous suivrez dans cette aventure qui s’annonce palpitante.',
          thumbnail: {
            url: '/assets/images/bg-1.jpg',
            alt: 'Description image.'
          },
          category: 1,
          authors: [
            {
              id: 1,
              firstName: 'Samuel',
              lastName: 'Lamarche',
              desc: 'Rédacteur en chef',
              photo: {
                url: '/assets/images/photoSamuel.jpg',
                alt: 'Photo Samuel Lamarche'
              }
            },
            {
              id: 2,
              firstName: 'Antoine',
              lastName: 'Poulin',
              desc: 'Adjoint à la rédaction',
              photo: {
                url: '/assets/images/photoAntoine.jpg',
                alt: 'Photo Antoine Poulin.'
              }
            }
          ]
        },
        {
          id: 3,
          title: 'Pourquoi L’Agenda?',
          postDatetime: '2020-03-02',
          updateDatetime: '2020-03-02',
          desc: 'Quelles sont les motivations qui nous animent et qui nous poussent à passer plusieurs heures par jours sur ce projet ambitieux?',
          content: 'Il est important de mettre cartes sur table pour avoir un climat de confiance entre nous. L’Agenda est un collectif naissant qui vise à créer la politique de demain, à intéresser les jeunes à devenir militant et nous caressons l’espoir d’avoir une influence sur les dirigeants du futur sur la scène provinciale, mais aussi fédérale. Comme cité libre l’a fait par le passé, L’Agenda veut permettre aux jeunes désireux de faire entendre leur voix de le faire. Nous voulons servir de tremplin pour les ambitieux, de guide pour les curieux et agir comme un moyen de communication réduisant la frontière entre le politique et la vie réelle. Toutefois, nous ne cacherons pas notre affiliation politique derrière un faux voile d’objectivité. Les deux membres fondateurs sont résolument indépendantistes. Nous traiterons de politique provinciale en priorité, mais nous accorderons au fédéral la place qu’il mérite. Nous tenterons d’inviter des gens de tous les horizons et de tous les partis. Nous avons déjà la chance d’avoir parmi nous plusieurs collaborateurs de tous les horizons et un adjoint à la rédaction en provenance du parti libéral. Notre Tribune peut se targuer de ne pas avoir de ligne éditoriale autre que celle imposée par la réalité. Un effort sera mis en place pour vous fournir des chroniques recherchées et factuelles. De plus, nous accepterons des chroniques soumises par le public du moment qu’elles sont factuelles. En effet, pour créer la politique de demain, nous croyons fermement qu’il faut briser la tendance malsaine de la radicalisation et la domination de la pureté de l’idéologie. Nous croyons qu’il faut ouvrir un dialogue et débattre dans la politesse et le respect des idéaux qui nous animent. L’Agenda, à terme, sera un site web et une communauté comprenant : Un Balado couvrant plusieurs sujets politiques tant présent que passé, des capsules vidéo éducatives et des entrevues, une tribune où nous offrirons notre opinion sur des thèmes divers et variés en plus de publier des chroniques du public. À plus long terme, notre site web offrira un service de publicité pour les associations étudiantes, politiques et sociales. Nous espérons que vous serez nombreux à nous suivre dans ce projet qui vise l’amélioration de notre démocratie, de nos institutions, mais aussi de notre société.',
          thumbnail: {
            url: '/assets/images/bg-1.jpg',
            alt: 'Description image.'
          },
          category: 1,
          authors: [
            {
              id: 1,
              firstName: 'Samuel',
              lastName: 'Lamarche',
              desc: 'Rédacteur en chef',
              photo: {
                url: '/assets/images/photoSamuel.jpg',
                alt: 'Photo Samuel Lamarche'
              }
            }
          ]
        },
      ]
    },
      {
        id: 2,
        name: 'Samuel Lamarche',
        articles: [
          {
            id: 2,
            title: 'Les budgets Trudeau, vraiment progressistes?',
            postDatetime: '2020-03-02',
            updateDatetime: '2020-03-02',
            desc: 'Depuis 2015 maintenant, Justin Trudeau est premier ministre du Canada et plusieurs décisions de sa part auront comme effet de lui tailler une place dans l’histoire politique canadienne.',
            content: 'Depuis 2015 maintenant, Justin Trudeau est premier ministre du Canada et plusieurs décisions de sa part auront comme effet de lui tailler une place dans l’histoire politique canadienne. La renégociation de l’ALÉNA sous haute pression avec les États-Unis sera probablement son plus bel accomplissement économique et diplomatique, mais sa gestion économique domestique pourrait lui valoir un tout autre regard. En effet, Trudeau et son ministre des finances Bill Morneau auront enchaîné les déficits budgétaires pour l’entièreté de leurs mandats au moment d’écrire ces lignes. Loin d’être une situation idéale, la situation devient plus problématique lorsque l’on réalise l’ampleur des déficits. 29.6 milliards en 2016  furent annoncé lors du dévoilement du budget par Bill Morneau avec comme thème central l’investissement dans les infrastructures canadiennes. Les gens furent surpris par l’ampleur de la projection après la promesse électorale de déficits modestes de 10 milliards de dollars avant un retour à l’équilibre à la fin du mandat. Fort heureusement, cette prévision était un peu trop pessimiste et la croissance économique aura permis que le déficit n’atteigne que 25.1 milliards.  On s’attendait donc à un budget un peu plus modeste en 2017 et ce fut le cas avec un déficit de 19.4 milliards de dollars.  On pouvait donc penser que les déficits étaient sous contrôle. L’économie allait bien, le ratio de la dette par rapport au PIB diminuait d’année en année et l’on se faisait à l’idée qu’il fallait effectivement investir dans nos infrastructures. Toutefois, en 2018 le gouvernement libéral continue à dépenser énormément et inscrit un 3e déficit consécutif. Cette fois, le solde budgétaire est dans le rouge de 14.9 milliards de dollars.  C’est beaucoup, mais il y a une tendance baissière qui permet d’espérer un retour à l’équilibre budgétaire dans un futur relativement proche. Surtout que l’économie va bien et affiche une croissance réelle de 2% environ.  C’était sans compter la tentation électorale, la chair est faible comme on entend parfois, et rien n’est plus vrai quand on parle de budget en année électorale. Un déficit annoncé de 19.8 milliards cette fois, mais qui sera vraisemblablement révisé selon Bill Morneau à 26.6 milliards de dollars… Retour à la case départ donc? <br><br>' +
              'Quels sont les arguments pour de telles dépenses et une tendance aux déficits aussi importante? Les taux d’intérêt sont bas, très bas même. C’est du jamais vu selon plusieurs et c’est un incitatif énorme pour le gouvernement d’en profiter pour augmenter sa croissance à long terme, mais c’est aussi une occasion en or pour investir dans des plans qui auraient été jugés trop ambitieux et coûteux autrefois. Or, de l’avis de plusieurs, il est plus intelligent de faire des déficits en période de ralentissement pour maintenir le niveau de dépenses des consommateurs et permettre une relance économique plus rapide ou à tout le moins une récession moins douloureuse. Après la fin de la crise, il est souhaitable de ramener les dépenses à la baisse et de se faire un coussin pour la prochaine crise et ainsi conserver un niveau d’endettement raisonnable. C’est ce que le Québec semble faire actuellement. La stratégie de Trudeau de dépenser autant en période de croissance est donc troublante, car elle ne semble pas être justifiée par la nature de ses investissements. Il aurait été probablement beaucoup plus acceptable pour les citoyens que les déficits s’accumulent dans un contexte de crise climatique et d’investissement vert massif. Des investissements majeurs en infrastructures de transports en commun, pour la transition économique et écologique de l’Alberta et la transition énergétique pour se débarrasser du charbon partout au Canada aurait été vue d’un bon œil, je crois, et auraient été justifiable économiquement. Pourtant, ces déficits massifs n’ont pas eu l’impact que l’on pouvait espérer. Le système de paie Phénix n’est toujours pas réparé 4 ans plus tard, l’Alberta est toujours aussi dépendante du pétrole sinon plus et le réseau de transport en commun canadien ne semble pas en voie de devenir une fierté nationale ou un modèle à suivre. Pire! On a même continué les subventions pétrolières et acheté un pipeline en triplant sa capacité et en le faisant passé sur le territoire d’une province qui n’en veut pas. Aurait-on donc financé par ces déficits notre consommation trop grande de biens et services? C’est possible et même probable, mais cette décision vient avec un prix et il est quantifiable dans l’immédiat et pourrait augmenter passablement dans le futur. Les frais de la dette à l’heure actuelle sont d’environ 24 milliards de dollars par année. C’est relativement bas en raison des taux d’intérêt, mais ils pourraient augmenter rapidement si les taux venaient à se redresser. D’autre part, en cas de crise économique, la stratégie à adopter serait d’augmenter les dépenses, mais jusqu’où le Canada sera prêt à aller? Est-ce que ces déficits empêcheront le gouvernement d’avoir une réponse appropriée ce qui toucherait durement les plus pauvres et les plus vulnérables d’entre nous? <br><br>' +
              'Il est donc important pour moi de poser une question importante aux partisans de monsieur Trudeau. Considérant les informations économiques qui sont à notre disposition, les risques de récession grandissant et la somme croissante d’argent que nous sommes forcés de verser pour le service de la dette. Est-ce que les budgets Trudeau sont véritablement progressistes? Il me semble que l’ensemble des bénéfices ne revient pas aux plus vulnérables ou même à la classe moyenne à long terme, mais que les risques reposent énormément sur ces derniers. D’autant plus que cet argent aurait pu et aurait dû être utilisé pour une véritable révolution infrastructurelle, mais qu’elle a été détournée à des fins électorales dans plusieurs cas. Les générations futures qui auraient pu bénéficier de ces infrastructures ou de cet argent pourront-ils vraiment regarder l’ère Trudeau comme étant véritablement progressiste ou plutôt comme étant une continuité de la dictature du présent et de la consommation? Seul l’avenir nous le dira, mais je suis de ceux qui pensent que les Canadiens paieront cher cette période d’excès.',
            thumbnail: {
              url: '/assets/images/bg-1.jpg',
              alt: 'Description image.'
            },
            category: 2,
            authors: [
              {
                id: 1,
                firstName: 'Samuel',
                lastName: 'Lamarche',
                desc: 'Rédacteur en chef',
                photo: {
                  url: '/assets/images/photoSamuel.jpg',
                  alt: 'Photo Samuel Lamarche.'
                }
              }
            ]
          },
          {
            id: 5,
            title: 'Le Québec et les relations internationales',
            postDatetime: '2020-03-09',
            updateDatetime: '2020-03-09',
            desc: 'On aurait tendance à croire que les relations internationales sont d’importances moindres pour une province comme le Québec qui n’a pas d’aspiration immédiate à faire son indépendance. La réalité est tout autre pourtant.',
            content: '<b>On aurait tendance à croire que les relations internationales sont d’importances moindres pour une province comme le Québec qui n’a pas d’aspiration immédiate à faire son indépendance. La réalité est tout autre pourtant. </b><br>' +
              'Depuis maintenant 25 ans, le Québec n’a pas vraiment d’aspiration à faire son indépendance dans un futur rapproché. La défaite du Oui en 95 aura refroidi les ardeurs des plus grands promoteurs de l’indépendance et aura sonné le glas de Jacques Parizeau au PQ et comme premier ministre. Pourtant, avec l’idée d’accession à l’indépendance un nouvel objectif s’était dessiné pour le Québec et tout spécialement pour monsieur Parizeau. Pour être viable, un Québec souverain devait bénéficier de la reconnaissance internationale, il devait avoir des contacts avec d’autres nations qui se rangeraient avec lui. Monsieur Parizeau avait très bien compris cette logique et pendant son règne il avait su mettre de son côté plusieurs pays notamment en Amérique Latine et en Europe. Ces relations auraient pu fructifier et devenir de véritables alliances économiques et politiques, mais nous ne le saurons jamais, car en 1995, le camp du Oui sera vaincu de justesse. <br><br>' +
              'Pourquoi donc est-ce que je vous parle de tout ça? C’est très simple, car le Québec depuis cette défaite n’a jamais vraiment su retrouver sa passion et son ambition internationale. Il s’est recroquevillé sur lui-même, sur une politique interne fade et sans ambitions autres que celle d’être une province normale. Pourtant, même sans être pour l’indépendance, il serait normal de s’inquiéter d’un tel déclin ne serait-ce que pour les opportunités économiques que le Québec laisse de côté en s’isolant de la sorte. Même Robert Bourassa, pourtant un fédéraliste convaincu savait pertinemment que le Québec dépendait énormément de ses voisins et du monde s’il voulait devenir une nation capable de pourvoir à ses ambitions. Son travail de maître auprès de Brian Mulroney pour la signature de l’accord de libre-échange avec les États-Unis et son exil en Europe entre ses mandats pour en apprendre plus sur la future Union-Européenne et même sa gestion parfois fourbe des événements comme les sommets de la francophonie pour faire ressortir le Québec étaient autant d’exemples que même un gouvernement voulant rester dans le Canada se doit d’être ouvert sur le monde. <br><br>' +
              '<h4>La bourse carbone, un rendez-vous raté avec l’histoire.</h4>' +
              'S’il y a bien une politique qui avait le potentiel de faire du Québec un leader sur la scène internationale malgré son statut de province c’était la bourse du carbone. Le potentiel était pourtant évident, mais les cartes ont été mal jouées et la malchance frappe le Québec lorsque l’Ontario succombe à la Ford Nation qui retire la province de l’accord. Pourtant un accord avec la Colombie-Britannique, plus proche de la Californie, un état déjà membre avec le Québec, aurait dû être une priorité. Les premiers ministres provinciaux auraient dû voir là une occasion formidable de faire leur part dans la gestion de la crise climatique, mais aussi comme une occasion de sécuriser leurs pouvoirs et d’éviter un empiétement du gouvernement d’Ottawa ou de Washington pour nos voisins du sud. Le Québec avait une occasion en or de devenir un chef de file tant au Canada qu’en Amérique du Nord, mais il n’a pas su convaincre ses homologues du bienfondé du projet avec les conséquences que nous connaissons aujourd’hui : empiétement du fédéral, anxiété de la population, aggravation de la crise climatique et polarisation sur le sujet. Pire encore pour le Québec, cet échec aura également coûté cher économiquement. Un marché commun du carbone en Amérique du Nord et même au Canada aurait permis aux entreprises québécoises de profiter d’un autre avantage grâce à notre électricité produite sans grande émission de GES. Cet avantage se serait traduit par de meilleures opportunités économiques pour nos entreprises, mais aussi par une plus grande prospérité pour le Québec et ses citoyens. Il aurait permis d’assurer la pérennité de certaines de nos industries qui ont depuis plusieurs années des problèmes de productivités qui auraient pu être réglés par un accès plus grand aux marchés nord-américains et par des investissements cherchant un rendement vert en raison de la bourse carbone. <br><br>' +
              '<h4>L’échec de l’AECG et de L’ACEUM.</h4>' +
              'Les récentes négociations commerciales avec l’Europe, les pays du pacifique et plus récemment les États-Unis auront été un échec à bien des égards pour le Québec. L’accord avec l’Europe visait en premier lieu l’ouverture du marché de la viande bovine pour les provinces de l’ouest, mais s’est fait aux dépens d’une fragilisation du marché laitier et fromager du Québec ainsi qu’avec une brèche dans la gestion de l’offre. Un dur coup pour nos producteurs qui voyaient déjà l’accord d’un œil sceptique. Jean Charest avait su faire la promotion de la nécessité d’un accord auprès du Canada, mais il aura échoué à faire pencher l’accord en faveur du Québec comme Bourassa l’avait fait avant lui. D’autant plus que plusieurs ne voyaient pas vraiment l’intérêt pour le Québec de signer cet accord en même temps qu’un autre accord très important comme le CPTPP, car il deviendrait alors extrêmement complexe d’évaluer les effets de ces accords de façon isolés. D’après ce que je peux voir, le CPTPP était un bon coup pour le Québec. Facilité les échanges avec nos partenaires asiatiques déjà friands de notre porc et certains autres produits agricoles est un point positif, mais les clauses et normes sur les échanges de services favorisent aussi le Québec qui est doté d’une économie de plus en plus dépendante du secteur tertiaire. De plus, le Canada et donc par extension le Québec a pu obtenir un mécanisme de règlement des différends dans l’accord. Évidemment, comme tout accord il y aura des points plus négatifs, mais il est important de noter l’importance pour le Canada, mais aussi le Québec de diversifier ses échanges et de ne plus dépendre autant des États-Unis et d’être à la merci d’un président plus capricieux. Je ne donnerai toutefois pas trop de crédit au Québec, car soyons honnête, un accord avec les pays du pacifique n’était clairement pas dans les tiroirs en raison d’une impulsion du gouvernement Couillard ou Charest. Vient ensuite le fameux ACEUM. Une négociation imprévue, extrêmement complexe en raison du contexte et d’un président au tempérament mercurien, mais aussi par un climat défavorable au libre-échange aux États-Unis. Le Canada a su s’en sortir sans perdre trop de plumes ce qui est déjà très bon considérant les circonstances, mais il semble évident pour le moment que le Québec et sa délégation auront été les grands perdants de cet accord. La gestion de l’offre à été affaiblie encore une fois par une ouverture aux importations américaines à des produits subventionnés à coup de milliards de dollars et ne devant pas se contraindre à nos normes de qualité supérieures. Le secteur de l’aluminium avait initialement subi une injustice par rapport à l’acier qui disposait de protection supplémentaire et pour vraiment clouer le cercueil à l’industrie laitière, une taxe sur l’exportation de protéine laitière qui causera des pertes, mais aussi beaucoup de gaspillages sur nos fermes qui parvenaient à se débarrasser de surplus au prix mondial et limiter leur perte. Malheureusement pour eux cette avenue n’est plus disponible et on est en droit de se demander comment l’industrie va faire face à ce problème franchement gênant. Il est clair que le Canada se devait de signer l’accord avec les États-Unis. Refuser une entente aurait été un désastre économique et diplomatique, mais il est aussi clair que les industries du Québec comme le bois d’œuvre qui n’est toujours pas inclus dans l’accord ont servi d’agneaux sacrificiels et que la délégation du Québec n\'a pas su faire son travail de pression auprès d’Ottawa. Un échec inexcusable considérant le poids économique et politique du Québec dans le Canada, mais aussi dans le caucus du gouvernement Trudeau. Philippe Couillard aura bien essayé de jouer aux gros bras avec un « just watch me » franchement gênant, mais c’était trop peu trop tard. Le Québec aura payé le prix fort de sa négligence sur le plan international et les plus récents efforts de la CAQ à cet égard me laissent perplexe.<br><br>' +
              '<h4>La CAQ et la diplomatie internationale.</h4>' +
              'Je serai bref dans ma critique de la position du gouvernement Legault. La diplomatie du Québec ne devrait pas être seulement économique, mais considérant le retard accumulé sur ce front il m’apparaît justifiable de mettre en place des mesures pour en faire une priorité. Je crains seulement que l’économie devienne le seul enjeu diplomatique et fasse du Québec une sorte de succursale tentant de vendre ses produits à de riches investisseurs étrangers. L’avenir nous dira ce qu’il en est. Je reste persuadé qu’il faut parfois accepter un changement modeste pour atteindre un objectif plus grand et c’est dans cette optique que je me place dans le camp des partisans de ces réformes diplomatiques caquistes. ',
            thumbnail: {
              url: '/assets/images/bg-1.jpg',
              alt: 'Description image.'
            },
            category: 2,
            authors: [
              {
                id: 1,
                firstName: 'Samuel',
                lastName: 'Lamarche',
                desc: 'Rédacteur en chef',
                photo: {
                  url: '/assets/images/photoSamuel.jpg',
                  alt: 'Photo Samuel Lamarche.'
                }
              }
            ]
          },
          {
            id: 6,
            title: 'Il y a les leaders et les autres',
            postDatetime: '2020-03-15',
            updateDatetime: '2020-03-15',
            desc: 'La pandémie actuelle qui frappe de plein fouet le monde, mais aussi le Canada nous rappelle sauvagement notre fragilité et notre impuissance face au monde qui nous entoure et que nous nous plaisons à croire domestiqué par les forces créatrices de la civilisation humaine. Toutefois il serait contreproductif de penser que devant cette visible impuissance il faut baisser les bras et simplement regarder le chaos et la mort approcher. ',
            content: '<p><b>La pandémie actuelle qui frappe de plein fouet le monde, mais aussi le Canada nous rappelle sauvagement notre fragilité et notre impuissance face au monde qui nous entoure et que nous nous plaisons à croire domestiqué par les forces créatrices de la civilisation humaine. Toutefois il serait contreproductif de penser que devant cette visible impuissance il faut baisser les bras et simplement regarder le chaos et la mort approcher.</b></p>' +
              '<p>Des gestes concrets peuvent être posés et plusieurs gouvernements partout sur le globe gèrent la crise de façon exemplaire.  Taiwan que l’on pensait condamnée à l’avance surprend avec un nombre restreint de cas et un seul mort au moment d’écrire ces lignes. C’est très peu considérant sa proximité avec la Chine, foyer de l’épidémie et les nombreux touristes provenant ou allant régulièrement en Chine continentale. Une autre nation faisant un bon travail entourant la pandémie serait le Québec. Mesures claires, strictes et efficaces très rapidement dans la courbe de propagation, mais aussi des points de presse réguliers qui rassurent un peu comme à l’époque de la crise du verglas. François Legault s’est clairement donné comme mission d’enrayer la propagation du virus le plus rapidement possible et de protéger ses concitoyens avec tous les moyens à sa disposition. Il agit en leader et certains auront fait la comparaison, en bon père de famille. Hélas, monsieur Legault aussi compétent soit-il, ne détient pas tous les pouvoirs au Québec en raison du système fédéral et de la présence du Québec dans le Canada. Il se retrouve à devoir quémander la fermeture des frontières ou un resserrement de ces dernières à son homologue Justin Trudeau qui pour le moment s’y refuse et semble totalement dépassé par la crise. Trudeau est pourtant de ceux touchés de plein fouet par la maladie. Sa femme, madame Grégoire, est atteinte du virus et selon toute vraisemblance s’en sort bien heureusement. On pourrait donc s’attendre à une réaction rapide, à un travail de communication et de concertation avec les provinces pour s’assurer d’une lutte efficace contre un virus qui se propage extrêmement rapidement, mais on assiste plutôt à un festival des contradictions et des conflits. Les premiers ministres agissent rapidement et avec vigueur et demandent des mesures importantes venant du fédéral pour que les efforts provinciaux ne soient pas sapés par l’arrivée de visiteurs ou de citoyens en retour de voyage imprudent ou insouciant. De l’autre côté, Trudeau fige. Il semble incapable de se décider ou d’asseoir son autorité sur le pays. Il ressemble à un homme dépassé par les événements et qui n’est pas dans la bonne chaise. C’est le même Trudeau que nous avons pu voir pendant les blocus autochtones et c’est le même Trudeau que nous verrons à chaque crise majeure, car c’est ce que Trudeau est comme personne. Dans la vie, il y a les leaders et les autres. Trudeau fait partie des autres et ses actions parlent mille fois plus fort que ses beaux discours. Sa décision de laisser les frontières ouvertes à tous comme elles le sont actuellement est presque inexplicable lorsque l’on voit des pays membres de la zone Schengen fermer leurs frontières. Elle semble relever d’un aveuglement idéologique que l’on ne saurait tolérer en temps de crise ou alors d’un désir malsain de ne pas vouloir déplaire et prendre les décisions difficiles. Par son incapacité à prendre les décisions nécessaires, aussi difficiles soient-elles, Trudeau se rend coupable de haute trahison. Par ses décisions irresponsables allant à l’encontre du leadership provincial, le premier ministre du Canada se rend coupable de négligence et pourrait coûter la vie à plusieurs milliers de Canadiens. Lorsque cette crise sera terminée, car elle se terminera un jour, nous pourrons remercier François Legault et son équipe, notre personnel de la santé et tous les citoyens qui auront fait leur juste part. Nous devrons aussi nous souvenir de la faiblesse du gouvernement fédéral et de son incompétence et remettre en question l’idée de la république de banane québécoise incapable de gérer la moindre chose. Demandez-vous intérieurement et à vos proches et amis en ce moment : préféreriez-vous que ce soit le Québec qui gère ses frontières en ce moment et ses aéroports? Faites-vous encore plus confiance au Canada pour gérer les crises que le Québec? Personnellement cette crise a fait plusieurs choses que je pensais impossibles. Elle m’a encore plus convaincu que le Québec serait mieux à même de se gouverner sans le Canada et elle m’a encore plus convaincu que Justin Trudeau n’est pas un leader et que l’histoire se souviendra de lui comme un dirigeant faible qui n’aura jamais vraiment su être à la hauteur et ce peut importe le sujet. </p>',
            thumbnail: {
              url: '/assets/images/article6.jpg',
              alt: 'Description image.',
              credits: 'Crédits: La Presse canadienne'
            },
            category: 2,
            authors: [
              {
                id: 1,
                firstName: 'Samuel',
                lastName: 'Lamarche',
                desc: 'Rédacteur en chef',
                photo: {
                  url: '/assets/images/photoSamuel.jpg',
                  alt: 'Photo Samuel Lamarche.'
                }
              }
            ]
          },
          {
            id: 7,
            title: 'Vision d’un autre monde',
            postDatetime: '2020-03-25',
            updateDatetime: '2020-03-25',
            desc: 'L’épidémie de la COVID-19 aura permis à plusieurs d’entre nous de voir des situations pouvant paraître d’un autre monde. Quarantaine, rationnement, étagères vides et mesures de sécurité pour éviter les contaminations. Du jamais vu pour pratiquement tout le monde.',
            content: '<p><b>L’épidémie de la COVID-19 aura permis à plusieurs d’entre nous de voir des situations pouvant paraître d’un autre monde. Quarantaine, rationnement, étagères vides et mesures de sécurité pour éviter les contaminations. Du jamais vu pour pratiquement tout le monde.</b></p>' +
              '<p>Lorsque je suis entré à l’épicerie près de chez moi quelques heures après l’annonce de la fermeture de tous les commerces non essentiels par François Legault. J’ai pu observer un spectacle digne d’un film de série B un peu exagéré. Une série de palettes de bois et du ruban jaune délimitaient une sorte de grand labyrinthe pour faire attendre les nombreux clients sans qu’ils n’entrent en contact ou ne s’approchent trop près. Un panneau indiquait ce qui était encore sur les étagères, mais rationné et ce qui était en rupture de stock. Pour moi, jeune homme de 22 ayant grandi au Québec et pour la plupart de mes compatriotes, c’est une vision d’un autre monde. Certes il n’est pas rare qu’un produit ne soit pas présent sur les étagères, car il est en rabais ou particulièrement en demande pendant la période. On n’aura qu’à penser aux fraises du Québec pendant l’été qui viennent parfois à manquer si l’on arrive trop tard, mais jamais des rangées complètes de denrées alimentaires ou un rationnement obligatoire. </p>' +
              '<p>Cette sécurité alimentaire omniprésente pour la grande majorité de notre province et qui nous semble être la chose la plus normale au monde est pourtant une anomalie historique. Très peu de pays et de citoyens dans le monde profitent d’une situation d’abondance comme nous profitions et avons profité pendant le dernier demi-siècle. Cette situation d’abondance nous apparaît pourtant comme étant normale et même comme étant dû. Nous en sommes venus à croire, il semblerait, que cette abondance était infinie et le Canada, comme la plupart des pays occidentaux, aura gaspillé plus de nourriture en 50 ans que certains empires ont pu produire toute leur vie durant. Heureusement, cette situation de pénurie est temporaire. Le système de distribution et de production alimentaire est solide et les étagères se remplissent déjà à nouveau à une vitesse folle. Bientôt les panneaux de rationnement et les files d’attente ne seront plus qu’un souvenir ou une scène étrange d’un documentaire sur l’épidémie et la crise économique subséquente. Un peu à l’image des scènes que l’on peut retrouver dans certains films des années 70 avec des files de centaines de voitures attendant leur maigre 5 gallons d’essence. </p>' +
              '<p>Ces images m’auront définitivement marquée, mais elles doivent aussi nous apprendre une leçon importante. L’histoire n’est pas une ligne de progression linéaire. Après Rome et ses grands travaux et progrès sociaux vint le moyen-âge et la peste noire. Nos ancêtres ont dû travailler d’arrache-pied pour coloniser le Québec pour en faire la nation opulente d’aujourd’hui. Des hommes et des femmes vivants 10 ou même 15 dans la même maison dans des conditions impossibles à imaginer pour nous. Ce confort que nous prenons pour acquis, ces libertés que nous chérissons ont un prix et ce prix est de rester vigilant et de ne pas abaisser notre garde. Nous ne pouvons pas nous permettre de nous croire invincibles et au-dessus des foudres de la vie. Nous devons reconnaître humblement notre vulnérabilité et faire tout notre possible pour léguer des outils pour réduire cette dernière à nos descendants. </p>' +
              '<h4>Le parallèle climatique.</h4>' +
              '<p>Si vous trouvez que nous sommes bien impuissants devant ce virus, je pense que c’est un excellent réveil pour plusieurs, moi compris, que si nous n’agissons pas rapidement nous aurons beau implorer tous les saints de la terre, faire tourner toutes les usines du monde, notre avidité nous coûtera bien plus qu’une crise économique et quelques milliers de morts. Nous avons toujours eu tendance à nous dire que l’on trouverait bien une solution une fois dos au mur. Je pense que cette pandémie nous montre clairement que nous pourrions très bien voir ce mur se dérober derrière nous avant même que nous puissions nous appuyer sur lui. L’opportunité amenée par la crise économique qui viendra à la fin de cette épidémie doit être saisie. Tout cet argent, tous ces investissements doivent être faits de manière à offrir une croissance durable et qui nous permettra de maintenir cette sécurité alimentaire et sanitaire qui caractérise notre société moderne. Il est temps de lire les signaux et d’en faire usage pour amener à bien cette vision d’un autre monde. Un monde nouveau et surtout un monde durable. </p>',
            thumbnail: {
              url: '/assets/images/article7.jpg',
              alt: 'Description image.',
              credits: 'RADIO-CANADA / THOMAS GERBET'
            },
            category: 2,
            authors: [
              {
                id: 1,
                firstName: 'Samuel',
                lastName: 'Lamarche',
                desc: 'Rédacteur en chef',
                photo: {
                  url: '/assets/images/photoSamuel.jpg',
                  alt: 'Photo Samuel Lamarche.'
                }
              }
            ]
          },
          {
            id: 8,
            title: 'Un (pas si rare) moment d’unité',
            postDatetime: '2020-03-31',
            updateDatetime: '2020-03-31',
            desc: 'À force de lire les experts et les chroniqueurs être en extase devant les sondages d’approbation de François Legault, on aurait tendance à croire que nous vivons un rare moment d’unité dans une province éternellement divisée en deux depuis 50 ans. Pas si vite, devoir de mémoire oblige, retournons en arrière pour voir si c’est vraiment le cas.',
            content: '<p><b>À force de lire les experts et les chroniqueurs être en extase devant les sondages d’approbation de François Legault, on aurait tendance à croire que nous vivons un rare moment d’unité dans une province éternellement divisée en deux depuis 50 ans. Pas si vite, devoir de mémoire oblige, retournons en arrière pour voir si c’est vraiment le cas.</b></p>' +
              '<p>Retournons en arrière vers la plus grande catastrophe climatique que le Québec a pu subir de mémoire d’homme. Janvier 1998, c’est la crise du verglas, jusqu’à 100mm de verglas s’abat sur la province et écrase lentement, mais sûrement le réseau électrique du Québec. Les pylônes s’effondrent et les fils deviennent tellement lourds qu’ils s’abaissent dangereusement à quelques mètres du sol. Au sommet de la crise, 1,4 million d’abonnés seront privés d’électricité et une seule ligne achemine le courant à Montréal. La gravité de la situation est non négligeable, mais il est important de se souvenir que nous sommes passés à deux doigts de la catastrophe à Montréal, quand cette dernière ligne fût sauvée de justesse, par deux monteurs de lignes sautant d’un hélicoptère au-dessus du fleuve. S’ils avaient échoué, l’île aurait pu être évacuée. La gestion d’Hydro-Québec est heureusement très adéquate et combiné avec une intervention musclée de l’armée en rôle de soutien et une communication efficace de Lucien Bouchard et d’André Caillé avec leur point de presse quotidien qui ne sont pas sans rappeler ceux de François Legault. Trente personnes décèdent en raison de la crise soit d’hypothermie ou d’un empoisonnement au monoxyde de carbone ou même d’une chute en raison du verglas. Un bilan beaucoup plus léger que la crise actuelle, mais une crise d’un autre genre il faut l’admettre. </p>' +
              '<h4>La réponse québécoise?</h4>' +
              '<p>Quelle a donc été la réponse québécoise à cette catastrophe sans précédent? La solidarité. Devant l’adversité les Québécois auront décidé de faire preuve de solidarité, d’écouter leurs dirigeants et de mettre les bouchées doubles pour s’en sortir. Un sentiment de déjà vu m’envahit… Serait-ce donc dans l’ADN des Québécois de grandir dans l’adversité et de savoir surmonter les défis? De savoir se rallier derrière leurs dirigeants et leur gouvernement? Au plus fort de la crise, les hôpitaux tournent sur les génératrices, 140 000 personnes dorment dans 454 refuges spécifiquement ouverts pour la crise. Un cauchemar logistique entre la sécurité publique, les municipalités, Hydro-Québec, l’armée et le gouvernement du Québec. Lucien Bouchard, premier ministre à l’époque, comprend rapidement qu’il doit faire preuve de leadership et assumer les commandes. Sa décision et ses méthodes semblent d’ailleurs servir de modèle à François Legault 22 ans plus tard. Réduction de la bureaucratie, centralisation des pouvoirs et surtout une collaboration et un soutien de l’opposition qui comme aujourd’hui, comprend que le Québec a besoin de faire front commun face à la crise. Certains useront même de débrouillardise pour sortir leurs concitoyens de la noirceur et du froid. La mairesse de Boucherville, Francine Gadbois, décide de faire fonctionner une locomotive du CN près de l’hôtel de ville et de s’en servir comme génératrice. Pas bête!</p>' +
              '<h4>Les leçons du verglas 22 ans plus tard.</h4>' +
              '<p>S’il y a bien une leçon que François Legault a retenue de 1998 c’est la gestion de maître des communications de Lucien Bouchard et André Caillé avec son fameux col roulé. Chaque jour, ils délivraient l’information, répondaient aux questions et indiquaient la marche à suivre d’un ton rigide, mais calme. On sentait qu’ils comprenaient l’urgence, mais qu’ils n’étaient pas dépassés par l’ampleur de la crise. Un duo de choc s’est formé avec ce baptême de feu. Il est amusant de regarder les parallèles entre 1998 et 2020 lorsque l’on y prête attention. Conférence de presse quotidienne, un premier ministre qui agit en bon père de famille, qui rassure sa population, flanqué de ses adjoints. Le symbole de la crise en 1998 le fameux col roulé remplacé aujourd’hui par le fameux slogan du docteur Arruda « Ça va bien aller » la sincérité du gouvernement face à l’ampleur de la crise qui ne cache pas à la population que le pire est à venir. Il sera intéressant, lorsque la pandémie sera chose du passé, d’analyser à quel point François Legault aura puisé dans le livre de gestion de crise de monsieur Bouchard et à quel point la classe politique du Québec et le Québec tout entier auront réagi de manière similaire. L’influence est évidente et il y a fort à parier que la gestion de crise de la pandémie servira de cahier de gestion 2.0 avec l’arrivée des médias sociaux. Il sera intéressant de voir si les Québécois auront la même réaction à l’après-crise quand viendra le temps des élections en reportant François Legault au pouvoir de manière moins forte qu’anticipé. Comme si les sondages en temps de crises ne se limitaient qu’à ça et que les Québécois passaient à autre chose. Ingrat? Ou simplement au courant qu’une bonne gestion de crise n’est pas nécessairement garante d’une bonne gestion des affaires au quotidien.</p>' +
              '<h4>Quelque chose comme un grand peuple.</h4>' +
              '<p>Il n’est pas malhonnête selon moi de dire que le peuple québécois a prouvé à maintes reprises sa résilience face aux difficultés de la vie. L’adaptation de nos ancêtres aux rudes hivers, la capacité de nos citoyens à protéger leur culture et leur langue et un réflexe de solidarité et de coopération quand la situation le commande. Il serait peut-être temps de cesser de donner de la crédibilité aux gens qui dénigrent la capacité du Québec à se gouverner et qui traitent le Québec de république de bananes. Il serait temps de réaliser que le Québec, dans son état actuel, avec ses structures et ses citoyens, s’est montré amplement compétent et capable de réagir à tout ce que la nature et le monde peut nous envoyer et même mieux que le Canada comme nous avons pu le voir avec la COVID-19. Il serait temps de nous faire confiance à l’avenir et de cesser de douter de nos capacités dès que l’on parle de sortir de la politique fade de petits gestionnaires et de faire un projet de société ambitieux. Il serait donc, en quelque sorte, temps de reconnaître que le Québec est habité par quelque chose comme un grand peuple et que ces élans de solidarités et ce ralliement derrière notre gouvernement en temps de crise ne devraient pas être vus comme une exception, mais plutôt comme une preuve supplémentaire de l’intelligence et la valeur de nos citoyens. Un signe rassurant considérant les défis qui nous attendent et qui me donne confiance que nous passerons à travers de tous les obstacles si l’on s’en donne les moyens. </p>',
            thumbnail: {
              url: '/assets/images/article8.jpg',
              alt: 'Description image.',
              credits: 'RADIO-CANADA / SYLVAIN ROY ROUSSEL'
            },
            category: 2,
            authors: [
              {
                id: 1,
                firstName: 'Samuel',
                lastName: 'Lamarche',
                desc: 'Rédacteur en chef',
                photo: {
                  url: '/assets/images/photoSamuel.jpg',
                  alt: 'Photo Samuel Lamarche.'
                }
              }
            ]
          },
        ]
      },
      {
        id: 3,
        name: 'Jordan Larochelle',
        articles: [
          {
            id: 4,
            title: 'Les autochtones et nous',
            postDatetime: '2020-03-08',
            updateDatetime: '2020-03-08',
            desc: 'Depuis presque un mois, les blocus ferroviaires se multiplient partout au pays. ',
            content: 'Je veux tout d’abord dire que je ne suis pas un membre de la communauté autochtone, mais qu’ils vont toujours trouver en moi un allié.<br><br>' +
              'Depuis presque un mois, les blocus ferroviaires se multiplient partout au pays. Ces blocus se veulent une réponse aux agissements de la GRC sur les terres de la communauté autochtone de Wet\'suwet\'en, en Colombie-Britannique. Je ne m’éterniserai pas sur les raisons pour lesquelles il y a des blocus, les médias en ont suffisamment parlé.<br><br>' +
              'Je veux revenir sur les commentaires que nous pouvons voir sur les réseaux sociaux, mais aussi dans les conversations que nous pouvons avoir au bureau ou entre amis. J’ai remarqué que ce sujet vient toucher les gens, peu importe que l’on soit pour ou contre les blocus. Les gens donnent leurs opinions sur la chose et j’ai pu voir qu’il y a une grande polarisation autour de cet enjeu, la moitié des commentaires est en appuis, mais l’autre moitié est en total désaccord et le fait savoir. Ces commentaires sont d’une cruauté et d’une méchanceté qui n’est pas digne d’une société évoluée comme la nôtre.<br><br>' +
              'Il y a une montée de la haine vis-à-vis cette partie non négligeable de la population du Canada. Cette haine est généralement manifestée par des personnes qui ne savent pas de quoi ils parlent, qui n’ont jamais eu de contacts avec les autochtones et qui basent leurs opinions sur de fausses idées circulant un peu partout. La plus répandue est probablement que les autochtones ne paient pas de taxes. Cette idée est bien évidemment fausse. Une personne autochtone ne paie pas de taxes sur des produits qu’elle achète sur une réserve ou qui sont livrés sur une réserve. En dehors des réserves, les autochtones paient les mêmes taxes que l’ensemble des autres personnes au Canada.<br><br>' +
              'Une autre idée qui colle aux autochtones est celle qu’ils ne paient pas d’impôts. Encore une fois, c’est faux. Les Inuits et les Métis doivent payer des impôts. L’exemption d’impôts ne s’applique qu’aux Amérindiens et ceux-ci doivent suivre des règles très strictes s’ils veulent avoir droit à cette exemption.<br><br>' +
              'Une dernière pour la route, celle qui dit que les autochtones ne paient pas l’électricité. Le seul moment ou une personne autochtone ne va pas payer son électricité, c’est lorsqu’il y a entente entre la compagnie d’électricité et la nation autochtone. Autrement, ils doivent payer comme les autres.<br><br>' +
              'Ces fausses informations viennent creuser le fossé qui est déjà trop profond entre les Nations du Canada. En 2015, le futur premier ministre Justin Trudeau a fait campagne en misant sur la réconciliation entre le Canada et les premières nations. Il a clairement brisé sa promesse. Il a préféré acheter un pipeline de 4 milliards de dollars dont le tracé passe directement sur des territoires autochtones sans que ceux-ci soient consultés. Le gouvernement fédéral a lâchement abandonné les autochtones.<br><br>' +
              'Le gouvernement du Québec ne fait pas meilleure figure au niveau des relations avec les premières nations. Le premier ministre Legault devrait faire preuve de leadership et parler de Nation à Nation avec les peuples autochtones, comme le ferait un vrai chef d’État. La porte est grande ouverte pour créer un modèle de réussite qui pourrait inspirer les autres provinces. Malheureusement, monsieur Legault préfère mettre de l’huile sur le feu en demandant aux policiers de foncer dans le tas. Pour un gouvernement qui veut travailler pour tous les Québécois, on repassera.<br><br>' +
              'Dans cette situation d’abandon institutionnelle, que reste-t-il aux autochtones pour faire entendre leurs voix?  La manifestation. Il s’agit du dernier levier qu’ils possèdent. Ils sont d’ailleurs très solidaires quand vient le temps de soutenir une autre communauté. C’est ce qui fait le beau de la chose. D’un bout à l’autre du pays, quand une Nation a besoin d’aide, les autres vont l’aider. La solidarité, l’intérêt du plus grand nombre, passe avant celui de l’individu. C’est de savoir que collectivement, les gens sont plus forts.<br><br>' +
              'Les autochtones, ainsi que les non-autochtones qui manifestent aujourd’hui le font pour des causes justes. Celles et ceux qui sont à bout devraient plutôt se joindre aux barricades. Ils devraient appuyer les revendications des peuples qui ont, au fil de l’histoire du Québec et du Canada, été au côté des blancs. Ce serait déjà un signe de réconciliation selon moi.<br><br>',
            thumbnail: {
              url: '/assets/images/bg-1.jpg',
              alt: 'Description image.'
            },
            category: 3,
            authors: [
              {
                id: 3,
                firstName: 'Jordan',
                lastName: 'Larochelle',
                desc: 'Collaborateur',
                photo: {
                  url: '/assets/images/photoJordan.jpg',
                  alt: 'Photo Jordan Larochelle.'
                }
              }
            ]
          },
        ]
      },
      {
        id: 4,
        name: 'Jonathan Carreiro-Benoît',
        articles: [
          {
            id: 9,
            title: 'Le fédéralisme et le droit provincial en matière de traités internationaux',
            postDatetime: '2020-03-31',
            updateDatetime: '2020-03-31',
            desc: 'En 1965, le vice-premier ministre et ministre de l’Éducation, Paul Gérin-Lajoie, met sur pied une doctrine révisant le rôle de la province du Québec sur la scène internationale.',
            content: '<p>En 1965, le vice-premier ministre et ministre de l’Éducation, Paul Gérin-Lajoie, met sur pied une doctrine révisant le rôle de la province du Québec sur la scène internationale. Cette dernière stipule qu’il est impératif, d’un point de vue identitaire, que le gouvernement québécois adopte une politique favorisant ses propres conceptions des traités internationaux concernant ses champs de compétences. Le tout s’inscrit alors dans un cadre licite d’action devant le fédéral.<sup><a href="#cite_note-1">1</a></sup>  Ainsi, la doctrine Gérin-Lajoie soulève la capacité juridique du Québec à se faire valoir constitutionnellement sur le plan global. De facto, les lois constitutionnelles ne sont aucunement représentatives des débats internationaux distinctifs aux exigences du Québec.<sup><a href="#cite_note-2">2</a></sup> La doctrine donne un élan pratique aux relations mondiales de la province tout en énonçant une conduite à l’assise légale des droits québécois. Elle reprend en compte l’entente sur l’éducation entre le Québec et la France, signée le 27 février 1965, et celle sur la coopération culturelle entre les deux gouvernements, signée le 24 novembre de la même année. </p>' +
              '<p>Le premier accord à une valeur significative, car il projette le Québec et ses ambitions sur la scène internationale alors que le gouvernement fédéral conçoit au même moment la valeur conséquente du fait français au Canada. La deuxième entente à pour fin d’encadrer l’intervention du Québec auprès de la France et ainsi consolider une francophonie en effervescence. L’appareillage d’un <i>jus tractatum</i> en matière de langue, d’éducation et de culture soumet l’existence du Québec, donc de son pouvoir décisionnel. Le droit international s’inscrit pour le Québec dans ses différences les plus significatives avec le reste du Canada.<sup><a href="#cite_note-3">3</a></sup> Faisant référence à l’article sept de la <i>Loi sur l’exercice des droits fondamentaux et des prérogatives du peuple québécois et de l’État du Québec</i> stipulant que « [l]’État du Québec est libre de consentir à être lié par tout traité, convention ou entente internationale qui touche à sa compétence constitutionnelle »<sup><a href="#cite_note-4">4</a></sup>, Gérin-Lajoie sous-entend deux types de traités propres au Québec. D’une part, il y a ceux qui ne requièrent guère l’approbation de l’Assemblée nationale et qui, pour être en règle, doivent être signés par le ministre et entérinés par le gouvernement. D’autre part, c’est les ententes qui doivent faire l’objet d’un acquiescement de l’Assemblée nationale qui doivent être validées par le ministre et ratifiées par l’État. Paquin précise que, en 2005, 550 accords internationaux ont été confirmés par le gouvernement à titre de droit international dont approximativement 300 sont toujours en vigueurs.<sup><a href="#cite_note-5">5</a></sup></p>' +
              '<p>Cette informalité pousse Ottawa à négocier les préceptes révisant et approuvant les cadres internationaux pouvant profiter au Québec sans pour autant le rendre souverain devant à la capitale fédérale. Ainsi, l’article 17 de la <i>Loi sur le ministère des Affaires intergouvernementales</i> de 1974 et l’article 17 de la <i>Loi sur le ministère des Relations internationales</i> de 1984 stipulent que « le ministère recommande au gouvernement la ratification des traités et accords internationaux dans les domaines ressortissants à la compétence constitutionnelle du Québec »<sup><a href="#cite_note-6">6</a></sup>. Gérin-Lajoie prévoit à cet effet une collaboration accrue du Québec dans les forums mondiaux. Néanmoins, cette participation doit être apolitique. L’action des délégués se veut gouvernementale sans pour autant prendre position en son nom comme indiqué dans l’article 34 de la <i>Loi sur le ministère des Relations internationales</i>. <sup><a href="#cite_note-7">7</a></sup> Le gouvernement canadien n’a d’autre choix que de développer des mécanismes afin de consulter les provinces sur leur champ de compétences. Néanmoins, les échanges sont souvent arbitraires et présentent un manque de participation provinciale considérable. Le truchement du gouvernement fédéral dans les affaires universelles des organisations extérieures ne peut alors passer par la simple gestion d’entités subétatiques.<sup><a href="#cite_note-8">8</a></sup> La politique étrangère québécoise peut être caractérisée en quelques énoncés. Il s’agit d’une action orientée. Outre la modernisation, il faut être en mesure de s’approprier le système international, donc de composer avec ce dernier. Lors d’un discours devant les Harvard Fellows à Montréal en 2000, Louise Beaudoin qualifie le Québec comme une société en quête de reconnaissance identitaire et politique. </p>' +
              '<p>De plus, la mondialisation oblige l’État québécois à s’adapter aux mutations mondiales des acteurs et des interrelations étatiques. Cela dit, les gouvernements péquistes et libéraux doivent balancer selon leur intérêt commun pour la Nation. Bernard Landry caractérisait l’action « d’interdépendance accrue entre les économies »<sup><a href="#cite_note-9">9</a></sup>, alors que son homologue libéral de quelques années plus tard, John Ciaccia, cherchait à commander une stratégie réactionnaire afin de définir les priorités de la gouvernance.<sup><a href="#cite_note-10">10</a></sup>' +
              '<ol>' +
              '<li id="cite_note-1">Robert BERNIER, Les défis québécois, conjonctures et transitions, Québec, Presses de l’Université du Québec, 2014, p. 447-450. </li>' +
              '<li id="cite_note-2">Guy LACHAPPELLE & Bruno MALTAIS, « Diversité culturelle et stratégies subétatiques : le cas du Québec », Revue internationale de politique comparée, volume 12, numéro 2, 2005, p. 151-152. </li>' +
              '<li id="cite_note-3">Aurélien YANNIC, Le Québec en francophonie : de la Révolution tranquille au référendum de 1995, Saint-Denis, Éditions Publibook, 2016, p. 61-62. </li>' +
              '<li id="cite_note-4">LÉGISQUÉBEC, « Loi sur l’exercice des droits fondamentaux et des prérogatives du peuple québécois et de l’État du Québec », Publications Québec, 2019, Consulté le 10 mars 2020,  http://legisquebec.gouv.qc.ca/fr/ShowDoc/cs/E-20.2</li>' +
              '<li id="cite_note-5">Stéphane PAQUIN, Les relations internationales du Québec depuis la doctrine Gérin-Lajoie (1965-2005) : le prolongement externe des compétences internes, Québec, Presses Université Laval, 2006, p. 51-57. </li>' +
              '<li id="cite_note-6">Ibid., p. 60. </li>' +
              '<li id="cite_note-7">Ibid., p. 58-65. </li>' +
              '<li id="cite_note-8">Kim Richard NOSSAL & al, Politique internationale et défense au Canada et au Québec, Montréal, Les Presses de l’Université de Montréal, 2007, p. 501-502. </li>' +
              '<li id="cite_note-9">Nelson MICHAUD & Isabelle RAMET, « Québec Et Politique Étrangère: Contradiction Ou Réalité? », International Journal, Volume 59, numéro 2, 2004, p. 315. </li>' +
              '<li id="cite_note-10">Ibid., p. 312-316. </li>' +
              '</ol>',
            thumbnail: {
              url: '/assets/images/article9.jpg',
              alt: 'Description image.',
              credits: 'ARCHIVES LA PRESSE/RÉAL SAINT-JEAN'
            },
            category: 4,
            authors: [
              {
                id: 4,
                firstName: 'Jonathan',
                lastName: 'Carreiro-Benoît',
                desc: 'Co-animateur',
                photo: {
                  url: '/assets/images/photoJonathan.jpg',
                  alt: 'Photo Jonathan Carreiro-Benoit.'
                }
              }
            ]
          },
        ]
      },
      /*{
        id: 4,
        name: 'Cahiers de la rédaction',
        subCategories: [
          {
            id: 1,
            name: 'Ornithorynque volant',
            articles: [
              {
                id: 11,
                title: 'Test',
                postDatetime: '2020-03-08',
                updateDatetime: '2020-03-08',
                desc: 'Depuis presque un mois, les blocus ferroviaires se multiplient partout au pays.',
                content: 'Le tout s’inscrit alors dans un cadre licite d’action devant le fédéral.<a href= ""> </href> Ainsi, la doctrine',
                thumbnail: {
                  url: '/assets/images/bg-1.jpg',
                  alt: 'Description image.'
                },
                category: 4,
                subCategory: 1,
                authors: [
                  {
                    id: 3,
                    firstName: 'Jordan',
                    lastName: 'Larochelle',
                    desc: 'Collaborateur',
                    photo: {
                      url: '/assets/images/photoJordan.jpg',
                      alt: 'Photo Jordan Larochelle.'
                    }
                  }
                ]
              },
              {
                id: 10,
                title: 'Les autochtones et nous',
                postDatetime: '2020-03-08',
                updateDatetime: '2020-03-08',
                desc: 'Depuis presque un mois, les blocus ferroviaires se multiplient partout au pays. ',
                content: '',
                thumbnail: {
                  url: '/assets/images/bg-1.jpg',
                  alt: 'Description image.'
                },
                category: 4,
                subCategory: 1,
                authors: [
                  {
                    id: 3,
                    firstName: 'Jordan',
                    lastName: 'Larochelle',
                    desc: 'Collaborateur',
                    photo: {
                      url: '/assets/images/photoJordan.jpg',
                      alt: 'Photo Jordan Larochelle.'
                    }
                  }
                ]
              },
            ]
          },
          {
            id: 2,
            name: 'Horacio écrase la courbe',
            articles: [
              {
                id: 9,
                title: 'Les autochtones et nous',
                postDatetime: '2020-03-08',
                updateDatetime: '2020-03-08',
                desc: 'Depuis presque un mois, les blocus ferroviaires se multiplient partout au pays. ',
                content: '',
                thumbnail: {
                  url: '/assets/images/bg-1.jpg',
                  alt: 'Description image.'
                },
                category: 4,
                subCategory: 2,
                authors: [
                  {
                    id: 3,
                    firstName: 'Jordan',
                    lastName: 'Larochelle',
                    desc: 'Collaborateur',
                    photo: {
                      url: '/assets/images/photoJordan.jpg',
                      alt: 'Photo Jordan Larochelle.'
                    }
                  }
                ]
              },
              {
                id: 10,
                title: 'Les autochtones et nous',
                postDatetime: '2020-03-08',
                updateDatetime: '2020-03-08',
                desc: 'Depuis presque un mois, les blocus ferroviaires se multiplient partout au pays. ',
                content: '',
                thumbnail: {
                  url: '/assets/images/bg-1.jpg',
                  alt: 'Description image.'
                },
                category: 4,
                subCategory: 2,
                authors: [
                  {
                    id: 3,
                    firstName: 'Jordan',
                    lastName: 'Larochelle',
                    desc: 'Collaborateur',
                    photo: {
                      url: '/assets/images/photoJordan.jpg',
                      alt: 'Photo Jordan Larochelle.'
                    }
                  }
                ]
              },
            ]
          }
        ],
        articles: [
          {
            id: 11,
            title: 'Test',
            postDatetime: '2020-03-08',
            updateDatetime: '2020-03-08',
            desc: 'Depuis presque un mois, les blocus ferroviaires se multiplient partout au pays.',
            content: '',
            thumbnail: {
              url: '/assets/images/bg-1.jpg',
              alt: 'Description image.'
            },
            category: 4,
            subCategory: 1,
            authors: [
              {
                id: 3,
                firstName: 'Jordan',
                lastName: 'Larochelle',
                desc: 'Collaborateur',
                photo: {
                  url: '/assets/images/photoJordan.jpg',
                  alt: 'Photo Jordan Larochelle.'
                }
              }
            ]
          },
        ]
      }*/]; //this.store.findAll('article');
  }
});

