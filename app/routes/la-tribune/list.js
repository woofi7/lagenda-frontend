import Route from '@ember/routing/route';

export default Route.extend({

  async model() {
    return [
      {
        id: 1,
        title: 'Mot de la rédaction',
        postDatetime: '2020-03-02',
        updateDatetime: '2020-03-02',
        desc: 'Un petit mot pour vous expliquer qui nous sommes, nos buts et ce à quoi vous pouvez vous attendre de la part de la Tribune de L’Agenda.',
        content: '<b>Un petit mot pour vous expliquer qui nous sommes, nos buts et ce à quoi vous pouvez vous attendre de la part de la Tribune de L’Agenda.ca. </b><br><br>' +
          'Tout d’abord il me fait grand plaisir de vous accueillir en tant que fondateur de L’Agenda et de rédacteur en chef de sa tribune parmi nous. Au nom de toute l’équipe je vous remercie d’avoir pris la peine de venir jeter un coup d’œil à notre site web qui je l’espère, vous aura séduit. Il est important pour moi de souligner le travail de maître de Nicolas Signori en tant que développeur et administrateur web sans qui tout cela aurait été impossible. Évidemment je veux aussi remercier les autres collaborateurs et tout spécialement le Cofondateur de L’Agenda Jonathan Carreiro-Benoît.</b><br><br>' +
          'Trêve de remerciements et passons aux choses sérieuses. Nous avons expliqué nos motivations plus en détails et notre plan d’attaque dans le texte Pourquoi L’Agenda, mais je me permets un petit résumé. L’Agenda se veut un collectif politique permettant l’expression de plusieurs opinions et le débat de celles-ci dans le respect qu’il se doit. Notre équipe de rédaction est composée d’un militant péquiste et bloquiste, mais aussi d’un ancien candidat et militant libéral. Nous voulons ainsi offrir une garantie d’impartialité et éviter la censure et la partisanerie qui gangrène déjà suffisamment l’espace médiatique et publique. Vous trouverez des chroniques de gauche tout comme de droite. Vous lirez sur des sujets plus généralistes, mais aurez aussi la chance de lire des textes sur des sujets plus pointus pour permettre un approfondissement des sujets qui définissent nos sociétés. La Tribune se veut donc un lieu de discussion, mais aussi de réflexion. Elle se veut une extension de notre Balado et s’inscrit dans le même ordre d’idée : lutter contre le cycle vicieux de l’information constante, rapide et superficielle. Nous espérons arriver à opposer une certaine résistance aux médias traditionnels qui imposent des réponses courtes qui choquent et qui peuvent être répétées en boucle aux nouvelles de 18h et élever le débat. La société ne gagne rien d’autre que le cynisme et une impression de vide et d’opportunisme par ces méthodes sournoises. Il est temps de montrer aux gens quels sont les idéaux derrière les politiques qui nous gouvernent, derrière les candidats qui aspirent à changer le Canada et le Québec. Nous espérons de tout cœur que vous nous suivrez dans cette aventure qui s’annonce palpitante.',
        thumbnailUrl: 'assets/images/bg-1.jpg',
        category: 1,
        authors: [
          {
            id: 1,
            firstName: 'Samuel',
            lastName: 'Lamarche',
            desc: 'Rédacteur en chef',
            photo: 'assets/images/photoSamuel.jpg'
          },
          {
            id: 2,
            firstName: 'Antoine',
            lastName: 'Poulin',
            desc: 'Adjoint à la rédaction',
            photo: 'assets/images/photoAntoine.jpg'
          }
        ]
      },
      {
        id: 2,
        title: 'Les budgets Trudeau, vraiment progressistes?',
        postDatetime: '2020-03-02',
        updateDatetime: '2020-03-02',
        desc: 'Depuis 2015 maintenant, Justin Trudeau est premier ministre du Canada et plusieurs décisions de sa part auront comme effet de lui tailler une place dans l’histoire politique canadienne.',
        content: 'Depuis 2015 maintenant, Justin Trudeau est premier ministre du Canada et plusieurs décisions de sa part auront comme effet de lui tailler une place dans l’histoire politique canadienne. La renégociation de l’ALÉNA sous haute pression avec les États-Unis sera probablement son plus bel accomplissement économique et diplomatique, mais sa gestion économique domestique pourrait lui valoir un tout autre regard. En effet, Trudeau et son ministre des finances Bill Morneau auront enchaîné les déficits budgétaires pour l’entièreté de leurs mandats au moment d’écrire ces lignes. Loin d’être une situation idéale, la situation devient plus problématique lorsque l’on réalise l’ampleur des déficits. 29.6 milliards en 2016  furent annoncé lors du dévoilement du budget par Bill Morneau avec comme thème central l’investissement dans les infrastructures canadiennes. Les gens furent surpris par l’ampleur de la projection après la promesse électorale de déficits modestes de 10 milliards de dollars avant un retour à l’équilibre à la fin du mandat. Fort heureusement, cette prévision était un peu trop pessimiste et la croissance économique aura permis que le déficit n’atteigne que 25.1 milliards.  On s’attendait donc à un budget un peu plus modeste en 2017 et ce fut le cas avec un déficit de 19.4 milliards de dollars.  On pouvait donc penser que les déficits étaient sous contrôle. L’économie allait bien, le ratio de la dette par rapport au PIB diminuait d’année en année et l’on se faisait à l’idée qu’il fallait effectivement investir dans nos infrastructures. Toutefois, en 2018 le gouvernement libéral continue à dépenser énormément et inscrit un 3e déficit consécutif. Cette fois, le solde budgétaire est dans le rouge de 14.9 milliards de dollars.  C’est beaucoup, mais il y a une tendance baissière qui permet d’espérer un retour à l’équilibre budgétaire dans un futur relativement proche. Surtout que l’économie va bien et affiche une croissance réelle de 2% environ.  C’était sans compter la tentation électorale, la chair est faible comme on entend parfois, et rien n’est plus vrai quand on parle de budget en année électorale. Un déficit annoncé de 19.8 milliards cette fois, mais qui sera vraisemblablement révisé selon Bill Morneau à 26.6 milliards de dollars… Retour à la case départ donc? <br><br>' +
          'Quels sont les arguments pour de telles dépenses et une tendance aux déficits aussi importante? Les taux d’intérêt sont bas, très bas même. C’est du jamais vu selon plusieurs et c’est un incitatif énorme pour le gouvernement d’en profiter pour augmenter sa croissance à long terme, mais c’est aussi une occasion en or pour investir dans des plans qui auraient été jugés trop ambitieux et coûteux autrefois. Or, de l’avis de plusieurs, il est plus intelligent de faire des déficits en période de ralentissement pour maintenir le niveau de dépenses des consommateurs et permettre une relance économique plus rapide ou à tout le moins une récession moins douloureuse. Après la fin de la crise, il est souhaitable de ramener les dépenses à la baisse et de se faire un coussin pour la prochaine crise et ainsi conserver un niveau d’endettement raisonnable. C’est ce que le Québec semble faire actuellement. La stratégie de Trudeau de dépenser autant en période de croissance est donc troublante, car elle ne semble pas être justifiée par la nature de ses investissements. Il aurait été probablement beaucoup plus acceptable pour les citoyens que les déficits s’accumulent dans un contexte de crise climatique et d’investissement vert massif. Des investissements majeurs en infrastructures de transports en commun, pour la transition économique et écologique de l’Alberta et la transition énergétique pour se débarrasser du charbon partout au Canada aurait été vue d’un bon œil, je crois, et auraient été justifiable économiquement. Pourtant, ces déficits massifs n’ont pas eu l’impact que l’on pouvait espérer. Le système de paie Phénix n’est toujours pas réparé 4 ans plus tard, l’Alberta est toujours aussi dépendante du pétrole sinon plus et le réseau de transport en commun canadien ne semble pas en voie de devenir une fierté nationale ou un modèle à suivre. Pire! On a même continué les subventions pétrolières et acheté un pipeline en triplant sa capacité et en le faisant passé sur le territoire d’une province qui n’en veut pas. Aurait-on donc financé par ces déficits notre consommation trop grande de biens et services? C’est possible et même probable, mais cette décision vient avec un prix et il est quantifiable dans l’immédiat et pourrait augmenter passablement dans le futur. Les frais de la dette à l’heure actuelle sont d’environ 24 milliards de dollars par année. C’est relativement bas en raison des taux d’intérêt, mais ils pourraient augmenter rapidement si les taux venaient à se redresser. D’autre part, en cas de crise économique, la stratégie à adopter serait d’augmenter les dépenses, mais jusqu’où le Canada sera prêt à aller? Est-ce que ces déficits empêcheront le gouvernement d’avoir une réponse appropriée ce qui toucherait durement les plus pauvres et les plus vulnérables d’entre nous? <br><br>' +
          'Il est donc important pour moi de poser une question importante aux partisans de monsieur Trudeau. Considérant les informations économiques qui sont à notre disposition, les risques de récession grandissant et la somme croissante d’argent que nous sommes forcés de verser pour le service de la dette. Est-ce que les budgets Trudeau sont véritablement progressistes? Il me semble que l’ensemble des bénéfices ne revient pas aux plus vulnérables ou même à la classe moyenne à long terme, mais que les risques reposent énormément sur ces derniers. D’autant plus que cet argent aurait pu et aurait dû être utilisé pour une véritable révolution infrastructurelle, mais qu’elle a été détournée à des fins électorales dans plusieurs cas. Les générations futures qui auraient pu bénéficier de ces infrastructures ou de cet argent pourront-ils vraiment regarder l’ère Trudeau comme étant véritablement progressiste ou plutôt comme étant une continuité de la dictature du présent et de la consommation? Seul l’avenir nous le dira, mais je suis de ceux qui pensent que les Canadiens paieront cher cette période d’excès.',
        thumbnailUrl: 'assets/images/bg-1.jpg',
        category: 2,
        authors: [
          {
            id: 1,
            firstName: 'Samuel',
            lastName: 'Lamarche',
            desc: 'Rédacteur en chef',
            photo: 'assets/images/photoSamuel.jpg'
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
        thumbnailUrl: 'assets/images/bg-1.jpg',
        category: 1,
        authors: [
          {
            id: 1,
            firstName: 'Samuel',
            lastName: 'Lamarche',
            desc: 'Rédacteur en chef',
            photo: 'assets/images/photoSamuel.jpg'
          }
        ]
      },
    ];
  }
});

